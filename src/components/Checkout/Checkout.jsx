import { useContext, useState } from "react";
import CartContext from "../../context/CartContext.js";
import { serverTimestamp } from "firebase/firestore";
import { getCartTotal, mapCartToOrderItems } from "../../utils.js";
import { createOrder } from "../../services.js";
import "./Checkout.css";


const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, clear, removeItem, updateItemQuantity } = useContext(CartContext);

  const total = getCartTotal(cart);

  const handleCheckout = () => {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;

    // Verificar si al menos uno de los campos tiene contenido
    if (nombre || apellido || telefono || email) {
      // Realizar la compra o la acción deseada aquí
      // Puedes colocar tu lógica de compra aquí
      setIsLoading(true); // Mostrar mensaje de procesamiento

      const order = {
        buyer: {
          name: nombre, // Usar los valores del formulario
          phone: telefono,
          email: email,
        },
        items: mapCartToOrderItems(cart),
        total,
        date: serverTimestamp(),
      };

      createOrder(order).then((docRef) => {
        setOrderId(docRef.id);
        setIsLoading(false);
        clear();
        alert('Compra realizada con éxito.');
      });
    } else {
      alert('Por favor, complete al menos un campo del formulario de contacto.');
    }
  };


  return (
    <div className="textos">
    <h2>Resumen de la compra</h2>
  
    {orderId && <p>El id de la orden es: {orderId}</p>}
  
    {!orderId && (
      <>
 <div>
  <h4>Formulario de contacto</h4>
  <div className="form-container">
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="telefono">Teléfono:</label>
        <input type="text" id="telefono" name="telefono" className="form-control" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" className="form-control" />
      </div>
    </form>
  </div>
</div>
  
        <div>
          <h4>Productos</h4>
          <div className="row">
            {cart.map((item) => (
              <div key={item.id} className="col-md-4">
                <div className="card mb-4">
                  <img src={item.image} alt="" className="card-img-top image-fixed-size image" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Cantidad: {item.quantity}</p>
                    <p className="card-text">Precio por unidad: ${item.price}</p>
                    <p className="card-text">Subtotal: ${item.price * item.quantity}</p>
                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="btn btn-danger">-</button>
                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="btn btn-danger">+</button>
    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      <div className="opciones">
        <p>Total de la compra: $ {total}</p>
        <button onClick={handleCheckout} className="btn btn-primary">
          Finalizar compra
        </button>
        </div>
        {isLoading && <p>Procesando compra...</p>}
      </>
    )}
  </div>
  );
};

export default Checkout;