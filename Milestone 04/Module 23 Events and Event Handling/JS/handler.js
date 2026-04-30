document.getElementById('btn-update-title')
    .addEventListener('click', function(){
        console.log('Title Updated');
        const titleElement = document.getElementById('page-title');
        console.log(titleElement);
        console.log(titleElement.innerText);
        titleElement.innerText = 'Great job, it works perfectly!!!'
})



// login btn 
document.getElementById('btn-login')
    .addEventListener('click', function(){
        console.log('login btn clicked');
        const titleElement = document.getElementById('user-info');
        console.log(titleElement);
        console.log(titleElement.innerText);
        titleElement.innerText = 'Thanks for Logging In'
    })


// name-update
document.getElementById('btn-update')
    .addEventListener('click', function(){
        console.log('name update btn clicked');

        // get the text from input field name 
        const nameInput = document.getElementById('input-name');
        console.log(nameInput);

        const name = nameInput.value;
        console.log('name', name)

        //set the new name
        const nameP = document.getElementById('name-update');
        nameP.innerText = name;
    }
)