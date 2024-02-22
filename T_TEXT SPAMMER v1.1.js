// FOR TELE VER. K DAN MASIH DALAM PENGEMBANGAN


const message = ""; // PESAN YANG MAU DIKIRIM
const interval = 1; // HITUNGAN DETIK
const count = 0; // BERAPA KALI MAU KIRIM PESAN
const notifyInterval = 1; // NOTIF SUDAH BERAPA PESAN TERKIRIM
let i = 0;


jedaWaktu = setInterval(spamText,interval * 1000); // HITUNGAN PER MILISECOND

function spamText() {
    document.getElementsByClassName('input-message-input')[0].innerHTML = message;
    document.getElementsByClassName('btn-send')[0].click();
    i++;
    if (i == count) {
        clearInterval(jedaWaktu);
    }
    if (i % notifyInterval == 0) {
        console.log(i + ' PESAN TERKIRIM');
    }
}