
var Navlinks=document.getElementById("navLinks");
function showMenu(){
    Navlinks.style.right="50%";
    Navlinks.style.left="0";
    Navlinks.style.transition="all ease 2s";
}
function hideMenu(){
    Navlinks.style.right="unset";
    Navlinks.style.left="-100%";
    Navlinks.style.transition="all ease 2s";    
}


function goToTop(){
    var timer=setInterval(function(){
        document.documentElement.scrollTop-=30;
        if(document.documentElement.scrollTop<=0){
            clearInterval(timer);
        }
    },1);
}
function Time() {

    // Tạo lớp ngày
    var date = new Date();
  
    // Giờ hiện tại
    var hour = date.getHours();
    // Phút hiện tại
    var minute = date.getMinutes();
    // Giây hiện tại
    var second = date.getSeconds();
  
    // Tạo giá trị rỗng để thêm AM/PM
    var period = "";
  
    // Xác định AM/PM
    if (hour >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }
  
    // Biến đổi giờ
    if (hour == 0) {
        hour = 12;
    } else {
        if (hour > 12) {
            hour = hour - 12;
        }
    }
  
    // Cập nhật giờ, phút, giây
    // if they are less than 10
    hour = update(hour);
    minute = update(minute);
    second = update(second);
  
    // In ra đồng hồ dưới dạng giờ phút giây
    document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
  
    // Cập nhật giây
    setTimeout(Time, 1000);
  }
  
  // Hàm chức năng thiết kế giờ
  // Thêm 0 nếu giờ < 10
  function update(t) {
    if (t < 10) {
      return "0" + t;
    }
    else {
      return t;
    }
  }
  
  Time();
  //cố định header
  window.onscroll=function(){
    console.info(document.documentElement.scrollTop);
    var header=document.getElementById("myhead");
    if(document.documentElement.scrollTop > 100||document.body.scrollTop > 0){
        header.style.left=0;
        header.style.right=0;
        header.style.top=0;
        header.style.zIndex=99;
        header.style.position="fixed";
    }else{
        header.style.position="relative";
        
    }
  }
function KiemTra(){
    var u=document.frm1.Hoten.value;
    var p=document.frm1.email.value;
    var c=document.frm1.NoiDung.value;
    if(u==""){
        document.getElementById("baoloi").innerHTML="Chưa nhập họ tên";
        return false;
    }
    
    if(p==""){
        document.getElementById("baoloi").innerHTML="Chưa nhập email";
        return false;
    }
    if(c==""){
        document.getElementById("baoloi").innerHTML="Chưa nhập nội dung";
        return false;
    }
    else{
        alert("đã gửi tới server thành công");
    }
    return true;
    }
function LienHe(){
    
    var a=document.frm2.HoTen.value;
    var b=document.frm2.Email.value;
    var c=document.frm2.ChuDe.value;
    var d=document.frm2.NoiDungText.value;
    if(a==""){
        document.getElementById("baoloi").innerHTML="Chưa nhập họ tên";
        return false;
    }else{
    if(a.length<10){
        document.getElementById("baoloi").innerHTML="Họ tên quá ngắn";
        return false;
    }
    if(a.length>30){
        document.getElementById("baoloi").innerHTML="Họ tên quá dài";
        return false;
    }
}

    if(b==""){
        document.getElementById("baoloi").innerHTML="Chưa nhập địa chỉ email";
        return false;
    }
    if(c==""){
        document.getElementById("baoloi").innerHTML="Chưa nhập chủ đề";
        return false;
    }
    if(d=="") {document.getElementById("baoloi").innerHTML="Chưa nhập nội dung";
    return false;
}else if(d.length<50){
    document.getElementById("baoloi").innerHTML="Nội dung quá dài";
    return false;
}

else{
    alert("đã gửi tới server");
    return true;
    }
}


var btn1=document.getElementById("btn1");
var images=["../IMG/dht.png","../IMG/thv.jpg",'../IMG/ntpt.jpg','../IMG/vtka.jpg'];
var gv=['Dương Hữu Thành','Trương Hoàng Vinh','Nguyễn Thị Phương Trang','Võ Thị Kim Anh'];
var hocvi=['giảng viên','Phó trưởng Khoa','Nghiên cứu sinh','Thạc sĩ'];
var i=0;
function prev(){
    i--;
    if(i<0) i=images.length-1;
    document.getElementById("hinh").src=images[i];
    document.getElementById("giangvien").innerText=gv[i];
    document.getElementById("hocvi").innerText=hocvi[i];
}
function next(){
   i++;
   if(i>=images.length) i=0;   
   document.getElementById("hinh").src=images[i];
   document.getElementById("giangvien").innerText=gv[i];
   document.getElementById("hocvi").innerText=hocvi[i];
   
}
 setInterval("next()",3000);
 var imgs=['../IMG/lienket/DXC.png','../IMG/lienket/Gameloft.png','../IMG/lienket/korea.png','../IMG/lienket/larion.png','IMG/lienket/MS.png','../IMG/lienket/TMA.png'];
var i=0;
function tiep(){
    i++;
    if(i>=imgs.length) i=0;
    document.getElementById("hinhbox").src=imgs[i];

}
setInterval("tiep()",5000);





