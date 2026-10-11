/* Adapted from the verified Alumni integration. The public Tableau server owns all workbook content. */
let viz=null,sequence=0,library=null,timer=null,slowTimer=null,current=null,device=null;
window.embedEvidence={state:'idle',report:null,events:[]};
const record=(type,details={})=>window.embedEvidence.events.push({type,at:new Date().toISOString(),...details});
const phone=()=>matchMedia('(max-width:1000px)').matches;
export function unloadReport(){sequence++;clearTimeout(timer);clearTimeout(slowTimer);document.querySelector('#viz-host')?.replaceChildren();viz=null;current=null;window.embedEvidence.state='idle';}
export async function loadReport(report){
 unloadReport();current=report;const request=sequence,host=document.querySelector('#viz-host'),status=document.querySelector('#embed-status');
 window.embedEvidence={state:'loading',report:report.id,events:[]};record('load-start',{source:report.embedUrl});
 const fallback=message=>{if(request!==sequence)return;window.embedEvidence.state='error';status.textContent=message;clearTimeout(timer);clearTimeout(slowTimer);};
 status.textContent=`Loading the original live ${report.title} report…`;
 if(report.mode==='external'){fallback('This report is available through the official link above. Live embedding is not enabled in this demonstration.');return;}
 slowTimer=setTimeout(()=>{if(request===sequence&&window.embedEvidence.state==='loading')status.textContent='The original report is taking longer to load. You can wait, reload, or open the official report above.';},30000);
 timer=setTimeout(()=>fallback('The live report has not become ready. Use the official report link above, or Reload to try again.'),60000);
 try{
 library||=import('https://tableauprd.uky.edu/javascripts/api/tableau.embedding.3.latest.min.js');
 const {TableauViz,TableauEventType}=await library;if(request!==sequence)return;
 viz=new TableauViz();viz.id=report.id==='international-alumni'?'alumni-viz':'report-viz';viz.src=report.embedUrl;viz.width='100%';device=phone()?'phone':'default';viz.device=device;viz.height=phone()?'1700px':'1400px';viz.toolbar='bottom';
 viz.addEventListener(TableauEventType.FirstInteractive,()=>{if(request!==sequence)return;clearTimeout(timer);clearTimeout(slowTimer);window.embedEvidence.state='interactive';status.textContent=`Live ${report.title} report loaded from UK’s Tableau server.`;record('firstinteractive');});
 viz.addEventListener(TableauEventType.FilterChanged,e=>{if(request===sequence)record('filterchanged',{fieldName:e.detail?.fieldName||null});});
 viz.addEventListener(TableauEventType.ParameterChanged,e=>{if(request===sequence)record('parameterchanged',{parameterName:e.detail?.parameterName||null});});
 viz.addEventListener(TableauEventType.MarkSelectionChanged,()=>{if(request===sequence)record('markselectionchanged');});
 viz.addEventListener(TableauEventType.TabSwitched,e=>{if(request!==sequence)return;record('tabswitched',{sheet:e.detail?.newSheetName||null});if(e.detail?.newSheetName)status.textContent=`The original Tableau view changed to ${e.detail.newSheetName}. Use Reload report to return to ${report.title}, or the webpage’s reporting links to navigate.`;});
 if(TableauEventType.VizLoadError)viz.addEventListener(TableauEventType.VizLoadError,()=>{record('viz-load-error');fallback('The original Tableau report could not load. Use the official report link above, or Reload to try again.');});
 host.append(viz);
 }catch(error){if(request!==sequence)return;library=null;record('module-error',{message:error.message});fallback('The live report could not load. Open the original report above, or try Reload.');console.error('Tableau embedding:',error);}
}
window.addEventListener('resize',()=>{if(!viz||!current)return;const next=phone()?'phone':'default';if(next!==device){loadReport(current);return;}viz.height=phone()?'1700px':'1400px';viz.resize();});
