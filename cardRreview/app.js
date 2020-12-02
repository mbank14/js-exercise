const data = [
    {
        id: 1,
        gambar: "./asset/1.png",
        nama: "Khilan",
        pekerjaan: "UI/UX",
        katabijak: "ini untuk itu"
    },
    {
        id: 2,
        gambar: "./asset/1.png",
        nama: "Colan",
        pekerjaan: "Game Designer",
        katabijak: "ini adalah itu"
    },
    {
        id: 3,
        gambar: "./asset/3.png",
        nama: "Muntulan",
        pekerjaan: "DevOps",
        katabijak: "ini bagi itu"
    },
    {
        id: 1,
        gambar: "./asset/1.png",
        nama: "Dalan",
        pekerjaan: "Manager",
        katabijak: "ini bukanlah itu"
    },
];


const nama = document.getElementById("nama");
const pekerjaan = document.getElementById("pekerjaan");
const gambar = document.getElementById("gambar");
const kataBijak = document.getElementById("katabijak");

const btns = document.querySelectorAll(".btn-nav");

let itemSekarang = 0;

window.addEventListener('DOMContentLoaded', function () {
    tampilData()
});

function tampilData() {
    const item = data[itemSekarang];
    gambar.src = item.gambar;
    nama.textContent = item.nama;
    pekerjaan.textContent = item.pekerjaan;
    kataBijak.textContent = item.katabijak;
    
}

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const koko = e.currentTarget.classList;
        if (koko.contains("kanan")) {
            itemSekarang++;
            if (itemSekarang > data.length - 1) {
                itemSekarang=0;
            }
            tampilData();
        }else if (koko.contains("kiri")) {
            itemSekarang--;
            if (itemSekarang < 0) {
                itemSekarang = data.length -1;
            }
            tampilData(itemSekarang);
        }
    })
})