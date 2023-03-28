let scornumb = document.getElementById("scornumb");

let mainques = document.getElementById("mainques");
let firsnumb = document.getElementById("firsnumb");
let secnumb = document.getElementById("secnumb");

let inpuans = document.getElementById("inpuansw");
let but = document.getElementById("but");

let congra = document.getElementById("congra");
let falls = document.getElementById("falls");
let noth = document.getElementById("notha");

let hiddenans = document.getElementById("hiddenans");

let count = 0;
scornumb.innerHTML = count;

let firsnumber = Math.round(Math.random() * 10);
let secnumbb = Math.round(Math.random() * 10);

firsnumb.innerHTML = firsnumber;
secnumb.innerHTML = secnumbb;

function checkkk() {
  // let w=inpuans.value;
  // console.log(`the type of input ${typeof(inpuans.value)}`);
  if (firsnumber * secnumbb === +inpuans.value) {
    console.log("hhhhhhhhh");
    count++;
    scornumb.innerHTML = count;

    let redd = setTimeout(() => {
      congra.style.cssText = "display:flex";
      but.disabled = true;
      inpuans.disabled = true;
    }, 300);

    congra.addEventListener("click", () => {
      congra.style.cssText = "display:none";
      but.disabled = false;
      inpuans.disabled = false;
    });
  } else if (
    firsnumber * secnumbb !== +inpuans.value &&
    !isNaN(inpuans.value)
  ) {
    count--;
    scornumb.innerHTML = count;
    console.log(typeof +inpuans.value);
    let gree = setTimeout(() => {
      falls.style.cssText = "display:flex";
      but.disabled = true;
      inpuans.disabled = true;
    }, 300);

    falls.addEventListener("click", () => {
      falls.style.cssText = "display:none";
      but.disabled = false;
      inpuans.disabled = false;
    });
  } else {
    let timnotha = setTimeout(() => {
      notha.style.cssText = "display:flex";
      but.disabled = true;
      inpuans.disabled = true;
    }, 300);

    notha.addEventListener("click", () => {
      notha.style.cssText = "display:none";
      but.disabled = false;
      inpuans.disabled = false;
    });
  }

  firsnumber = Math.round(Math.random() * 10);
  secnumbb = Math.round(Math.random() * 10);

  firsnumb.innerHTML = firsnumber;
  secnumb.innerHTML = secnumbb;

  inpuans.value = "";
}
but.addEventListener("click", checkkk);
inpuans.addEventListener("keyup", (e) => {
  if (e.keyCode == "13") {
    checkkk();
  }
});

