let izm = document.getElementById("textSwitch")
let regularIn = document.getElementById("regularIn")
let regularSwitch = document.getElementById("regularSwitch")



function Izmena() {
    let a = regularIn.value
    let b = regularSwitch.value
    let c = izm.textContent
    let d = new RegExp(a,'gi')
    if (d) {
        izm.textContent = c.replace(d,b)
    }
}