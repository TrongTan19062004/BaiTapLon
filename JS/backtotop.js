/*$(document).ready(function(){
    $(window).scroll(function(){

        if($(window).scrollTop() > offset){
            $('#backtop').fadeIn(duration);
        }
        else{
            $('#backtop').fadeOut(duration);
        }
       
        });
        $('#backtop').click(function(){
            $('html,body').animate({scrollTop: 0}, duration); 
            return false;   
    });
});*/
$(window).scroll(function () {
    if($(this).scrollTop() > 200){
        $('#backtop').css("right","20px");

    }else{
        $('#backtop').css("right","-50px");
    }
})
$('#backtop').click(function(){
    $('html,body').animate({scrollTop:0},500);
})
//xuất hiện tiêu đề
$(window).scroll(function(){
    if($(this).scrollTop()>150){
        $('h1[title]').animate()
    }
})