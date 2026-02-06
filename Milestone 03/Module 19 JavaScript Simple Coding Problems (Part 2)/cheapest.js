const phones = [
    {name: "Samsung", price: 24000, cam: "25mp", color: 'black'},
    {name: "Xiomi", price: 15600, cam: "15mp", color: 'black'},
    {name: "Oppo", price: 15000, cam: "15mp", color: 'black'},
    {name: "OnePlus 1+", price: 35000, cam: "35mp", color: 'black'},
    {name: "Black Berry", price: 30000, cam: "35mp", color: 'black'},
    {name: "Vivo", price: 12000, cam: "15mp", color: 'black'},
];

function getCheapestPhone(phones){
    // console.log(phones);

    let min = phones[0];
    for(const phone of phones){
        // console.log(phones);

        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

const cheap = getCheapestPhone(phones);
console.log("Cheapest phone is:", cheap);