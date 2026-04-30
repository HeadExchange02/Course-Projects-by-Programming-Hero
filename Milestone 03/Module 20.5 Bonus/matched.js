const products = [
    {id: 1, name: "Xiomi phone One night", price: 19000},
    {id: 2, name: "iphone 16pro", price: 19000},
    {id: 3, name: "mac book air", price: 119000},
    {id: 4, name: "Xiomi laptop", price: 39000},
    {id: 5, name: "Samsung Phone S26", price: 19000}, //===> Phone er 'P' higherCase
    {id: 6, name: "Xiomi phone One night", price: 19000},//===> phone er 'p' lowerCase
    {id: 7, name: "Nokia phone Old friend", price: 19000},
    {id: 8, name: "1+ phone", price: 19000},
    {id: 9, name: "HP Laptop", price: 49000},
    {id: 10, name: "Apple Laptop", price: 59000},
    {id: 11, name: "Asus Laptop", price: 69000},
    {id: 12, name: "Windows Laptop", price: 50000},
]

// for(const product of products){
//     console.log(product);
// }

function matchedProducts(products, search){

    const matched = [];

    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){  //===> for escapeing caseMiss-match use "toLowerCase/toHigherCase"
            matched.push(product); //matched er vhitore push kore dilam product ke.
        }
    }
    return matched;
}

const result = matchedProducts(products, "phone");
console.log(result);

const result2 = matchedProducts(products, "laptop");
console.log(result2);