// Set year in footer
document.getElementById("yearNow").innerText=new Date().getFullYear()

// Set random prices
document.querySelectorAll(".precoR").forEach(e => {
    let p = Math.round(Math.random()*999999+10000)+Math.round(Math.random()*99)/100
    e.innerHTML = p
})

// Set action when a product is clicked
document.querySelectorAll(".product").forEach(e => {
    e.onclick = () => {
        alert("Você adicionou o veiculo no carrinho!")
    }
})