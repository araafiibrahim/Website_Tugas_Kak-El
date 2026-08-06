
document.addEventListener("DOMContentLoaded",()=>{
 let c=document.getElementById("chart");
 if(c){new Chart(c,{type:'line',data:{labels:['Jan','Feb','Mar','Apr','Mei','Jun'],datasets:[{label:'Kasus',data:[5,9,8,15,20,14]}]}});}
 let c2=document.getElementById("chart2");
 if(c2){new Chart(c2,{type:'bar',data:{labels:['Bandung','Jakarta','Surabaya'],datasets:[{label:'Kasus',data:[20,30,12]}]}});}
});
function simulateAI(){
document.getElementById("aiResult").innerHTML=
`<div class='card'><h3>Hasil AI</h3>
<p>Similarity: <b>92%</b></p>
<p>Kemungkinan mirip dengan kasus <b>Emas Antam Palsu Cabang Bandung</b>.</p>
<ul><li>Periksa QR Code</li><li>Bandingkan nomor seri</li><li>Lakukan uji densitas</li></ul></div>`;
}
