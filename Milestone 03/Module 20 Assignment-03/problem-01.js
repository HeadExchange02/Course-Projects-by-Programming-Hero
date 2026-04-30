// ✅কী কী চেক করা হচ্ছে

// ইনপুট সংখ্যা না হলে "Invalid" রিটার্ন

// discount যদি 0–100 এর বাইরে হয় → "Invalid"

// ডিসকাউন্ট ক্যালকুলেট করে নতুন দাম বের করা

// দশমিকের পর ৩ ঘর দেখানো

// return টাইপ string




/*function signature/sample */
function newPrice(currentPrice, discount ) {

    // console.log(currentPrice , discount);
    if(typeof currentPrice !== "number" || typeof discount !== "number" || discount < 0 || discount >= 100){
        return "Invalid";
    }
    
    let discountAmount = (currentPrice * discount) / 100;
    let finalPrice = currentPrice - discountAmount;
    

    return finalPrice.toFixed(3);
}

const finalPrice = newPrice(1000 , 10);
console.log(finalPrice);