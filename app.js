/* Independently authored local navigation. The institutional shell is reused from our preserved specimen. */
import {reports,branches} from './reports.js';
import {loadReport,unloadReport} from './live-embed.js';
document.documentElement.classList.replace('no-js','js');
const content=document.querySelector('#content'),heading=document.querySelector('#page-title'),crumbs=document.querySelector('#breadcrumbs');
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const link=(id,label)=>`<a href="#${id}">${esc(label)}</a>`;
function tiles(items,kind=''){return `<div class="tile-grid ${kind}">${items.map(r=>`<a class="report-tile" href="#${r.id}" data-report="${r.id}"><h2 class="tile-title">${esc(r.title)}</h2><span class="photo-placeholder" aria-hidden="true">Photo placeholder<small>Original image not reproduced</small></span></a>`).join('')}</div>`;}
function embed(r){return `<section class="live-alumni" aria-label="Original live ${esc(r.title)} Tableau report"><p class="report-context">${esc(r.description)}</p><div class="live-actions"><a class="button" href="${r.url}" target="_blank" rel="noopener noreferrer">Open original ${r.id==='global-footprint'?'Global Footprint overview':'report'} ↗ (new tab)</a><button id="reload-report" type="button">Reload report</button></div><p id="embed-status" role="status">Loading the original live report…</p><p class="scope-note">${esc(r.note)}</p><p class="live-help">The original report supplies the charts, filters and reporting periods. On touch screens, swipe the margin beside the report to scroll the webpage. Some published phone layouts omit desktop detail.</p><div id="viz-host"></div><a class="source-link" href="https://international.uky.edu/global-footprint${r.branch?'/'+r.branch:''}" target="_blank" rel="noopener noreferrer">Official ${r.branch?branches.find(b=>b.id===r.branch).title:'Global Footprint'} webpage ↗ (new tab)</a></section>`;}
let initialRender=true;
function render(){
 unloadReport();
 let id=location.hash.slice(1)||'global-footprint';let branch=branches.find(b=>b.id===id),report=reports.find(r=>r.id===id);
 if(!branch&&!report){id='global-footprint';report=reports[0];history.replaceState(null,'','#global-footprint');}
 const title=branch?.title||report.title;heading.textContent=report?.branch?branches.find(b=>b.id===report.branch).title:title;
 document.title=`${title} | Global Footprint — independent demonstration`;
 const trail=[['global-footprint','Global Footprint']];if(branch)trail.push([branch.id,branch.title]);if(report?.branch)trail.push([report.branch,branches.find(b=>b.id===report.branch).title],[report.id,report.title]);
 crumbs.innerHTML='<li><a href="https://international.uky.edu/" target="_blank" rel="noopener noreferrer">Home ↗</a></li>'+trail.map(([x,t],i)=>`<li>${i===trail.length-1?`<span aria-current="page">${esc(t)}</span>`:link(x,t)}</li>`).join('');
 if(branch){content.innerHTML=`<p class="intro">${esc(branch.description)}</p><a class="return-link" href="#global-footprint">← Global Footprint</a><h2 class="sr-only">${esc(branch.title)} reporting subjects</h2>${tiles(reports.filter(r=>r.branch===branch.id),branch.id.replace('global-',''))}`;}
 else if(id==='global-footprint'){
 content.innerHTML=`<p class="intro">Explore the University of Kentucky’s international activity and connections. Global Footprint brings together reporting to support international initiatives and strategic decisions.</p><nav class="branch-links" aria-label="Global Footprint reporting branches">${branches.map(b=>link(b.id,b.title)).join('')}</nav><h2 class="overview-heading">Global Footprint overview</h2>${embed(report)}<h2 class="section-heading">Dashboards</h2><div class="branch-grid">${branches.map(b=>`<article class="branch-card"><h3>${esc(b.title)}</h3><p>${esc(b.description)}</p><a class="button" href="#${b.id}">EXPLORE ${esc(b.title)}</a></article>`).join('')}</div><h2 class="section-heading">News</h2><div class="report-links"><a href="https://international.uky.edu/news" target="_blank" rel="noopener noreferrer">News from the International Center ↗ (new tab)</a></div>`;
 }
 else{content.innerHTML=`<div class="report-view"><a class="return-link" href="#${report.branch}">← ${esc(branches.find(b=>b.id===report.branch).title)} reporting tiles</a><h2 id="report-title">${esc(report.title)}</h2>${embed(report)}<a class="return-link" href="#${report.branch}">← Return to ${esc(branches.find(b=>b.id===report.branch).title)} reporting tiles</a></div>`;}
 if(report){const start=()=>loadReport(report);document.querySelector('#reload-report').addEventListener('click',start);start();}
 document.querySelectorAll('.primary-nav details[open]').forEach(d=>d.open=false);
 document.querySelector('#main-navigation').classList.remove('is-open');document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');
 if(!initialRender)heading.focus({preventScroll:true});initialRender=false;window.scrollTo(0,0);
}
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a||e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;const id=a.getAttribute('href').slice(1);if(!reports.some(r=>r.id===id)&&!branches.some(b=>b.id===id))return;e.preventDefault();if(location.hash!=='#'+id)history.pushState(null,'','#'+id);render();});
window.addEventListener('popstate',render);window.addEventListener('hashchange',render);
document.querySelector('.menu-toggle').addEventListener('click',e=>{const open=e.currentTarget.getAttribute('aria-expanded')!=='true';e.currentTarget.setAttribute('aria-expanded',String(open));document.querySelector('#main-navigation').classList.toggle('is-open',open);});
render();

