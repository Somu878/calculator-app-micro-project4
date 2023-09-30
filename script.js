// Get elements
const output = document.getElementById("output");
const buttons = document.querySelectorAll(".element");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const btext = button.innerText;
        if (btext==='DEL'){
            output.innerText =output.innerText.slice(0,-1);
        }
        else if(btext ==='RESET'){
            output.innerText=" "
        }
        else if(btext==='='){
           let res= output.innerText.replace(/x/g, '*');
           output.innerText=eval(res)
        }
        else{
            output.innerText += btext;

        }

        
    }); 
});
