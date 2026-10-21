const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],h=$('#h'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
$('#bg').onclick=()=>{const o=h.classList.toggle('open');$('#bg').setAttribute('aria-expanded',o)};$$('nav a').forEach(a=>a.onclick=()=>h.classList.remove('open'));
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});$$('.rv,.bn').forEach(e=>io.observe(e));
const ds=$('#ds');for(let i=0;i<14;i++){const s=document.createElement('span');s.style.cssText=`left:${Math.random()*100}%;animation-duration:${9+Math.random()*9}s;animation-delay:-${Math.random()*12}s;width:${3+Math.random()*4}px;height:${3+Math.random()*4}px`;ds.appendChild(s)}
let mx=0,my=0,tx=0,ty=0;const hero=$('.hero'),him=$('.hero .vid'),vid=$('#vid'),gl=$('#gl'),cu=$('#cu');
addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;tx=e.clientX/innerWidth-.5;ty=e.clientY/innerHeight-.5;gl.style.transform=`translate(${e.clientX}px,${e.clientY-hero.getBoundingClientRect().top*0 }px)`;cu.style.opacity=1;cu.style.transform=`translate(${e.clientX}px,${e.clientY}px)`});
$$('a,button,.card').forEach(a=>{a.addEventListener('pointerenter',()=>cu.classList.add('h'));a.addEventListener('pointerleave',()=>cu.classList.remove('h'))});
$$('.mg').forEach(b=>{b.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.3}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')});
$$('.card').forEach(c=>{c.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(900px) translateY(-8px) rotateY(${x*8}deg) rotateX(${-y*8}deg)`});c.addEventListener('pointerleave',()=>c.style.transform='');c.addEventListener('click',e=>{if(e.target.closest('a'))return;$$('.card.on').forEach(o=>o!==c&&o.classList.remove('on'));c.classList.toggle('on')})});
const ed=$('#ed'),edim=$('#edim'),lns=$$('.ed .ln'),chips=$$('.chip'),ps=$$('[data-p]');let cx=0,cy=0;
function tick(){const y=scrollY,vh=innerHeight;h.classList.toggle('s',y>40);
if(!rm){cx+=(tx-cx)*.06;cy+=(ty-cy)*.06;const sy=Math.min(y,vh)*.18;him.style.transform=`translate(${cx*-24}px,${cy*-16-sy}px)`;
const r=ed.getBoundingClientRect(),p=Math.max(0,Math.min(1,-r.top/(r.height-vh)));edim.style.transform=`scale(${1.05+p*.25}) translateY(${p*-4}%)`;lns.forEach((l,i)=>l.classList.toggle('on',p>.12+i*.22));chips.forEach((c,i)=>c.classList.toggle('on',p>.25+i*.2));
ps.forEach(e=>{const b=e.parentElement.getBoundingClientRect();if(b.bottom>0&&b.top<vh)e.style.transform=`translateY(${(b.top+b.height/2-vh/2)*-e.dataset.p}px)`})}
requestAnimationFrame(tick)}tick();
if(rm)vid.pause();
const spawn=(x,y)=>{const r=hero.getBoundingClientRect(),X=x-r.left,Y=y-r.top,o=document.createElement('i');o.className='rp';o.style.cssText=`left:${X}px;top:${Y}px`;hero.appendChild(o);setTimeout(()=>o.remove(),950);
for(let i=0;i<9;i++){const s=document.createElement('i'),a=Math.PI*2*i/9+Math.random()*.5,d=50+Math.random()*70;s.className='sp';s.style.cssText=`left:${X}px;top:${Y}px;--x:${Math.cos(a)*d}px;--y:${Math.sin(a)*d+40}px`;hero.appendChild(s);setTimeout(()=>s.remove(),950)}
navigator.vibrate&&navigator.vibrate(12)};
hero.addEventListener('pointerdown',e=>{if(e.target.closest('a'))return;spawn(e.clientX,e.clientY);vid.playbackRate=.5;setTimeout(()=>vid.playbackRate=1,1400)});
const tm=e=>{const t=e.touches[0];tx=t.clientX/innerWidth-.5;ty=t.clientY/innerHeight-.5};hero.addEventListener('touchstart',tm,{passive:true});hero.addEventListener('touchmove',tm,{passive:true});hero.addEventListener('touchend',()=>{tx=0;ty=0},{passive:true});
addEventListener('deviceorientation',e=>{if(e.gamma==null||rm)return;tx=Math.max(-.5,Math.min(.5,e.gamma/60));ty=Math.max(-.5,Math.min(.5,(e.beta-50)/90))});
document.addEventListener('visibilitychange',()=>document.hidden?vid.pause():!rm&&vid.play());


const cnt=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;cnt.unobserve(x.target);const el=x.target,to=parseFloat(el.dataset.count),d=+el.dataset.dec||0;if(rm){return}let s=null;const st=n=>{s=s||n;const p=Math.min(1,(n-s)/1400),v=to*(1-Math.pow(1-p,3));el.textContent=v.toFixed(d).replace('.',',');if(p<1)requestAnimationFrame(st)};requestAnimationFrame(st)}),{threshold:.5});$$('[data-count]').forEach(e=>cnt.observe(e));
