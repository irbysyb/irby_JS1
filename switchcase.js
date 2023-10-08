var menu = "Ayam Bakar";
var harga;

switch (menu) {
  case "Nasi Goreng":
    harga = 20;
    break;
  case "Mie Ayam":
    harga = 15;
    break;
  case "Spaghetti":
    harga = 25;
    break;
  default:
    harga = "Menu tidak ada dalam daftar";
}

console.log("Harga " + menu + " adalah " + harga + " ribu rupiah");

