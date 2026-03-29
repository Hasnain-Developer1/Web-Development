let button = document.getElementById("btn")

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("dblclick", ()=>{
    // alert("I was clicked yayyy!")
    document.querySelector(".box").innerHTML = (" <b>Hey you are clicked Enjoy Your click </b> ")
})
button.addEventListener("contextmenu", ()=>{
    alert("I was clicked yayyy!") 
})
document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode)
})