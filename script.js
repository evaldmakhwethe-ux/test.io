

let form=document.getElementById("studentForm");
let NameInput=document.getElementById("name");
let EmailInput=document.getElementById("email");
let PasswordInput=document.getElementById("password");

function ShowError(element,message){
element.textContent=message;
}
function ClearError(element){
element.textContent="";
}
function ShowSuccess(element,message){
element.textContent=message;
element.style.color="green"
}

form.addEventListener("submit",function(event){
    let isValid = true; 
    
    let NameError=document.getElementById("NameError");
     let EmailError=document.getElementById("EmailError");
      let PasswordError=document.getElementById("PasswordError");
    let name=NameInput.value.trim();let email=EmailInput.value.trim();
    let success=document.getElementById("success");
    let password=PasswordInput.value.trim();

    if(name===""){
       event.preventDefault(); 
      ShowError(NameError,"Name is required")
       isValid=false;
    }
    else if(name<3){
      event.preventDefault();
      ShowError(NameError,"Name cannot be less than 3 characters")
      isValid=false
    }
    else{
      ClearError(NameError)
      ShowSuccess(success,"name submitted successfully")
      isValid=true
    }
    
    if(email===""){
       event.preventDefault(); 
      ShowError(EmailError,"Email is required")
       isValid=false;
    }
    else if(!EmailInput.checkValidity()){
      ShowError(EmailError,"Enter a valid email")
    }
    
   if(password===""){
       event.preventDefault(); 
      ShowError(PasswordError,"Password is required")
       isValid=false;
    }
    
  //event.preventDefault();
  //alert("form stopped because you did not enter");
});
