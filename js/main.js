let elButton1 = document.getElementById('arrows-btn_one');
let elButton2 = document.getElementById('arrows-btn_two');
let elButton3 = document.getElementById('arrows-btn_three');
let elButton4 = document.getElementById('arrows-btn_four');
let elButton5 = document.getElementById('arrows-btn_five');

let elCloselabel1 = document.getElementById('label-wrapper-id_one');
let elCloselabel2 = document.getElementById('label-wrapper-id_two');
let elCloselabel3 = document.getElementById('label-wrapper-id_three');
let elCloselabel4 = document.getElementById('label-wrapper-id_four');
let elCloselabel5 = document.getElementById('label-wrapper-id_five');

let elInput = document.querySelectorAll('input[type="radio"]');
const elText1 = document.querySelector('.black-text_one');
const elText2 = document.querySelector('.black-text_two');
const elText3 = document.querySelector('.black-text_three');
const elText4 = document.querySelector('.black-text_four');
const elText5 = document.querySelector('.black-text_five');
let a  = document.querySelectorAll('.checkbox-input-heading')

/* elbutton listener */
elButton1.addEventListener("click", function () {
  elButton1.classList.toggle("arrows-button_first-rotate");
  elCloselabel1.classList.toggle("open");
});

elButton2.addEventListener("click", function () {
  elButton2.classList.toggle("arrows-button-rotate");
  elCloselabel2.classList.toggle("label-wrapper-close");
});

elButton3.addEventListener("click", function () {
  elButton3.classList.toggle("arrows-button-rotate");
  elCloselabel3.classList.toggle("label-wrapper-close");
});

elButton4.addEventListener("click", function () {
  elButton4.classList.toggle("arrows-button-rotate");
  elCloselabel4.classList.toggle("label-wrapper-close");
});

elButton5.addEventListener("click", function () {
  elButton5.classList.toggle("arrows-button-rotate");
  elCloselabel5.classList.toggle("label-wrapper-close");
});


// TEXT START
a[0].addEventListener("click", function () {
  elButton1.classList.toggle("arrows-button_first-rotate");
  elCloselabel1.classList.toggle("open");
});

a[1].addEventListener("click", function () {
  elButton2.classList.toggle("arrows-button-rotate");
  elCloselabel2.classList.toggle("label-wrapper-close");
});

a[2].addEventListener("click", function () {
  elButton3.classList.toggle("arrows-button-rotate");
  elCloselabel3.classList.toggle("label-wrapper-close");
});

a[3].addEventListener("click", function () {
  elButton4.classList.toggle("arrows-button-rotate");
  elCloselabel4.classList.toggle("label-wrapper-close");
});

a[4].addEventListener("click", function () {
  elButton5.classList.toggle("arrows-button-rotate");
  elCloselabel5.classList.toggle("label-wrapper-close");
});
//  TEXT END

/* Input change */
elInput.forEach(function (value,index){
  value.addEventListener("change", function() {

    if(value.checked) {
      if(index < 2 ){
        elText1.textContent = value.value;
      } else if ( index > 2 && index <= 5) {
        elText2.textContent = value.value;
      } else if ( index > 5 && index <= 8) {
        elText3.textContent = value.value;
      } else if ( index > 8 && index <= 11) {
        elText4.textContent = value.value;
      } else if ( index > 11 && index <= 14) {
        elText5.textContent = value.value;
      }
    }
  });
});
