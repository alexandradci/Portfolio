




let my_name = document.getElementById("my_name");
let my_email = document.getElementById("my_email");
let my_message = document.getElementById("my_message");
let contact_form = document.getElementById("contactform");
let email_input = document.getElementById("email");
let name_input = document.getElementById("fullname");
let message_input = document.getElementById("message");

function createAlert(my_event){
    my_event.preventDefault();
    console.log(email_input.value);
    console.log(name_input.value);
    console.log(message_input.value);
    my_email.innerHTML = "Email: "+ email_input.value;
    my_name.innerHTML = "Name: "+ name_input.value;
    my_message.innerHTML = "Message: "+ message_input.value;
}
contact_form.addEventListener("submit", createAlert);