const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");


// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const email = loginForm.email.value;
})


// define the callAPI function that takes email as parameters
var callAPI = (email)=>{
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"email":email});
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    url = " https://y1gibi1ksk.execute-api.us-east-1.amazonaws.com/dev";

  //  JSON.parse(result).body

    window.location = "test.html"

    // make API call with parameters and use promises to get response
    fetch(url, requestOptions)
    .then(response => response.text())
    .then(result =>  window.location = (JSON.parse(result).body))
    .catch(error => console.log('error', error));

}