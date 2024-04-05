const successText=document.getElementById("success");
const error=document.getElementById("error");
const invalid=document.getElementById("invalid");

let toastBox = document.getElementById("toastBox");
let successfulMessage='successfully submitted';
let errorMessage='Please fix error';
let invalidMessage='Invalid';


function showAnimation(message){
  let toast= document.createElement("div");
  toast.classList.add('toast');
  toast.innerHTML =message;
  toastBox.appendChild(toast);

  if(message.includes('error')){
    toast.classList.add('error');
  }

  if(message.includes('Invalid')){
    toast.classList.add('invalid');
  }

  setTimeout(()=>{
    toast.remove();
  },6000);
  

}

successText.addEventListener('click',function(){
  showAnimation('<i class="fa-solid fa-circle-check"></i>successfully submitted');
});
error.addEventListener('click',function(){
  showAnimation('<i class="fa-solid fa-circle-xmark"></i>Please fix error');
});
invalid.addEventListener('click',function(){
  showAnimation('<i class="fa-solid fa-circle-xmark"></i>Invalid');
});
