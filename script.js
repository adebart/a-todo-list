// function adit(){
//     var userinput = document.getElementById("inp").value

//     document.getElementById("display").innerHTML = userinput
// }

// var myspan = document.createElement("span").innerHTML

// var mytext = document.createTextNode("")

// var mytext = document.createTextNode(document.getElementById("sew").value)

function addition() {
    var botton = document.createElement("button")
    var vet = document.createTextNode("delete")
    // butt.setAttribute ('onclick', 'delett();')
    botton.appendChild(vet)

    botton.addEventListener('click', function hanleclick(){
        console.log ("clicked");
        // this.parentNode.removeChild (list);
        // list.remove();
        list.style.textDecoration = 'line-through'
        
    })
    var parent = document.getElementById("dew")
    var fet = document.getElementById("sew").value + '       '
    var list = document.createElement("li")
   
    var mytext = document.createTextNode(fet)


    list.appendChild(mytext)
    list.appendChild(botton)
    parent.appendChild(list)
    var qwe = null
    fet = qwe
   
    
}




function dele(){
    document.getElementById("dew").innerHTML = ""
}
function delet(){
    document.getElementById("sew").value = ""
}
// function delett(){
//     document.getElementById(list).value = ''

// }