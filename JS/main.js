let offset=600;
let duration=950;
var Navlinks=document.getElementById("navLinks");

function showMenu(){
    Navlinks.style.right="0";
    Navlinks.style.transition="right ease 2s";
    
}
function hideMenu(){
    Navlinks.style.right="-200px";
    Navlinks.style.transition="right ease 2s";
    
}



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



