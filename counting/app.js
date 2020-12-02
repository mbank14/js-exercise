let hitung = 0;

const hasilAngka = document.getElementById("angka");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const style = e.currentTarget.classList;
        if (style.contains("kurang")) {
            hitung--;
        }else if (style.contains("tambah")) {
            hitung++;
        }else{
            hitung=0
        }
        hasilAngka.textContent = hitung;
    })
})
