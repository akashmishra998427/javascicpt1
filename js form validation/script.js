function seterror(id,error){
    //sets error inside tag of id
    element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML=error;
    // element.getElementById('pass')
    // element.getElementsByClassName('formerror')[3].innerHTML=reeor;
}

function validation(){
    //validates the form
    var returnval=true;

    // preform validation and if validation fails set the value of return val to false  


    var name=document.forms['form validation']["fname"].value;
   if(name.length<5){
    seterror("name","length of name is too short");
    returnval = false;
   }

  


   var email=document.forms['form validation']["femail"].value;
   if(email.length>15){
    seterror("email","length of email is too long");
    returnval = false;
   }

   
   var phone=document.forms['form validation']["femail"].value;
   if(phone.length!=10){
    seterror("phone","phone number shoul");
    returnval = false;
   }


    return returnval;
}