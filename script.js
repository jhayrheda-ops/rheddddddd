async function loadVisitorInfo() {
    try {
        const response = await fetch("/visitor");
        const data = await response.json();

        document.getElementById("country").textContent = data.country;
        document.getElementById("ip").textContent = data.ip;
    } catch (err) {
        document.getElementById("country").textContent = "Insert here";
        document.getElementById("ip").textContent = "Insert here";
    }
}

loadVisitorInfo();
