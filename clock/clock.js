let hrs=document.getElementById("hrs");
let sec=document.getElementById("sec");
let min=document.getElementById("min");
let Ap=document.getElementById("AP");



// setInterval(()=>{
//     let currentTime=new Date();

//     let h = currentTime.getHours();
//     let m = currentTime.getMinutes();
//     let s = currentTime.getSeconds();

//     hrs.innerHTML = h < 10 ? "0" + h : h;
//     min.innerHTML = m < 10 ? "0" + m : m;
//     sec.innerHTML = s < 10 ? "0" + s : s;
//     Ap.innerHTML= h<=12 ? "AM":"PM";


// },1000);

function updateClock() {
    let currentTime = new Date();

    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();
  
 

    hrs.innerHTML = h < 10 ? "0" + h : h;
    min.innerHTML = m < 10 ? "0" + m : m;
    sec.innerHTML = s < 10 ? "0" + s : s;
    Ap.innerHTML = h<=12 ? "AM":"PM";

    // Call the function again after 1000ms
    setTimeout(updateClock, 1000);
}

updateClock();



