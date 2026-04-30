console.log("hello form another world");

console.log(document)

document.getElementsByClassName("header")

const student = {
    name: "Abul Mia",
    id: 121,
    department: function(department){
        console.log("studing department:", department);
    }
}

// document.getElementsByTagName("li")

const liCollection = document.getElementsByTagName('li');
console.log(liCollection);
for(const li of liCollection){
    console.log(li.innerText);
}


// document.getElementsByTagName("h1")
const allHeading = document.getElementsByTagName('h1');
console.log(allHeading);
for(const heading of allHeading){
    console.log(heading);
    console.log(heading.innerText);
}


// document.getElementById
const foodTitle = document.getElementById('title');
console.log(foodTitle.innerText)

foodTitle.innerText = 'Food I Love Most On Events'
console.log(foodTitle)


// document.getElementsByClassName
const allTimeElements = document.getElementsByClassName('allTime')
console.log(allTimeElements)

for(const element of allTimeElements){
    console.log(element);
    console.log(element.innerText);
}


// document.querySelectorAll('li')
const allListNodes = document.querySelectorAll('li');
console.log(allListNodes)