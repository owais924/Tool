function calculateHours() {
    const capacity = 100; // AH
    const efficiency = 0.9;

    const voltage = parseFloat(document.getElementById('voltage').value);

    // Getting quantities
    const lightsQty = parseInt(document.getElementById('lights').value) || 0;
    const fansQty = parseInt(document.getElementById('fans').value) || 0;
    const ac1tonQty = parseInt(document.getElementById('ac1ton').value) || 0;
    const ac15tonQty = parseInt(document.getElementById('ac15ton').value) || 0;
    const ac2tonQty = parseInt(document.getElementById('ac2ton').value) || 0;
    const fridgeQty = parseInt(document.getElementById('fridge').value) || 0;
    const motorQty = parseInt(document.getElementById('motor').value) || 0;
    const tvQty = parseInt(document.getElementById('tv').value) || 0;
    const washingMachineQty = parseInt(document.getElementById('washingMachine').value) || 0;
    const ovenQty = parseInt(document.getElementById('oven').value) || 0;
    const airCoolerQty = parseInt(document.getElementById('airCooler').value) || 0;
    const ironQty = parseInt(document.getElementById('iron').value) || 0;

    // Calculating loads
    const load1 = 25 * 0.9 * lightsQty;
    const load2 = 80 * 0.9 * fansQty;
    const load3 = 1330 * 0.8 * ac1tonQty;
    const load4 = 1995 * 0.8 * ac15tonQty;
    const load5 = 2660 * 0.8 * ac2tonQty;
    const load6 = 1000 * 0.65 * fridgeQty;
    const load7 = 1000 * 0.5 * motorQty;
    const load8 = 500 * 0.95 * tvQty;
    const load9 = 800 * 0.7 * washingMachineQty;
    const load10 = 2700 * 0.7 * ovenQty;
    const load11 = 500 * 0.65 * airCoolerQty;
    const load12 = 1000 * 0.5 * ironQty;

    const totalLoad = load1 + load2 + load3 + load4 + load5 + load6 + load7 + load8 + load9 + load10 + load11+load12;

    // Calculating hours
    const hours = (capacity * voltage * efficiency) / totalLoad;

    // Display the result
    document.getElementById('resultHours').innerText = `Hours: ${hours.toFixed(2)} Hrs`;
    document.getElementById('totalLoad').innerText = `Total Load: ${totalLoad.toFixed(2)} watts`;
}
