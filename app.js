const $ = s => document.querySelector(s);
const modal = $("#modal");
const title = $("#modalTitle");
const text = $("#modalText");

function showModal(t, m, icon="✦"){
  title.textContent=t; text.textContent=m; $("#modalIcon").textContent=icon; modal.classList.add("show");
}
$("#closeModal").onclick=()=>modal.classList.remove("show");
$("#modalOk").onclick=()=>modal.classList.remove("show");
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("show")});

function tick(){
  const d=new Date();
  $("#liveClock").textContent=d.toLocaleTimeString([], {hour:"2-digit",minute:"2-digit",second:"2-digit"});
}
tick(); setInterval(tick,1000);

document.querySelectorAll("[data-tilt]").forEach(el=>{
  el.addEventListener("pointermove",e=>{
    if(innerWidth<700)return;
    const r=el.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    el.style.transform=`perspective(800px) rotateX(${(-y*5).toFixed(2)}deg) rotateY(${(x*6).toFixed(2)}deg) translateZ(3px)`;
  });
  el.addEventListener("pointerleave",()=>el.style.transform="");
});

const messages={
 scanner:["Scan Code","Owner scanner is ready. Connect your preferred QR scanner here.","⌁"],
 dashboard:["Dashboard","Your private dashboard is ready for owner data.","◉"],
 reports:["Reports","Reports module is ready for daily, monthly and export functions.","▥"],
 settings:["Settings","Owner preferences are ready.","⚙"]
};
document.querySelectorAll("[data-action]").forEach(btn=>{
  btn.onclick=()=>{const [t,m,i]=messages[btn.dataset.action];showModal(t,m,i)}
});

$("#themeBtn").onclick=()=>{
  document.body.classList.toggle("focus-mode");
  $("#themeBtn").textContent=document.body.classList.contains("focus-mode")?"☀":"☾";
};
let sound=false;
$("#soundBtn").onclick=()=>{
  sound=!sound; $("#soundBtn").textContent=sound?"♫":"◉";
  showModal("Sound",sound?"Sound mode enabled.":"Sound mode disabled.",sound?"♫":"◉");
};

let playing=false, progress=30, elapsed=105, timer;
function renderMusic(){
  $("#progressBar").style.width=progress+"%";
  const sec=Math.floor(elapsed); $("#elapsed").textContent=`${Math.floor(sec/60)}:${String(sec%60).padStart(2,"0")}`;
  $("#playBtn").textContent=playing?"Ⅱ":"▶"; $("#mainPlay").textContent=playing?"Ⅱ":"▶";
}
function togglePlay(){
  playing=!playing;
  clearInterval(timer);
  if(playing) timer=setInterval(()=>{elapsed++;progress=Math.min(100,elapsed/210*100);if(elapsed>=210){elapsed=0;progress=0}renderMusic()},1000);
  renderMusic();
}
$("#playBtn").onclick=togglePlay; $("#mainPlay").onclick=togglePlay; renderMusic();

const saved=Number(localStorage.getItem("ownerRecords")||0);
$("#records").textContent=`${saved} record${saved===1?"":"s"}`;
window.addEventListener("online",()=>$("#network").textContent="Online");
window.addEventListener("offline",()=>$("#network").textContent="Offline");
