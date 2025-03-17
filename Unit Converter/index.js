let deg = document.querySelector("input");
let select = document.querySelector("select");
let res = document.querySelector(".output");
let type;
select.addEventListener("change",()=> {
    type = select.options[select.selectedIndex].text;
})
function convertUnits() {
    let input = deg.value
    if(type == "Fahrenheit") {
        res.textContent = (input * 9/5) + 32;
    } else if(type == "Celsius") {
        res.textContent = (input - 32) * 5/9;
    } else if(type == "Kelvin") {
        res.textContent = parseInt(input) + 273.15
    }

}
function reset() {
    deg.value = ""
    res.textContent = ""
}