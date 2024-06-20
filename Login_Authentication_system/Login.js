const form = document.querySelector("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const username = form.username.value;
    const password = form.password.value;
    
    const authenticated = authentication(username,password);
    if(authenticated){
        alert("Welcome. :)")
        window.location.href ="https://www.youtube.com/results?search_query=trending+song+2024" ;
        }else{
     alert("wrong username or password. :(");
        }
    
});
function authentication(username,password){
    if(username === "username" && password === "password"){
        return true;
    }else{
        return false;
    
    }

}