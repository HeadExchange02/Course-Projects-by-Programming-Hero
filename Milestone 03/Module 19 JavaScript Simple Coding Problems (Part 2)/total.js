const products = [
    {name: "shampoo", price: 1200},
    {name: "wax", price: 1500},
    {name: "conditionar", price: 1200},
    {name: "facewash", price: 1300},
    {name: "gel", price: 800},
    {name: "perfume", price: 2500},
];


function getShopingTotal(products){

    let total = 0
    for(const product of products){
        // console.log(product);

        total = total + product.price;
    }

    return total;
}

const total = getShopingTotal(products);
console.log("Total cost:", total);