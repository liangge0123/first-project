<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const emit=defineEmits(['enter'])
const cream=ref(false), ready=ref(false), wave=ref(null), root=ref(null), progress=ref(0)
const binaries=ref('01000011 01001111 01001101 01010000 01000101 01010100 01000101')
const features=[['01','ENTER','在线报名','从一个想法，迈出第一步。'],['02','SCAN','智能核验','材料识别，信息一致性校验。'],['03','CREATE','成果提交','让你的作品，拥有自己的舞台。'],['04','REVIEW','多维评价','AI 初评与教师复核，共同参与。']]
const contests=[{id:1,title:'数学建模',en:'MODEL THE WORLD',type:'数学 / 数据科学',art:'model',tag:'01'},{id:2,title:'程序设计',en:'CODE SOMETHING NEW',type:'计算机 / 算法',art:'code',tag:'02'},{id:3,title:'创新创业',en:'MAKE IDEAS HAPPEN',type:'创新 / 商业计划',art:'idea',tag:'03'},{id:4,title:'数字艺术',en:'BREAK THE PATTERN',type:'设计 / 数字媒体',art:'design',tag:'04'},{id:5,title:'工程实践',en:'BUILD THE NEXT',type:'工程 / 智能制造',art:'build',tag:'05'},{id:6,title:'学术研究',en:'QUESTION EVERYTHING',type:'学术 / 跨学科',art:'research',tag:'06'}]
let frame,ctx,resizeObserver,timer, introTimer,scrollHandler
const pointer={x:-1000,y:-1000,tx:-1000,ty:-1000}, reduced=matchMedia('(prefers-reduced-motion: reduce)').matches
function roll(e){if(reduced)return; const el=e.currentTarget; if(el.classList.contains('rolling'))return;el.classList.add('rolling');setTimeout(()=>el.classList.remove('rolling'),800)}
function enter(section='overview'){emit('enter',section)}
onMounted(()=>{
  const canvas=wave.value,context=canvas.getContext('2d');let w=0,h=0,time=0,inView=true
  const resize=()=>{const rect=canvas.getBoundingClientRect();w=rect.width;h=rect.height;const dpr=Math.min(devicePixelRatio,2);canvas.width=w*dpr;canvas.height=h*dpr;context.setTransform(dpr,0,0,dpr,0,0)}
  resizeObserver=new ResizeObserver(resize);resizeObserver.observe(canvas);resize()
  canvas.onpointermove=e=>{const r=canvas.getBoundingClientRect();pointer.tx=e.clientX-r.left;pointer.ty=e.clientY-r.top};canvas.onpointerleave=()=>{pointer.tx=-1000;pointer.ty=-1000}
  function draw(){if(document.visibilityState==='visible'&&inView){time+=.008;pointer.x+=(pointer.tx-pointer.x)*.08;pointer.y+=(pointer.ty-pointer.y)*.08;context.clearRect(0,0,w,h);context.strokeStyle='#160000';context.lineWidth=.7;const gap=w<600?16:18;for(let x=-gap*2;x<w+gap*2;x+=gap){context.beginPath();for(let y=-20;y<h+24;y+=8){const dx=x-pointer.x,dy=y-pointer.y,dist=Math.hypot(dx,dy),influence=Math.exp(-dist*dist/18000);const sway=reduced?0:Math.sin(y*.009+time+x*.004)*15+Math.sin(y*.004-time)*12;const xx=x+sway+dx*influence*.65;const yy=y+dy*influence*.32;y===-20?context.moveTo(xx,yy):context.lineTo(xx,yy)}context.stroke()}if(pointer.x>0){context.beginPath();context.arc(pointer.x,pointer.y,4,0,Math.PI*2);context.fillStyle='#160000';context.fill()}}frame=requestAnimationFrame(draw)}draw()
  scrollHandler=()=>{progress.value=window.scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight);inView=window.scrollY<innerHeight};addEventListener('scroll',scrollHandler,{passive:true})
  timer=setInterval(()=>{if(!reduced)binaries.value=binaries.value.split('').map(c=>c===' '?' ':Math.random()>.5?'1':'0').join('')},800)
  introTimer=setTimeout(()=>{ready.value=true;ctx=gsap.context(()=>{if(reduced)return;gsap.from('.landing-nav',{y:-40,opacity:0,duration:.8});gsap.from('.hero-word span',{yPercent:110,duration:1,stagger:.035,ease:'power4.out'});gsap.from('.wave-canvas',{scaleY:0,transformOrigin:'top',duration:1.4,ease:'power3.inOut'});gsap.utils.toArray('.reveal').forEach(el=>gsap.from(el,{y:70,opacity:0,duration:.9,scrollTrigger:{trigger:el,start:'top 90%'},ease:'power3.out'}));gsap.to('.story-decoration',{rotation:100,y:120,scrollTrigger:{trigger:'.story',start:'top bottom',end:'bottom top',scrub:1}});gsap.from('.gallery-title span',{yPercent:100,stagger:.1,scrollTrigger:{trigger:'.gallery-title',start:'top 90%'},duration:1,ease:'power4.out'});gsap.to('.manifesto-track',{xPercent:-28,ease:'none',scrollTrigger:{trigger:'.manifesto',start:'top bottom',end:'bottom top',scrub:1}})},root.value)},650)
})
onUnmounted(()=>{cancelAnimationFrame(frame);resizeObserver?.disconnect();clearInterval(timer);clearTimeout(introTimer);removeEventListener('scroll',scrollHandler);ctx?.revert()})
</script>
<template>
<div ref="root" class="landing" :class="{'theme-cream':cream,'is-ready':ready}">
  <a class="skip-link" href="#about">跳至正文</a>
  <Transition name="loader"><div v-if="!ready" class="landing-loader"><div class="monogram">C<span>P</span></div><p>COMPETE / INITIALIZING</p></div></Transition>
  <div class="landing-scroll" :style="{transform:`scaleY(${progress})`}"></div>
  <header class="landing-nav">
    <a class="landing-logo" href="#" aria-label="竞序首页"><div class="monogram">C<span>P</span></div></a>
    <div class="terminal"><span>COMPETE INTELLIGENCE SYSTEM</span><span>WENZHOU BUSINESS COLLEGE</span><span>DESIGNED FOR YOUR NEXT IDEA <i>_</i></span></div>
    <nav class="landing-menu"><a href="#about">关于 / ABOUT</a><a href="#competitions">竞赛 / EXPLORE</a><a href="#start">开始 / START</a></nav>
    <button class="theme-toggle" @click="cream=!cream" :aria-pressed="cream" aria-label="切换对比主题">◐</button>
    <div class="availability"><span>好想法，值得被看见。</span><button @click="enter()">进入竞赛工作台 ↗</button></div>
    <button class="matrix-mark" @click="enter()" aria-label="进入工作台"><i v-for="n in 49" :key="n" :class="{filled:((n*13+n%5)%7)<4}"></i></button>
  </header>
  <section class="landing-hero" aria-label="竞序高校竞赛智能平台">
    <div class="wave-field"><canvas ref="wave" class="wave-canvas" aria-hidden="true"></canvas><div class="wave-note"><span>MOVE TO MAKE WAVES</span><span>每一个想法，都能激起涟漪。</span></div></div>
    <div class="hero-title-block"><div class="binary-strip"><b>▸</b><span v-for="n in 3" :key="n">{{binaries}} <i>///////////////////</i></span><b>◂</b></div>
    <h1 class="landing-title"><span class="hero-word" aria-label="Campus"><span v-for="(c,i) in 'CAMPUS'" :key="i" @pointerenter="roll" :data-letter="c">{{c}}</span></span><span class="hero-star" aria-hidden="true">✳</span><span class="hero-word" aria-label="Compete"><span v-for="(c,i) in 'COMPETE'" :key="i" @pointerenter="roll" :data-letter="c">{{c}}</span></span></h1>
    <div class="binary-strip"><b>▸</b><span>竞序 / 高校学科竞赛智能平台</span><i>////////////////////////////////////////////////////////////////</i><span>REGISTRATION · VERIFICATION · EVALUATION</span><b>◂</b></div></div>
  </section>
  <section id="about" class="story"><div class="story-decoration" aria-hidden="true">✳</div><div class="story-index">01 — THE IDEA<br/>从报名，到被看见。</div><article class="story-card reveal"><h2>ABOUT / 关于竞序</h2><div class="story-copy"><p>让想法<span class="serif-en">发生，</span><br/>让创造<span class="serif-en">被看见。</span></p><p class="story-body">一份材料，一次报名，一个改变的可能。竞序为高校学科竞赛而生，将报名检验、作品提交与成果评价连接在一起。</p><p class="story-body">用 OCR 发现细节，用多维评价理解作品，再把最终判断交还给人。让学生专注创造，让教师专注价值。</p><button class="inline-link" @click="enter('verify')">体验智能核验 ↗</button></div><div class="feature-tiles"><button v-for="f in features" :key="f[0]" @click="enter(f[0]==='01'?'register':f[0]==='02'?'verify':'evaluate')"><span class="tile-index">/ {{f[0]}}</span><strong>{{f[1]}}</strong><span class="tile-cn">{{f[2]}} ↗</span><small>{{f[3]}}</small><i aria-hidden="true">✳</i></button></div></article><span class="story-side">HUMAN CREATIVITY × MACHINE INTELLIGENCE</span></section>
  <section id="competitions" class="landing-gallery"><div class="binary-strip"><b>▸</b><span>02 / FIND YOUR NEXT CHALLENGE</span><i>////////////////////////////////////////////////////////////////////////////////</i><span>六个方向，无限可能</span><b>◂</b></div><h2 class="gallery-title"><span v-for="(c,i) in 'EXPLORE'" :key="i">{{c}}</span></h2><div class="gallery-caption"><p>找到你的下一场挑战。</p><span>示例竞赛 / DEMO COLLECTION — 2026</span></div><div class="contest-grid"><button v-for="c in contests" :key="c.id" class="contest-poster reveal" @click="enter('competitions')"><div class="poster-art" :class="c.art"><span class="poster-kicker">COMPETE / {{c.tag}}</span><template v-if="c.art==='model'"><div class="torus"><i v-for="n in 22" :key="n" :style="{'--n':n}"></i></div><strong>SHAPE<br/>THE UNKNOWN.</strong></template><template v-else-if="c.art==='code'"><div class="code-graphic">&lt;/&gt;</div><strong>HELLO,<br/>POSSIBILITY_</strong></template><template v-else-if="c.art==='idea'"><div class="sun-graphic">✳</div><strong>WHAT<br/>IF?</strong></template><template v-else-if="c.art==='design'"><div class="design-graphic"><i></i><i></i><i></i><i></i></div><strong>OUT OF<br/>THE BOX.</strong></template><template v-else-if="c.art==='build'"><div class="build-graphic"><i v-for="n in 7" :key="n" :style="{'--n':n}"></i></div><strong>MAKE IT<br/>REAL.</strong></template><template v-else"><div class="research-graphic"><i v-for="n in 6" :key="n" :style="{'--n':n}"></i></div><strong>STAY<br/>CURIOUS.</strong></template><span class="poster-subtitle">{{c.en}}</span><span class="poster-hover">探索竞赛 ↗</span></div><div class="poster-caption"><h3>{{c.title}}</h3><span>{{c.type}} #000{{c.id}}/06 ↗</span></div></button></div></section>
  <section class="manifesto"><div class="manifesto-track">LESS PAPERWORK. <span>MORE POSSIBILITIES.</span> LESS PAPERWORK.</div><div class="workflow-label"><span>FROM YOUR FIRST IDEA</span><span>TO YOUR NEXT ACHIEVEMENT ↗</span></div></section>
  <section id="start" class="landing-start"><div class="start-grid" aria-hidden="true"></div><p>THE NEXT CHAPTER / 下一场，从这里开始</p><button class="go-circle" @click="enter('register')"><span class="go-rest">GO</span><span class="go-hover">LET’S<br/>CREATE<span>进入报名工作台 ↗</span></span></button><div class="start-bottom"><span>报名 · 检验 · 评价 · 成长</span><button @click="enter()">管理端演示 ↗</button></div></section>
  <footer class="landing-footer"><div class="monogram">C<span>P</span></div><span>竞序 COMPETE · 吴直良毕业设计</span><span>FRONTEND DEMO / 2026</span><a href="#">返回顶部 ↑</a></footer>
</div>
</template>
