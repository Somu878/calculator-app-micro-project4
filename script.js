// Get elements
const output = document.getElementById("output");
const buttons = document.querySelectorAll(".element");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const btext = button.innerText;
        //removes the current button text
        if (btext==='DEL'){
            output.innerText =output.innerText.slice(0,-1);
        }
        //resets the output.innertext
        else if(btext ==='RESET'){
            output.innerText=" "
        }
        //displays final evaluated result
        else if(btext==='='){
           let res= output.innerText.replace(/x/g, '*');
           output.innerText=eval(res)
        }
        else{
            output.innerText += btext;

        }
    }); 
});
