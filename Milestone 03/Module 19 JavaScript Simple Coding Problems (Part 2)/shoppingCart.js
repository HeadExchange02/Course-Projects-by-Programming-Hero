const products = [
    {name: "shampoo", price: 1200, quantity: 2},
    {name: "wax", price: 1500, quantity: 2},
    {name: "conditionar", price: 1200, quantity: 2},
    {name: "facewash", price: 1300, quantity: 3},
    {name: "gel", price: 800, quantity: 1},
    {name: "perfume", price: 2500, quantity: 4},
];

function cartTotal(products){

    let total = 0;
    for(const product of products){
        // console.log(product);

        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}

const shoppingCost = cartTotal(products);
console.log(shoppingCost);