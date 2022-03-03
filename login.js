
let btnBack = document.querySelector(".back-btn");

// Back button function
btnBack.addEventListener('click', () => {
      window.history.back();
});


// Reference to the Form element
const form = document.querySelector('#form');


form.addEventListener('submit', e => {
      e.preventDefault();
      
      // Getting the values from the individual input field
      const emailValue = document.querySelector('#email').value;
      const passwordValue = document.querySelector('#password').value;


      // Fetch Get Request
      fetch("http://localhost:3000/users")
            .then(response => {
                  return response.json();
            })
            .then(responseData => {
                  console.log(responseData);
            });
});

// function checkInputs() {
      
//       if(usernameValue === '') {
//             setErrorFor(username, 'Username cannot be blank');
//       } else {
//             setSuccessFor(username);
//       }
      
//       if(emailValue === '') {
//             setErrorFor(email, 'Email cannot be blank');
//       } else if (!isEmail(emailValue)) {
//             setErrorFor(email, 'Not a valid email');
//       } else {
//             setSuccessFor(email);
//       }
      
//       if(passwordValue === '') {
//             setErrorFor(password, 'Password cannot be blank');
//       } else {
//             setSuccessFor(password);
//       }
      
//       if(password2Value === '') {
//             setErrorFor(password2, 'Password2 cannot be blank');
//       } else if(passwordValue !== password2Value) {
//             setErrorFor(password2, 'Passwords does not match');
//       } else{
//             setSuccessFor(password2);
//       }
// }

function setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
      formControl.className = 'form-control error';
      small.innerText = message;
}

function setSuccessFor(input) {
      const formControl = input.parentElement;
      formControl.className = 'form-control success';
}
      

function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

























