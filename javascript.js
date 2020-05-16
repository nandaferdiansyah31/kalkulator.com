const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");

const user = {
    name: {
        first: firstName,
        last: lastName,
    },
};

if (user.name) {
    alert("Senang bertemu dengan Anda Kembali !");
} else {
    let hd = document.querySelector("#hd");
    hd.innerHTML = "Ayo " + user.name.first + " Kita Mulai Menghitung"
    alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
}
