function tampilkanUcapan() {
  const nama = document.getElementById("namaInput").value;
  // const ucapan = document.getElementById('ucapan');
  // const ucapanNama = document.getElementById('ucapanNama');
  if (nama) {
    document.getElementById(
      "ucapanNama"
    ).innerText = `Selamat Ulang Tahun, ${nama}!`;
    document.getElementById("ucapan").classList.remove("hidden");
    document.getElementById("namaInput").classList.add("hidden");
    document.querySelector("button").classList.add("hidden");
  } else {
    alert("Please, Input your name!");
  }
}
