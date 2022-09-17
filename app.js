// https://www.omnicalculator.com/conversion/lbs-to-stone-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const stoneRadio = document.getElementById('stoneRadio');
const lbsRadio = document.getElementById('lbsRadio');

let stone;
let lbs = v; 

// labels of the inpust
const variable = document.getElementById('variable');

stoneRadio.addEventListener('click', function() {
  variable.textContent = 'lbs';
  lbs = v;
  result.textContent = '';
});

lbsRadio.addEventListener('click', function() {
  variable.textContent = 'Stone';
  stone = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(stoneRadio.checked)
    result.textContent = `Stone = ${computestone().toFixed(5)}`;

  else if(lbsRadio.checked)
    result.textContent = `lbs = ${computelbs().toFixed(5)}`;
})

// calculation

function computestone() {
  return Number(lbs.value) / 14;
}

function computelbs() {
  return Number(stone.value) * 14;
}