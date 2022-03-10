function calculateCost() {
    var tax = document.getElementById("receipt-tax").value;
    var totalPrice = document.getElementById("total-price").value;
    var quantityPhoThong = document.getElementById("phothong-1").value;
    tax = Math.trunc(totalPrice / (95 / 100));
    document.getElementById("receipt-tax").innerHTML = totalPrice + " VND";
    if (quantityPhoThong >= 1) {
        document.getElementById("items-add").innerHTML += '<tr class="item">';
        document.getElementById("items-add").innerHTML += '<td class="desc">Vé Phổ Thông</td>';
        document.getElementById("items-add").innerHTML += '<td class="id num">NDSGN921-932-739285XE-D</td>';
        document.getElementById("items-add").innerHTML += '<td class="qty">1</td>';
        document.getElementById("items-add").innerHTML += '<td class="amt">0 VND</td>';
    } else if (quantityPhoThong == 0) {
        document.getElementById("items-add").innerHTML = "";
    }
}