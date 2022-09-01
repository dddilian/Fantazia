class User {
    constructor() {
        this.productsInCart = [];
        this.orderHistory = [];
    }

    addToCard(product, orderedCount) {

        let productInCart = {
            ...product,
            orderedCount: orderedCount,
            totalProductValue: orderedCount * product.price,
        }

        this.productsInCart.push(productInCart);

    }

    // updateProductCount(product, count) {
    //     let productToUpdate = this.productsInCart.find(p => p.name === product.name);
    //     productToUpdate.product.orderedCount = count;
    // }


    getCountInCart() {
        let countInCart = 0;

        this.productsInCart.forEach(product => {
            countInCart += Number(product.orderedCount);
        })

        return countInCart;
    }


    deleteProductFromCart(product) {
        let idx = this.productsInCart.indexOf(p => p.product.name === product.name);

        this.productsInCart.splice(idx, 1);



    }


    getTotal() {
        let total = 0;

        this.productsInCart.forEach(product => {

            total += product.totalProductValue;
        })

        return total;
    }


    addOrderToHistory(orderObj) {
        this.orderHistory.push(orderObj);
        this.productsInCart = [];
    }

}