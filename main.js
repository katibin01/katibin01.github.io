function tampilkanUcapan() {
  const namaInput = document.getElementById("namaInput");
  const nama = namaInput.value;

  if (nama.trim()) {
    // Hide welcome elements
    document.querySelector(".title").style.display = "none";
    document.querySelector("p").style.display = "none";
    namaInput.style.display = "none";
    document.querySelector("button").style.display = "none";

    // Get current date
    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const dateString = today.toLocaleDateString("id-ID", options);

    // Show and update birthday message
    document.getElementById("ucapan").style.display = "block";
    document.getElementById(
      "ucapanNama"
    ).innerText = `Selamat Ulang Tahun, ${nama}!`;

    // Add date with color
    const currentDateElement = document.getElementById("currentDate");
    currentDateElement.innerText = dateString;
    currentDateElement.style.color = "#0008ff"; // Pink color
    currentDateElement.style.fontWeight = "bold";

    document.getElementById("currentDate").innerText = `${dateString}`;
    document.getElementById("ucapan").classList.remove("hidden");
  } else {
    alert("Please, Input your name!");
  }
}
