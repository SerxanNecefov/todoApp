const body = document.querySelector(".body")
const div_boyuk = document.querySelector(".div_boyuk")
const div_kicik = document.querySelector(".div_kicik")
const input = document.querySelector(".input")
const enter = document.querySelector(".enter")
const delet = document.querySelector(".delete")
const ul = document.querySelector(".ul")
const erorMassage = document.querySelector(".erorMassage")


let data = []

let son = input.addEventListener("input" , function a(e){
    const value = e.target.value;
    if (value.length < 5) {
        erorMassage.style.display = "block"    
    }else{
        erorMassage.style.display = "none"
    }
})

enter.addEventListener("click" , function b(){
    if (input.value.length < 5){
        alert(`en az 5 element elave olunmalidir`);
        return;
    }
    const value1 = input.value;
    data.push(value1);
    console.log(data);
    input.value = "";
    let li = document.createElement("li")
    li.innerText = value1
    ul.appendChild(li)

    delet.addEventListener("click" , function c(){
        ul.remove(li)
        data.shift()
        console.log(data)
    })    
})
input.addEventListener("keydown" , function d(e){
    if(e.key==="Enter"){
    if (input.value.length < 5){
        alert(`en az 5 element elave olunmalidir`);
        return;
    }
    const value1 = input.value;
    data.push(value1);
    console.log(data);
    input.value = "";
    let li = document.createElement("li")
    li.innerText = value1
    ul.appendChild(li)
}})

