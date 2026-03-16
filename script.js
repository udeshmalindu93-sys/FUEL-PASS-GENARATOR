function generate() {
    let name = document.getElementById("userName").value;
    let vehicle = document.getElementById("vehicleNumber").value;
    if(!name || !vehicle) return alert("Fill all fields!");

    document.getElementById("display-name").innerText = name;
    document.getElementById("display-vehicle").innerText = vehicle;
    
    let qrDiv = document.getElementById("qrcode");
    qrDiv.innerHTML = "";
    new QRCode(qrDiv, { text: vehicle, width: 120, height: 120 });

    document.getElementById("fuel-card").style.display = "block";
    document.getElementById("downloadBtn").style.display = "block";
}

function downloadImage() {
    html2canvas(document.getElementById("fuel-card")).then(canvas => {
        let link = document.createElement("a");
        link.download = "FuelPass.png";
        link.href = canvas.toDataURL();
        link.click();
    });
}
