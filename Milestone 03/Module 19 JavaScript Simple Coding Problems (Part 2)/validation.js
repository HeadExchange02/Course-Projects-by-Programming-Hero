function getPrice(product){
    console.log("Type:", typeof product);

    if(typeof product !== "object"){
        return "Not object";
    }

    console.log("Type:", typeof product.price);

    if(typeof product.price !== "number"){
        return "This object not a number";
    }
    
    const price = product.price;
    return price;
}

const price = getPrice({name: "Samsung", price: 30000, colour: "black"});
console.log(price);