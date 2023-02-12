const employeeInput = document.getElementById('employee');
const submit = document.getElementById('submit');
const showMessage = document.getElementById('showMessage');

submit.addEventListener('click', async () =>{
let profileDisplay = document.createElement('div');
//  profileDisplay.textContent 
 showMessage.appendChild(profileDisplay);
 
 console.log('click event occure')
})