// 
const employeeInput = document.getElementById('employee');
const submit = document.getElementById('submit');
const showMessage = document.getElementById('showMessage');



// Add event listener
submit.addEventListener('click', async () =>{
let profileDisplay = document.createElement('div');
let response = await fetch("http://localhost:3000/jobTitle", {
 method: 'POST',
 headers: {'Content-Type': 'application/json'},
 body: JSON.stringify({jobTitle:employeeInput.value})
});
let responseData = await response.json();
console.log(responseData)

responseData.forEach(job => {

    // Create a paragraph
    let para = document.createElement("p");

    // put data inside the paragraph

    // Append the paragraph to the div
//  showMessage.appendChild();

    
});
//  profileDisplay.textContent 

 
 console.log('click event occure')
})