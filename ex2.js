function verifyEnablement(){
    let selectValue = document.querySelector ("select").value

    if(selectValue == "disabled"){
        document.querySelector("input[name='some-text']").disabled=true
    }

    let pElement = document.querySelector("#message")
    pElement.innerText = "DESABILITADO"
    pElement.style.backgroundColor="red"
    pElement.style.color="white"
    }else{
        document.querySelector("input[name-'name-text'").disabled=false
        pElement.innerText=""
 
    }
}