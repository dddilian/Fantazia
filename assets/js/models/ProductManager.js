class ProductManager {
    constructor() {
        this.allProducts = [];

    }

    addProduct(product) {
        this.allProducts.push(product);
    }

    search(text) { //комбинирана ф-я за търсене по няколко параметъра
        text = text.toLowerCase();

        return this.allProducts.filter(product => product.name.toLowerCase().includes(text));
    }


}