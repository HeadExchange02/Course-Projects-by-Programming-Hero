const mobile = {
    brand : "Samsung",
    model : "S26 Ultra",
    price : "340000",
    color : "Charcoil",
    camera : {
        quality : "1200mp",
        zoom : "100x",
        resulation : "12k",
    },
    isNew : true,
}

console.log(mobile);

for(const prop in mobile){

    console.log(prop);
    console.log(mobile[prop]);

}


const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key, ":", mobile[key]);
}