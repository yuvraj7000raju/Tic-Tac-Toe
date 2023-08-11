let p = 0
// winner.style.backgroundColor = "blue";
let arr = [10, 10, 10, 10, 10, 10, 10, 10, 10]
let result =[]
let length = 0;
let winner = document.getElementsByClassName("winner")
let a11 = document.getElementById("b11")
let a12 = document.getElementById("b12")
let a13 = document.getElementById("b13")
let a21 = document.getElementById("b21")
let a22 = document.getElementById("b22")
let a23 = document.getElementById("b23")
let a31 = document.getElementById("b31")
let a32 = document.getElementById("b32")
let a33 = document.getElementById("b33")
function check(index){
    return function(){
    if(arr[index]===arr[index+1]===arr[index+2] || arr[index]===arr[index-1]===arr[index-2]  || arr[index-1]===arr[index]===arr[index+1]){
        winner.style.backgroundColor = "blue";
        console.log("winner")
        arr = null
    }
}

}
function addimage(m, n, index) {
    return function () {
            if (arr[index]=== 10) {
            const pic = document.createElement("img")
            if (p == 0) {
                pic.src = "cross.png"
                p = 1
                arr[index] = 1;
            }
            else {
                pic.src = "zero.png"
                p = 0
                arr[index] = 0;
            }
            m.innerHTML = "";
            m.appendChild(pic)
            console.log(n)
            console.log(arr[index])
            result.push(n)
            length++;
            check(index)
        }
    else{
          console.log("hello")
    }}

}
a11.addEventListener("click", addimage(a11, 1, 0))
a12.addEventListener("click", addimage(a12, 2, 1))
a13.addEventListener("click", addimage(a13, 3, 2))
a21.addEventListener("click", addimage(a21, 4, 3))
a22.addEventListener("click", addimage(a22, 5, 4))
a23.addEventListener("click", addimage(a23, 6, 5))
a31.addEventListener("click", addimage(a31, 7, 6))
a32.addEventListener("click", addimage(a32, 8, 7))
a33.addEventListener("click", addimage(a33, 9, 8))