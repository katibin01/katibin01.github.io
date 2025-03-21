function tampilkanUcapan() {
    // Get all required elements
    const namaInput = document.getElementById("namaInput");
    const welcomeSection = document.getElementById("welcome-section");
    const ucapanDiv = document.getElementById("ucapan");
    const ucapanNama = document.getElementById("ucapanNama");
    
    // Get input value
    const nama = namaInput.value;

    if (nama.trim()) {
        // Hide welcome elements
        document.querySelector(".title").style.display = "none";
        document.querySelector("p").style.display = "none";
        namaInput.style.display = "none";
        document.querySelector("button").style.display = "none";

        // Show and update birthday message
        ucapanDiv.style.display = "block";
        ucapanNama.innerText = `Selamat Ulang Tahun, ${nama}!`;
        ucapanDiv.classList.remove("hidden");
    } else {
        alert("Please, Input your name!");
    }
}
