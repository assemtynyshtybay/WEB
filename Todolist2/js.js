
function add() {

    let data = document.getElementById("in");
    if(data.value!="") {
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox")
        checkbox.addEventListener("click", function () {
            check(this)
        });
        let label = document.createElement("label");
        label.innerHTML = data.value;
        let btn = document.createElement("button");
        btn.addEventListener("click", function () {
            remove(this)
        });
        btn.innerHTML = "<img src='images/rubbish%20.jpg'>";
        btn.setAttribute("class", "delete");
        let block = document.createElement("div");
        block.setAttribute("class", "item");
        block.appendChild(checkbox);
        block.appendChild(label);
        block.appendChild(btn);
        document.getElementById("items").appendChild(block);
        data.value="";
    }
}
//var list="";
function remove(element) {
    //list+=document.getElementById("items");
    document.getElementById("items").removeChild(element.parentNode);
}

function check(element) {
    if (element.nextElementSibling.style.textDecoration == "line-through")
        element.nextElementSibling.style.textDecoration = "none";
    else  element.nextElementSibling.style.textDecoration = "line-through";
}
// function show(){
//    let hist= document.createElement("p");
//     hist.innerText=list;
// }
