let input=document.getElementById('inputBox');// to take the inputbox data and store into the variable input nsme 
let buttons=document.querySelectorAll('button');//to take all the input from buttons
let string="";// to store result
let arr=Array.from(buttons);//to careate array of buttons 
arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string ="";
            input.value=string;
        }
        else if(e.target.innerHTML == 'DEL'){

            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string+=e.target.innerHTML;
            input.value=string;

        }
         
    })
})