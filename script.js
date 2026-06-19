// Simulated AI live updates


let crowd = 24580;


setInterval(()=>{


crowd += Math.floor(Math.random()*20)-5;


document.getElementById("crowd").innerHTML =
crowd.toLocaleString();



},2000);




// Risk prediction engine


let risks=[
"Low",
"Medium",
"High",
"Critical"
];


setInterval(()=>{


let value =
risks[Math.floor(Math.random()*risks.length)];


document.getElementById("risk").innerHTML=value;



if(value==="Critical"){


document.getElementById("alerts").innerHTML =
`
<li>🚨 CRITICAL CROWD PRESSURE DETECTED</li>
<li>🚨 Emergency route activation suggested</li>
<li>⚠ Deploy additional security units</li>
`;


}



},5000);




// AI congestion prediction


let areas=[

"Stage Area",
"Gate 2",
"Main Entrance",
"Food Zone"

];


setInterval(()=>{


let area =
areas[Math.floor(Math.random()*areas.length)];


document.getElementById("prediction").innerHTML =
"High movement near "+area;



},4000);