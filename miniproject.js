const arr=[]
function change1(){
    document.querySelector("#button1").textContent= "Remove from cart"
    let ob = {
        name : document.querySelector("#name1").textContent,
        price : document.querySelector("#price1").textContent,
    }
    arr.push(ob)
    let bj = JSON.stringify(arr);
    localStorage.setItem("Products_cart", bj);
}
function change2(){
    document.querySelector("#button2").textContent= "Remove from cart"
    let ob = {
        name : document.querySelector("#name2").textContent,
        price : document.querySelector("#price2").textContent,
    }
    arr.push(ob)
    let bj = JSON.stringify(arr);
    localStorage.setItem("Products_cart", bj);

}
function change3(){
    document.querySelector("#button3").textContent= "Remove from cart"
    let ob = {
        name : document.querySelector("#name3").textContent,
        price : document.querySelector("#price3").textContent,
    }
    arr.push(ob)
    let bj = JSON.stringify(arr);
    localStorage.setItem("Products_cart", bj);

}
function change4(){
    document.querySelector("#button4").textContent= "Remove from cart"
    let ob = {
        name : document.querySelector("#name4").textContent,
        price : document.querySelector("#price4").textContent,
    }
    arr.push(ob)
    let bj = JSON.stringify(arr);
    localStorage.setItem("Products_cart", bj);

}
function change5(){
   document.querySelector("#button5").textContent= "Remove from cart"
    let ob = {
        name : document.querySelector("#name5").textContent,
        price : document.querySelector("#price5").textContent,
    }
    arr.push(ob)
    let bj = JSON.stringify(arr);
    
    localStorage.setItem("Products_cart", bj);

}
function change6(){
    document.querySelector("#button6").textContent= "Remove from cart"
    let ob = {
        name : document.querySelector("#name6").textContent,
        price : document.querySelector("#price6").textContent,
    }
    arr.push(ob)
    let bj = JSON.stringify(arr);
    
    localStorage.setItem("Products_cart", bj);

}
function change7(){
    document.querySelector("#button7").textContent= "Remove from cart"
    let ob = {
        name : document.querySelector("#name7").textContent,
        price : document.querySelector("#price7").textContent,
    }
    arr.push(ob)
    let bj = JSON.stringify(arr);
    
    localStorage.setItem("Products_cart", bj);

}
function change8(){
    document.querySelector("#button8").textContent= "Remove from cart"
    let ob = {
        name : document.querySelector("#name8").textContent,
        price : document.querySelector("#price8").textContent,
    }
    arr.push(ob)
    let bj = JSON.stringify(arr);
    localStorage.setItem("Products_cart", bj);
}
console.log(arr)