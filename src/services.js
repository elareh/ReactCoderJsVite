const products = [
    {id: "1", name: "Iphone 12", price: 2399, category: "phones", image: "../src/assets/images/iphone12.jpg"},
    {id: "2", name: "Samsung Galaxy S21", price: 1999, category: "phones", image: "../src/assets/images/sgalaxy21.jpg"},
    {id: "3", name: "Google Pixel 6", price: 1799, category: "phones", image: "../src/assets/images/gpixel6.jpg"},
    {id: "4", name: "MacBook Pro 13", price: 3499, category: "notebooks", image: "../src/assets/images/macbookpro13.jpeg"},
    {id: "5", name: "Dell XPS 15", price: 2799, category: "notebooks", image: "../src/assets/images/dellxps13.webp"},
    {id: "6", name: "HP Spectre x360", price: 2299, category: "notebooks", image: "../src/assets/images/hpspectre.webp"},
    {id: "7", name: "iPad Pro", price: 1699, category: "tablets", image: "../src/assets/images/ipadpro.jpg"},
    {id: "8", name: "Samsung Galaxy Tab S7", price: 1499, category: "tablets", image: "../src/assets/images/galaxytab.jpg"},
    {id: "9", name: "Microsoft Surface Pro 7", price: 1899, category: "tablets", image: "../src/assets/images/surfacepro.jpg"}
]



export const getProduct = (id) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            const product = products.find(p => p.id == id);

            if (product) {
                resolve(product);
            } else {
                reject("No existe el producto");
            }
        }, 1000);
        });
    };


export const getProducts = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {


            const productsFiltered = category ? products.filter(product => product.category == category) : products;

            resolve(productsFiltered);

        }, 1000);
    });
};

