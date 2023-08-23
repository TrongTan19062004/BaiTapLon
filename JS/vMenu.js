function New(){
    fetch("new.json").then(res => res.json()).then(data =>{
        let k="";
        for(let t of data)
        k+=`<div class="new-content">
        <img src="${t.image}" alt="Sinh viên">
        <h4>${t.name}</h4>
        <p>${t.text}</p>
    </div>`;
        let f=document.getElementById("new-row");
        f.innerHTML+=k;
    });
 }
function LoadMenu(){
    fetch("index.json").then(res => res.json()).then(data =>{
        let h="";
        for(let c of data)
        h+=`<li><a href="${c.link}">${c.title}</a></li>`;
        let d=document.getElementById("menu");
        d.innerHTML+=h;
    });
}
function LoadCol(){
    fetch("major.json").then(res => res.json()).then(data =>{
        let r="";
        for(let y of data)
        r+=`<div class="major-col">
        <h3>${y.ten}</h3>
        <p>${y.noidung}</p>
    </div>`;
        let g=document.getElementById("major-row");
        g.innerHTML+=r;
    });
}
function Loadfoot(){
    fetch("footcol.json").then(res =>res.json()).then(data =>{
    let w="";
    for(let y of data)
    w+=`<div class="foot-col">
    <h4>${y.lop}</h4>
    <ul>
        <li><a href="#">${y.title1}</a></li>
        <li><a href="#">${y.title2}</a></li>
        <li><a href="#">${y.title3}</a></li>
    </ul>
</div>`;
    let r=document.getElementById("foot-row");
    r.innerHTML+=w;
});
}
function LoadVMenu(){
    fetch("globalrow.json").then(res => res.json()).then(data =>{
    let dh="";
    for(let q of data)
    dh+=`<div class="global-row">
    <div class="global-col">
        <img src="${q.image}">
        <div class="layer">
           <h3>${q.name}</h3> 
        </div>
    </div>`;
    let o=document.getElementById("global");
    o.innerHTML+=dh;
    });
}
window.onload=function(){
    LoadMenu();
    New();
    LoadCol();
    Loadfoot();
    LoadVMenu();
}