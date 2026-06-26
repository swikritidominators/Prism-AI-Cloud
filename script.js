// Simulated AI live updates total crowd
let crowd = 24580;
setInterval(() => {
    crowd += Math.floor(Math.random() * 20) - 5;
    document.getElementById("crowd").innerHTML = crowd.toLocaleString();
}, 2000);

// Missing Person Finder: Live elapsed time tracker for ID 02
let minutesMissing = 8;
let secondsMissing = 0;

setInterval(() => {
    secondsMissing += 5; // Simulating faster-paced updates for demonstration
    if (secondsMissing >= 60) {
        minutesMissing++;
        secondsMissing = 0;
    }
    
    const timeString = `${minutesMissing}m ${secondsMissing}s ago`;
    document.getElementById("missing-time").innerText = timeString;
    document.getElementById("table-missing-time").innerText = timeString;
}, 5000);

// Upgraded Risk Engine & Route Recommendation System
let risks = ["Low", "Medium", "High", "Critical"];

setInterval(() => {
    let value = risks[Math.floor(Math.random() * risks.length)];
    const riskEl = document.getElementById("risk");
    riskEl.innerHTML = value;

    // Adjust UI colors based on risk
    if (value === "Low") riskEl.style.color = "#22c55e";
    if (value === "Medium") riskEl.style.color = "#facc15";
    if (value === "High") riskEl.style.color = "#f97316";
    if (value === "Critical") riskEl.style.color = "#ef4444";

    // Dynamic Route Recommendations based on systemic threat metrics
    let recommendationsContainer = document.getElementById("recommendations");
    let alertsContainer = document.getElementById("alerts");

    if (value === "Critical" || value === "High") {
        // High/Critical Threats: Activate core response procedures
        recommendationsContainer.innerHTML = `
            <p class="priority-rec">• <strong>Open Gate 4</strong> (Emergency Relief)</p>
            <p class="priority-rec">• <strong>Redirect Crowd to Route B</strong></p>
            <p class="priority-rec">• <strong>Deploy Additional Security</strong> to Sector 2</p>
        `;

        alertsContainer.innerHTML = `
            <li class="alert-critical">🚨 CRITICAL CROWD PRESSURE DETECTED</li>
            <li class="alert-critical">🚨 Emergency route activation suggested</li>
            <li class="alert-critical">🚨 Lost child tracking active at Gate 2</li>
        `;
    } else {
        // Normal/Medium state recommendations
        recommendationsContainer.innerHTML = `
            <p>• Open alternate route towards Exit B</p>
            <p>• Deploy 3 officers near Stage Area</p>
            <p>• Divert crowd from Gate 2</p>
        `;

        alertsContainer.innerHTML = `
            <li>⚠ Crowd density increasing at Gate 2</li>
            <li class="alert-critical">🚨 Lost child detected near Gate 2</li>
            <li>✓ Normal flow at Main Entrance</li>
        `;
    }

}, 5000);

// AI congestion area prediction simulation
let areas = ["Stage Area", "Gate 2", "Main Entrance", "Food Zone"];
setInterval(() => {
    let area = areas[Math.floor(Math.random() * areas.length)];
    document.getElementById("prediction").innerHTML = "High movement near " + area;
}, 4000);