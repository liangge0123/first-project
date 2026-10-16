import { reactive, watch } from 'vue'
const key='compete.demo.v1'
export const seed={
 competitions:[
 {id:'c1',name:'全国大学生数学建模竞赛',category:'数学 / 数据科学',deadline:'2026-11-15',phase:'报名中',description:'围绕实际问题建立数学模型，提交完整论文、模型和相关程序。',requirements:'学生证、报名证明；每队 1–3 人。'},
 {id:'c2',name:'大学生程序设计竞赛',category:'计算机 / 算法',deadline:'2026-11-30',phase:'报名中',description:'用代码解决真实问题，展示算法设计与软件工程能力。',requirements:'学生证、作品说明。'},
 {id:'c3',name:'大学生创新创业项目挑战赛',category:'创新 / 商业计划',deadline:'2026-12-10',phase:'报名中',description:'从创意到原型，以可验证的商业计划展示项目的应用价值。',requirements:'项目计划书、团队信息。'},
 {id:'c4',name:'高校数字艺术作品展',category:'设计 / 数字媒体',deadline:'2026-10-30',phase:'评审中',description:'探索数字媒介的表达边界，提交视觉设计与创作说明。',requirements:'作品原图、设计说明。'},
 {id:'c5',name:'智能工程实践创新赛',category:'工程 / 智能制造',deadline:'2026-12-01',phase:'报名中',description:'以工程原型探索技术的实际应用。',requirements:'学生证、技术方案。'},
 {id:'c6',name:'青年学术研究成果交流赛',category:'学术 / 跨学科',deadline:'2026-12-20',phase:'即将开始',description:'以严谨方法和可靠结果呈现研究成果。',requirements:'研究论文、诚信声明。'}],
 registrations:[
 {id:'r1',name:'王思远',studentId:'2025110821',contestId:'c1',team:'数海探索',status:'待复核',files:[{name:'学生证示例.png',size:240000}],submittedAt:'2026-10-15T08:40:00+08:00',ocr:{name:'王思远',studentId:'2025110821',certificate:'在读证明',award:'无',issuer:'示例大学'},checks:null,history:[]},
 {id:'r2',name:'陈雨欣',studentId:'2024101706',contestId:'c3',team:'青禾计划',status:'已通过',files:[{name:'学生证示例.png',size:310000}],submittedAt:'2026-10-15T08:20:00+08:00',history:[]},
 {id:'r3',name:'赵子涵',studentId:'2025090314',contestId:'c2',team:'字节之间',status:'疑似异常',files:[{name:'证明示例.png',size:220000}],submittedAt:'2026-10-14T15:20:00+08:00',ocr:{name:'赵子涵',studentId:'2025090311',certificate:'参赛资格证明',award:'校级',issuer:'示例大学'},checks:null,history:[]}],
 works:[{id:'w1',title:'面向校园的低碳出行推荐系统',registrationId:'r2',contestId:'c3',name:'陈雨欣',studentId:'2024101706',summary:'设计校园出行推荐方案，结合路线距离与碳排放估计，为学生提供低碳出行建议。',files:[{name:'项目说明示例.pdf',size:410000}],status:'待评价',aiScores:null,finalScores:null,comments:'',published:false,history:[]}],
 weights:[30,25,25,20]
}
let initial
try{const s=JSON.parse(localStorage.getItem(key));if(s&&Array.isArray(s.competitions)&&Array.isArray(s.registrations)&&Array.isArray(s.works)&&Array.isArray(s.weights)&&s.weights.length===4)initial=s}catch{}
export const state=reactive(initial||structuredClone(seed))
export const persistence=reactive({error:''})
watch(state,()=>{try{localStorage.setItem(key,JSON.stringify(state));persistence.error=''}catch{persistence.error='浏览器存储不可用，本次修改未保存。请导出数据备份。'}},{deep:true})
export const dimensions=['创新性','技术实现','完成度','应用价值']
export const currentStudent={name:'吴直良',studentId:'25230810633'}
export function score(values,weights=state.weights){if(!values)return null;return values.reduce((s,n,i)=>s+n*weights[i]/100,0)}
export function downloadCsv(filename,headers,rows){const escape=v=>'"'+String(v??'').replace(/^[=+@-]/,"'").replaceAll('"','""')+'"';const text='\uFEFF'+[headers,...rows].map(r=>r.map(escape).join(',')).join('\r\n');const url=URL.createObjectURL(new Blob([text],{type:'text/csv;charset=utf-8;'}));const a=document.createElement('a');a.href=url;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
export function allowedRegistration(c){return c.phase==='报名中'&&c.deadline>=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Taipei',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date())}
