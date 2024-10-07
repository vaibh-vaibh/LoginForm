// event.preventDefault() ka use karte hai apne page ko refresh hone se bachane k liye

const password = document.getElementById("pass");
const conpassword = document.getElementById("conpass");

console.log(password, conpassword);

const outputDiv = document.querySelector('.output');
function form_Submit(event){
    event.preventDefault();

const name = document.getElementById("name");
const email = document.getElementById("email");
const college = document.getElementById("clg");
const gender = document.getElementById("gender");
const year = document.getElementById("year");
const stream = document.getElementById("stream");

    console.log(password.value);
    console.log(conpassword.value);

    if(password.value===conpassword.value){
        
        outputDiv.innerHTML=`
        <p><b> Name:-  ${name.value}</b> </p>
        <br>
        <p><b> Email:- ${email.value} </b></p>
        <br>
        <p><b> College Name:- ${college.value} </b></p>
        <br>
        <p><b> Gender:- ${gender.value} </b></p>
        <br>
        <p><b> Year:- ${year.value} </b></p>
        <br>
        <p><b> Stream:- ${stream.value}</b></p>
        `;
        
    }


    else{
       outputDiv.innerHTML = `<p> Please write correct password </p>`;
    }
    
}