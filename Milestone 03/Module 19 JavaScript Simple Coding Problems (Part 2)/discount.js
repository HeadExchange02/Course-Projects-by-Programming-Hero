function discountPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 90){
        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity * 70;
        return total;
    }
}

const total = discountPrice(500);
console.log(total);