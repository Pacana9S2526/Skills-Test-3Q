function calcualteTotal() {
    adminfee = 50.00;
    let ticketQuantity =  Number(document.getElementById("ticket").value);
    let adminfee = Number(document.getElementById("adminfee").value);
    let tickettotal = Number(document.getElementById("ticketTotal").value);
    tickettotal = ticketQuantity + adminfee + subtotal;
    document.getElementById("ticketTotal").innerHTML = `
    <h3>Total Fare: <span id="ticketTotal" class="boxed">${tickettotal}</span></h3>
    `
}