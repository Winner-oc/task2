
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
      const usernameValue = document.querySelector('#username').value;
      const emailValue = document.querySelector('#email').value;
      const passwordValue = document.querySelector('#password').value;
      const password2Value = document.querySelector('#password2').value;


      // Username checking for errors
      if(usernameValue === '') {
            setErrorFor(username, 'Username cannot be blank');
      } else {
            setSuccessFor(username);
      }



      // Email checking for errors
      if(emailValue === '') {
            setErrorFor(email, 'Email cannot be blank');
      } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Not a valid email');
      } else {
            setSuccessFor(email);
      }



      // Password checking for errors
      if(passwordValue === '') {
            setErrorFor(password, 'Password cannot be blank');
      } else {
            setSuccessFor(password);
      }

      

      // Password2 checking for errors
      if(password2Value === '') {
            setErrorFor(password2, 'Password cannot be blank');
      } else if(passwordValue !== password2Value) {
            setErrorFor(password2, 'Passwords does not match');
      } else{
            setSuccessFor(password2);
      }
      


      // Fetch Post Request
      fetch("http://localhost:3000/users",{
            method: 'POST',
            body: JSON.stringify({
                  username: usernameValue,
                  email: emailValue,
                  password: passwordValue,
                  password2: password2Value
            }),
            headers: { "Content-Type": "application/json; charset=UTF-8" }
      })
      .then((response) => {
            return response.json()
      })
      .then((data) => {
            console.log(data);
      })

});


// function checkInputs() {
      

// }



// Error message function
function setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
      formControl.className = 'form-control error';
      small.innerText = message;
}

// Success message function
function setSuccessFor(input) {
      const formControl = input.parentElement;
      formControl.className = 'form-control success';
}
      

function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


