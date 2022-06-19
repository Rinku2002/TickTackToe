b1=document.querySelector(".text-1")
b2=document.querySelector(".text-2")
b3=document.querySelector(".text-3")
b4=document.querySelector(".text-4")
b5=document.querySelector(".text-5")
b6=document.querySelector(".text-6")
b7=document.querySelector(".text-7")
b8=document.querySelector(".text-8")
b9=document.querySelector(".text-9")

let value=0;
let ischange=true;
function change(v){
    if(ischange){
        let c=`.text-${v}`;
        let b=document.querySelector(c)
        if(b.textContent=="-"){
            if(value==1){
                b.textContent="X";
            }
            else{
                b.textContent="O";
            }
            value=(value+1)%2;
        }
        checkwin();
    }
}
function checkwin(){
    let a=[-1,b1.textContent,b2.textContent,b3.textContent,b4.textContent,b5.textContent,b6.textContent,b7.textContent,b8.textContent,b9.textContent]
    b=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
    for(let i=0;i<8;i++){
        if(a[b[i][0]]==a[b[i][1]] && a[b[i][1]]==a[b[i][2]] && a[b[i][0]]!="-"){
            let b_1=document.querySelector(`.b-${b[i][0]}`);
            let b_2=document.querySelector(`.b-${b[i][1]}`);
            let b_3=document.querySelector(`.b-${b[i][2]}`);
            b_1.style.backgroundColor="blue";
            b_2.style.backgroundColor="blue";
            b_3.style.backgroundColor="blue";
            ischange=false;
        }
    }
}