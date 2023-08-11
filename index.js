function addimage(m, n, row) {
    return function () {
        let index = n-1;
        let last = result[-1]
        if (rows[index] === 1 && length == false) {
            const pic = document.createElement("img")
            if (p == 0) {
                pic.src = "cross.png"
                p = 1
                arr[index] = 1;
                rows[index]= 0;
            }
            else {
                pic.src = "zero.png"
                p = 0
                arr[index] = 0;
                rows[index] = 0;
            }
            // winner.backgroundColor = "blue";
            m.innerHTML = "";
            m.appendChild(pic)
            console.log(n)
            console.log(arr[index])
            result.push(n)
            // check(index , n)
            for(let i = 0; i<9; i++){
                if(i == 0 || i == 3|| i ==6){
                    length = arr[i]==arr[i+1] ? arr[i]==arr[i+2] ? true : false : false
                    if(length == true){
                        console.log("winner")
                        break
                    }
                }
                if( i==0 ||i ==1 || i==2){
                length = arr[i]==arr[i+3] ? arr[i]== arr[i+6] ? true :false :false
                if(length == true){
                    console.log("winner")
                    break
                }
               }
               if(i==0){
                   length = arr[i]==arr[i+4] ? arr[i] == arr[i+8] ? true : false : false
                if(length == true){
                    console.log("winner")
                    break
                }
               }
               if(i == 2){
                length = arr[i]==arr[i+2] ? arr[i] == arr[i+4] ? true : false : false
                if(length == true){
                    console.log("winner")
                    break
                }
               }
            }
        }
        else {
            console.log("the game is already over")
        }
        if(length == true){
            let boss = (p ==0) ? "0" : "x" ;
            console.log("!!!",boss, " is winner !!!")
        }
    }
    
}
let p = 0
// winner.style.backgroundColor = "blue";
let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let rows = [1,1,1,1,1,1,1,1,1]
let result = []
let length = false;
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
a11.addEventListener("click", addimage(a11, 1, 1))
a12.addEventListener("click", addimage(a12, 2, 1))
a13.addEventListener("click", addimage(a13, 3, 1))
a21.addEventListener("click", addimage(a21, 4, 2))
a22.addEventListener("click", addimage(a22, 5, 2))
a23.addEventListener("click", addimage(a23, 6, 2))
a31.addEventListener("click", addimage(a31, 7, 3))
a32.addEventListener("click", addimage(a32, 8, 3))
a33.addEventListener("click", addimage(a33, 9, 3))