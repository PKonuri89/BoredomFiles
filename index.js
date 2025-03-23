
function alertFunction() {
  alert("It's very much possible to optimze your time in Computer Science! I'm not bragging but i'm very good at this.");
}

function offlineFunction() {
  alert("Hey, just a suggestion, but please go an get wifi!");
}

function onloadFunction() {
  alert("HIIIIII!!!!!!!");

}

function NaturalSelection() {
// a string variable
   var name;
   var age;
   var message;

// name="gustav";

name=prompt("Enter your name");
age=prompt("Enter your age");

if(age<=16){
    message="Please join the Pre-IB programme, "+name;
} if (age>20) {
    message="We dont think you are eligible, Mr. "+name;
} else{
    message="Please join the IB Diploma programme, "+name;
}

  window.alert(message);

}


function darkmode(){
  var element = document.body;
  element.classList.toggle("bg-dark");
}



function mailTo(){

  var email;

  email=prompt("Enter the email address to send an email to...")

  location.replace("https://mail.google.com/mail/u/0/?fs=1&to="+email"&tf=cm")

}


function VNCS(){

    var i;

    for (i=0; i<20; i++){

    console.log(i);
    console.log("HI!!")

}
}
