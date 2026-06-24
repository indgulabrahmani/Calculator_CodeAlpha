const display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    try{

        display.value = eval(display.value);

    }

    catch{

        display.value = "Error";

        setTimeout(()=>{
            display.value="";
        },1000);
    }
}

// Keyboard Support

document.addEventListener("keydown",(e)=>{

    const key = e.key;

    if((key >= "0" && key <= "9") ||
        key=="+" ||
        key=="-" ||
        key=="*" ||
        key=="/" ||
        key=="." ||
        key=="%"){

        appendValue(key);

    }

    else if(key=="Enter"){

        e.preventDefault();
        calculate();

    }

    else if(key=="Backspace"){

        deleteLast();

    }

    else if(key=="Escape"){

        clearDisplay();

    }

});