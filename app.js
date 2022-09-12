const body = document.querySelector("body");

const button =document.querySelector("button");

const colors =[ 
"black", 
"orange",
"red",  
"green",
"yellow", 
"blue", 
"pink", 
"purple", 
"#4287f5", 
"#f542a4", 
"#f58d42"
];

button.addEventListener("click",changeBackground);
let sira = 0;

function changeBackground(){
    //rasgele arkaplan rengi sec
    //const rasgeleSayi = Math.floor(Math.random() * colors.length);
   // const secilenRenk = colors[rasgeleSayi];
   // console.log(rasgeleSayi, secilenRenk)
    //body.style.backgroundColor = secilenRenk;

//sirayla arkaplan rengi sec

if(sira ==11) sira=0;
const secilenRenk = colors[sira];
sira++;
body.style.backgroundColor = secilenRenk;
}
