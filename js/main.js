// Menú móvil
const burger=document.getElementById('burger'),links=document.getElementById('navLinks');
burger.addEventListener('click',()=>{
  const open=links.classList.toggle('open');
  burger.setAttribute('aria-expanded',open);
});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

// Aparición suave al hacer scroll
const io=new IntersectionObserver(es=>{
  es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target)}});
},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// ===== Respiración 4-7-8 (tarjeta con orbe) =====
(function(){
  const orb=document.getElementById('orb');
  if(!orb) return;
  const fase=document.getElementById('orbFase'),
        timer=document.getElementById('orbTimer'),
        btn=document.getElementById('btnRespira'),
        barras={inhala:document.getElementById('barIn'),sosten:document.getElementById('barHold'),exhala:document.getElementById('barOut')};
  const FASES=[
    {id:'inhala',nombre:'Inhala',seg:4},
    {id:'sosten',nombre:'Sostén',seg:7},
    {id:'exhala',nombre:'Exhala',seg:8}
  ];
  let activo=false,i=0,resta=0,tick=null;

  function pintar(){
    const f=FASES[i];
    fase.textContent=f.nombre;
    timer.textContent=resta+' s';
    orb.classList.remove('inhala','sosten','exhala');
    // Forzar reflow para reiniciar la animación del anillo en cada inhalación
    if(f.id==='inhala'){void orb.offsetWidth;}
    orb.classList.add(f.id);
    Object.keys(barras).forEach(k=>barras[k].classList.toggle('on',k===f.id));
  }
  function paso(){
    resta--;
    if(resta<=0){i=(i+1)%FASES.length;resta=FASES[i].seg;}
    pintar();
  }
  function iniciar(){
    activo=true;i=0;resta=FASES[0].seg;
    btn.textContent='Pausar';
    pintar();
    tick=setInterval(paso,1000);
  }
  function detener(){
    activo=false;clearInterval(tick);
    btn.textContent='Iniciar ciclo';
    orb.classList.remove('inhala','sosten','exhala');
    fase.textContent='Preparada/o';
    timer.innerHTML='&nbsp;';
    Object.values(barras).forEach(b=>b.classList.remove('on'));
  }
  btn.addEventListener('click',()=>activo?detener():iniciar());
})();
