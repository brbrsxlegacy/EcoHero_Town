const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const html=fs.readFileSync(__dirname+'/index.html','utf8'),script=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const noop=()=>{},context=new Proxy({}, {get:(t,k)=>t[k]??noop,set:(t,k,v)=>(t[k]=v,true)}),elements={};
function element(id){return elements[id]??={textContent:'',innerHTML:'',className:'',style:{},classList:{add:noop,remove:noop},addEventListener:noop,getContext:()=>context}}
const sandbox={console,Math,Date,JSON,setTimeout:()=>1,clearTimeout:noop,setInterval:()=>1,clearInterval:noop,devicePixelRatio:1,innerWidth:1280,innerHeight:800,localStorage:{getItem:()=>null,setItem:noop},document:{createElement:()=>({...element("texture"),width:512,height:128}),getElementById:element,querySelectorAll:()=>[],addEventListener:noop},window:{addEventListener:noop},requestAnimationFrame:noop};vm.createContext(sandbox);vm.runInContext(fs.readFileSync(__dirname+'/vendor/three.min.js','utf8'),sandbox);
sandbox.THREE.WebGLRenderer=class {constructor(){this.shadowMap={}}setPixelRatio(){}setSize(){}render(){}};
element('game').addEventListener=noop;
vm.runInContext(script,sandbox);
vm.runInContext(`
state=fresh();hideModal();
const rubbish=objects.find(o=>o.kind==='trash');player.x=rubbish.x;player.y=rubbish.y;interact();
if(state.ep!==5||state.bag.length!==1||!state.done[rubbish.id])throw Error('Çöp toplama');
const bin=objects.find(o=>o.kind==='bin');startMini('bag',bin);const correct=state.bag[0];sortWaste((correct+1)%4);if(state.ep!==5)throw Error('Yanlış kutu ödül verdi');sortWaste(correct);if(state.ep!==15||state.bag.length)throw Error('Geri dönüşüm');
const plant=objects.find(o=>o.kind==='tree');startMini('plant',plant);plantStep();plantStep();plantStep();if(state.counts.tree!==1||!state.growth[plant.id]||!state.badges.includes('first'))throw Error('Ağaç dikme');
state.xp=99;if(unlocked(2))throw Error('Bölge erken açıldı');award(1);if(!unlocked(2))throw Error('Bölge açılmadı');
state.ep=150;buy('bike');if(state.ep!==30||!state.owned.includes('bike'))throw Error('Bisiklet satın alma');const xp=state.xp;buy('bike');if(state.ep!==30||state.xp!==xp)throw Error('Tekrar harcama');
state.quests[0]='active';objects.filter(o=>o.z===0&&o.kind==='trash').forEach(o=>state.done[o.id]=true);const npc=objects.find(o=>o.kind==='npc'&&o.z===0);hideModal();player.x=npc.x;player.y=npc.y;interact();if(state.quests[0]!=='complete')throw Error('NPC görev bitirme');
for(const mode of ['solar','pipe']){startMini(mode,objects.find(o=>o.kind==='mini'));mini.angles.fill(0);mini.angles[0]=3;if(mode==='solar')rotateSolar(0);else rotatePipe(0);if(view!=='play')throw Error('Mini oyun tamamlanmadı');}
if(allowed(buildings[0].x+20,buildings[0].y+20))throw Error('Bina çarpışması');
state.xp=0;if(allowed(1500,500))throw Error('Kilitli bölgeye girildi');
state.xp=1000;for(const o of objects)if(['trash','tree','energy','water'].includes(o.kind))state.done[o.id]=true;if(eco()!==100)throw Error('Kasaba yüzde 100 olmuyor');checkBadges();if(!state.badges.includes('planet'))throw Error('Gezegen rozeti');
state=fresh();view='play';resize();update(.016);draw(.016);menu();draw(.016);
console.log('PASS: collection, sorting, planting, growth, badges, zone unlocks, purchases, NPC quests, solar, pipes, collision, completion and render execution');
`,sandbox);
