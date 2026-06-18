// Live Request Counter
let requestCount = 0;

// Update Counter
function updateCounter(amount = 1) {
    requestCount += amount;
    document.getElementById("counter").textContent = requestCount;
}

// Activity Log
function addLog(message) {
    const log = document.getElementById("log");

    const time = new Date().toLocaleTimeString();

    log.innerHTML =
        `[${time}] ${message}<br>` +
        log.innerHTML;
}

// -------------------------
// Traffic Generator
// -------------------------

function normalTraffic() {
    updateCounter();
    addLog("✅ Normal request sent.");
}

function trafficSpike() {

    addLog("⚡ Traffic spike started...");

    let sent = 0;

    const spike = setInterval(() => {

        updateCounter(10);
        sent++;

        addLog("📈 +10 simulated requests");

        if (sent >= 10) {
            clearInterval(spike);
            addLog("✅ Traffic spike finished.");
        }

    }, 300);

}

function botSimulation() {

    addLog("🤖 Simulating bot traffic...");

    let bots = 0;

    const bot = setInterval(() => {

        updateCounter(5);
        bots++;

        addLog("🤖 Bot request detected.");

        if (bots >= 15) {
            clearInterval(bot);
            addLog("🚫 Bot simulation complete.");
        }

    }, 250);

}

// -------------------------
// Security Tests
// -------------------------

function wafTest() {

    updateCounter();

    addLog("🛡️ WAF test request sent.");
    addLog("Result: SQL Injection blocked.");

}

function rateLimit() {

    addLog("🚦 Rate Limit Test started.");

    let requests = 0;

    const limit = setInterval(() => {

        requests++;

        updateCounter();

        addLog(`Request #${requests}`);

        if (requests === 20) {
            addLog("❌ HTTP 429 Too Many Requests");
            clearInterval(limit);
        }

    }, 100);

}

function loginAttack() {

    addLog("🔐 Simulating fake login attack...");

    let attempts = 0;

    const attack = setInterval(() => {

        attempts++;
        updateCounter();

        addLog(`Failed login attempt ${attempts}`);

        if (attempts >= 10) {

            addLog("🚨 Multiple failed logins detected.");
            addLog("Cloudflare Bot Protection triggered.");

            clearInterval(attack);

        }

    }, 400);

}
