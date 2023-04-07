function valid() {
    let password=document.forms["myForm"]["uPassword"].value;
    let uNAme=document.forms["myForm"]["uName"].value;
    let login=document.getElementById("Submit");
   let checkPassword=document.forms["myForm"]["cPassword"].value;
   if (password!=checkPassword ||uNAme.length<5) {
    alert("PLease Check the Name is not less then is 4 letter and assword  is not Mis match")
   }
   else {
    login.addEventListener("click",reset());
    return true;
   }
}
function reset() {
     alert("Form Sumbitted Succesfully")
     let login=document.getElementById("Submit").value="LogOut";
     console.log(login);
}
let form=document.getElementById("form");
form.style.cursor="pointer";
form.style.display="none";
function submit() {
    form.style.display="block";
    document.getElementById("beforelogin").style.display="none";
}
// console.log(form);
