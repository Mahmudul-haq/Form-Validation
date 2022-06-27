//caching the dom elements
const form=document.querySelector('#form');
const userName=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const password2 = document.querySelector('#retype-password');
function displayError(element,errorMsg)
{
    element.parentElement.className ='form-control error';
    element.parentElement.querySelector('small').innerText=errorMsg;
}
function displaySuccess(element)
{
    element.parentElement.className='form-control success';
}
function validateUser(userName,minlen,maxlen)
{
    if(userName.value.length < minlen){
        
        displayError(userName,"User name must be atleast "+ minlen +" characters long!");
    
        }
        else if(userName.value.length > maxlen)
        {
           
            displayError(userName,"User name must be less than "+maxlen+ "characters long!");
        
        }
        else
        {
            displaySuccess(userName);
    
        }
    
}
function validateEmail(input)
{
    if(input.value == '')
    {
        displayError(input,"Please enter an Email address");
    }
    else if( !input.value.match(/\S+@\S+\.\S/))
    {
        displayError(input,"Please enter a valid Email address!");
    }
    else 
    {
        displaySuccess(input);
    }
}
//validate password
function validatePassword(input)
{
    if(input.value == '')
    {
        displayError(input,"Password field can not be empty!");
    }
    else if(!input.value.match(/[a-zA-Z0-9]{8,}/)){
        displayError(input,"Your password must be eight characters long! ");
    }
    else 
    {
        displaySuccess(input);
    }
}
//checkpassword matching
function matchPassword(inputOne,inputTwo)
{
    if(inputTwo.value == "")
    {
        displayError(inputTwo,"Password field can not be empty!");
    }
    else if(inputOne.value != inputTwo.value)
    {
        displayError(inputTwo,"Password didn't match!");
    }
    else
    {
        displaySuccess(inputTwo);
    }
}

//form eventliser
form.addEventListener('submit',function(e)
{
    e.preventDefault();
    validateUser(userName,4,15);
    validateEmail(email)
    validatePassword(password);
    matchPassword(password,password2);
    
   
})