
var Navlinks=document.getElementById("navLinks");

function showMenu(){
    Navlinks.style.right="50%";
    Navlinks.style.left=0;
    Navlinks.style.transition="all ease 2s";
}
function hideMenu(){
    Navlinks.style.right="unset";
    Navlinks.style.left="-100%";
    Navlinks.style.transition="all ease 2s";    
}
window.onscroll=function(){
    console.info(document.documentElement.scrollTop);
    var goToTop=document.getElementById("backtop");
    if(document.documentElement.scrollTop>300||document.body.scrollTop > 300){
        goToTop.style.display="flex";
    }
        else{
            goToTop.style.display="none";
        }
    }

function goToTop(){
    var timer=setInterval(function(){
        document.documentElement.scrollTop-=10;
        if(document.documentElement.scrollTop<=0){
            clearInterval(timer);
        }
    },1);
}
function Time() {

    // Creating object of the Date class
    var date = new Date();
  
    // Get current hour
    var hour = date.getHours();
    // Get current minute
    var minute = date.getMinutes();
    // Get current second
    var second = date.getSeconds();
  
    // Variable to store AM / PM
    var period = "";
  
    // Assigning AM / PM according to current hour
    if (hour >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }
  
    // Converting the hour in 12-hour format
    if (hour == 0) {
        hour = 12;
    } else {
        if (hour > 12) {
            hour = hour - 12;
        }
    }
  
    // Updating hour, minute, and second
    // if they are less than 10
    hour = update(hour);
    minute = update(minute);
    second = update(second);
  
    // Adding time elements to the div
    document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
  
    // Set Timer to 1 sec (1000 ms)
    setTimeout(Time, 1000);
  }
  
  // Function to update time elements if they are less than 10
  // Append 0 before time elements if they are less than 10
  function update(t) {
    if (t < 10) {
      return "0" + t;
    }
    else {
      return t;
    }
  }
  
  Time();

/*let n=$(".slider > div").length;
let h="";
for(let i=0;i<n;i++)
    h+=`
    <button class="digit">${i+1}</button>

`;
$(".slider-button").html(h);
$(".slider").height($(".slider img").height()+5);
$("button.digit").click(function(){
    let idx=parseInt($(this).text())-1;
    $(".slider > div").SlideUp("slow");
    $(".slider > div").eq(idx).show().slideDown("slow");
    $("button.digit").removeClass("active");
    $("button.digit").eq(idx).addClass("active");

});*/



function loadMajor(){
    fetch("index.json").then(res=> res.json()).then(data => {
        let h="";
        for(let p of data)
        h+= `
        <div class="major-col">
            <h3>${p.title}</h3>
            <p>${p.text}</p>
        </div>
    `;
    let d=document.getElementById("major-row");
    d.innerHTML+=h;
    });
};
function loadNew(){
    fetch("new.json").then(res=> res.json()).then(data => {
        let k="";
        for(let c of data)
        k+= `
        <div class="new-content">
            <img src=${c.image} alt="">
            <h4>${c.name}</h4>
            <p>${c.text}</p>
        </div>
    `;
    let f=document.getElementById("new-row");
    f.innerHTML+=k;
    }) ;
};
window.onload=function(){
    loadMajor();
    loadNew();
}

