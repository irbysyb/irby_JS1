var tebakan;
var jawaban = 7;

do {
  tebakan = parseInt(prompt("Tebak angka (antara 1 dan 10):"));
} while (tebakan !== jawaban);

console.log("Selamat! Anda menebak dengan benar.");