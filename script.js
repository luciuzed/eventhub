var harga = 100000;

document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var notelp = document.getElementById("notelp").value;
    var tanggal = document.getElementById("tanggal").value;
    var tipe = document.querySelector('input[name="tipePeserta"]:checked');
    var cb = document.querySelectorAll('.workshop-checkbox:checked');

    if (nama == "") {
        alert("Nama kosong");
        return;
    }

    if (email == "") {
        alert("Email kosong");
        return;
    }

    var reg = /^[0-9]{10,13}$/;
    if (!reg.test(notelp)) {
        alert("No hp salah");
        return;
    }

    if (tanggal == "") {
        alert("Tanggal kosong");
        return;
    }

    if (!tipe) {
        alert("Tipe belum dipilih");
        return;
    }

    if (cb.length == 0) {
        alert("Pilih minimal 1 workshop");
        return;
    }

    var listWs = [];
    for (var i = 0; i < cb.length; i++) {
        listWs.push(cb[i].value);
    }

    var subtotal = cb.length * harga;
    var diskon = 0;
    if (cb.length > 1) {
        diskon = subtotal * 0.1;
    }
    var total = subtotal - diskon;

    document.getElementById("resNama").innerText = "Nama: " + nama;
    document.getElementById("resTipe").innerText = "Tipe Peserta: " + tipe.value;
    document.getElementById("resWorkshop").innerText = "Workshop Dipilih: " + listWs.join(", ");
    document.getElementById("resTotal").innerText = "Total Biaya: Rp " + total;

    var card = document.getElementById("resultCard");
    card.classList.remove("d-none");
});