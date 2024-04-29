var resultado = document.getElementById("resultado");

function comprarBranco1() {
    alert("Adicionado ao carrinho com sucesso");
    var cupom = document.getElementById("cupom").value;
    var qntdGarrafas = parseInt(document.getElementById("numero").value);
    let preco = 149.00 * qntdGarrafas;
    var desconto = preco*(10/100)

    if (cupom != 'FIAP2024'){
        resultado.innerHTML = `<h3>Preço: R$ ${preco}</h3>`
    }else {
        resultado.innerHTML = `<h3>Preço: R$ ${(preco-desconto).toFixed(2)}</h3>`
    }
}

function comprarBranco2() {
    alert("Adicionado ao carrinho com sucesso");
    var cupom = document.getElementById("cupom").value;
    var qntdGarrafas = parseInt(document.getElementById("numero").value);
    let preco = 180.00 * qntdGarrafas;
    var desconto = preco*(10/100)

    if (cupom != 'FIAP2024'){
        resultado.innerHTML = `<h3>Preço: R$ ${preco}</h3>`
    }else {
        resultado.innerHTML = `<h3>Preço: R$ ${(preco-desconto).toFixed(2)}</h3>`
    }
}

function comprarBranco3() {
    alert("Adicionado ao carrinho com sucesso");
    var cupom = document.getElementById("cupom").value;
    var qntdGarrafas = parseInt(document.getElementById("numero").value);
    let preco = 60.99 * qntdGarrafas;
    var desconto = preco*(10/100)

    if (cupom != 'FIAP2024'){
        resultado.innerHTML = `<h3>Preço: R$ ${preco}</h3>`
    }else {
        resultado.innerHTML = `<h3>Preço: R$ ${(preco-desconto).toFixed(2)}</h3>`
    }
}

function comprarBranco4() {
    alert("Adicionado ao carrinho com sucesso");
    var cupom = document.getElementById("cupom").value;
    var qntdGarrafas = parseInt(document.getElementById("numero").value);
    let preco = 79.90 * qntdGarrafas;
    var desconto = preco*(10/100)

    if (cupom != 'FIAP2024'){
        resultado.innerHTML = `<h3>Preço: R$ ${preco}</h3>`
    }else {
        resultado.innerHTML = `<h3>Preço: R$ ${(preco-desconto).toFixed(2)}</h3>`
    }
}

function comprarEspumante1() {
    alert("Adicionado ao carrinho com sucesso");
    var cupom = document.getElementById("cupom").value;
    var qntdGarrafas = parseInt(document.getElementById("numero").value);
    let preco = 86.00 * qntdGarrafas;
    var desconto = preco*(10/100)

    if (cupom != 'FIAP2024'){
        resultado.innerHTML = `<h3>Preço: R$ ${preco}</h3>`
    }else {
        resultado.innerHTML = `<h3>Preço: R$ ${(preco-desconto).toFixed(2)}</h3>`
    }
}

function comprarEspumante2() {
    alert("Adicionado ao carrinho com sucesso");
    var cupom = document.getElementById("cupom").value;
    var qntdGarrafas = parseInt(document.getElementById("numero").value);
    let preco = 191.00 * qntdGarrafas;
    var desconto = preco*(10/100)

    if (cupom != 'FIAP2024'){
        resultado.innerHTML = `<h3>Preço: R$ ${preco}</h3>`
    }else {
        resultado.innerHTML = `<h3>Preço: R$ ${(preco-desconto).toFixed(2)}</h3>`
    }
}

function comprarEspumante3() {
    alert("Adicionado ao carrinho com sucesso");
    var cupom = document.getElementById("cupom").value;
    var qntdGarrafas = parseInt(document.getElementById("numero").value);
    let preco = 398.00 * qntdGarrafas;
    var desconto = preco*(10/100)

    if (cupom != 'FIAP2024'){
        resultado.innerHTML = `<h3>Preço: R$ ${preco}</h3>`
    }else {
        resultado.innerHTML = `<h3>Preço: R$ ${(preco-desconto).toFixed(2)}</h3>`
    }
}

function comprarEspumante4() {
    alert("Adicionado ao carrinho com sucesso");
    var cupom = document.getElementById("cupom").value;
    var qntdGarrafas = parseInt(document.getElementById("numero").value);
    let preco = 180.00 * qntdGarrafas;
    var desconto = preco*(10/100)

    if (cupom != 'FIAP2024'){
        resultado.innerHTML = `<h3>Preço: R$ ${preco}</h3>`
    }else {
        resultado.innerHTML = `<h3>Preço: R$ ${(preco-desconto).toFixed(2)}</h3>`
    }
}

function comprarRose1() {
    alert("Adicionado ao carrinho com sucesso");
    var cupom = document.getElementById("cupom").value;
    var qntdGarrafas = parseInt(document.getElementById("numero").value);
    let preco = 139.00 * qntdGarrafas;
    var desconto = preco*(10/100)

    if (cupom != 'FIAP2024'){
        resultado.innerHTML = `<h3>Preço: R$ ${preco}</h3>`
    }else {
        resultado.innerHTML = `<h3>Preço: R$ ${(preco-desconto).toFixed(2)}</h3>`
    }
}

function comprarRose2() {
    alert("Adicionado ao carrinho com sucesso");
    var cupom = document.getElementById("cupom").value;
    var qntdGarrafas = parseInt(document.getElementById("numero").value);
    let preco = 129.00 * qntdGarrafas;
    var desconto = preco*(10/100)

    if (cupom != 'FIAP2024'){
        resultado.innerHTML = `<h3>Preço: R$ ${preco}</h3>`
    }else {
        resultado.innerHTML = `<h3>Preço: R$ ${(preco-desconto).toFixed(2)}</h3>`
    }
}

function comprarRose3() {
    alert("Adicionado ao carrinho com sucesso");
    var cupom = document.getElementById("cupom").value;
    var qntdGarrafas = parseInt(document.getElementById("numero").value);
    let preco = 89.00 * qntdGarrafas;
    var desconto = preco*(10/100)

    if (cupom != 'FIAP2024'){
        resultado.innerHTML = `<h3>Preço: R$ ${preco}</h3>`
    }else {
        resultado.innerHTML = `<h3>Preço: R$ ${(preco-desconto).toFixed(2)}</h3>`
    }
}
function comprarRose4() {
    alert("Adicionado ao carrinho com sucesso");
    var cupom = document.getElementById("cupom").value;
    var qntdGarrafas = parseInt(document.getElementById("numero").value);
    let preco = 195.00 * qntdGarrafas;
    var desconto = preco*(10/100)

    if (cupom != 'FIAP2024'){
        resultado.innerHTML = `<h3>Preço: R$ ${preco}</h3>`
    }else {
        resultado.innerHTML = `<h3>Preço: R$ ${(preco-desconto).toFixed(2)}</h3>`
    }
}

function comprarTinto1() {
    alert("Adicionado ao carrinho com sucesso");
    var cupom = document.getElementById("cupom").value;
    var qntdGarrafas = parseInt(document.getElementById("numero").value);
    let preco = 99.90 * qntdGarrafas;
    var desconto = preco * (10/100)

    if (cupom != 'FIAP2024'){
        resultado.innerHTML = `<h3>Preço: R$ ${preco}</h3>`
    }else {
        resultado.innerHTML = `<h3>Preço: R$ ${(preco-desconto).toFixed(2)}</h3>`
    }
}

function comprarTinto2() {
    alert("Adicionado ao carrinho com sucesso");
    var cupom = document.getElementById("cupom").value;
    var qntdGarrafas = parseInt(document.getElementById("numero").value);
    let preco = 169.00 * qntdGarrafas;
    var desconto = preco * (10/100)

    if (cupom != 'FIAP2024'){
        resultado.innerHTML = `<h3>Preço: R$ ${preco}</h3>`
    }else {
        resultado.innerHTML = `<h3>Preço: R$ ${(preco-desconto).toFixed(2)}</h3>`
    }
}

function comprarTinto3() {
    alert("Adicionado ao carrinho com sucesso");
    var cupom = document.getElementById("cupom").value;
    var qntdGarrafas = parseInt(document.getElementById("numero").value);
    let preco = 60.00 * qntdGarrafas;
    var desconto = preco * (10/100)

    if (cupom != 'FIAP2024'){
        resultado.innerHTML = `<h3>Preço: R$ ${preco}</h3>`
    }else {
        resultado.innerHTML = `<h3>Preço: R$ ${(preco-desconto).toFixed(2)}</h3>`
    }
}

function comprarTinto4() {
    alert("Adicionado ao carrinho com sucesso");
    var cupom = document.getElementById("cupom").value;
    var qntdGarrafas = parseInt(document.getElementById("numero").value);
    let preco = 129.00 * qntdGarrafas;
    var desconto = preco * (10/100)

    if (cupom != 'FIAP2024'){
        resultado.innerHTML = `<h3>Preço: R$ ${preco}</h3>`
    }else {
        resultado.innerHTML = `<h3>Preço: R$ ${(preco-desconto).toFixed(2)}</h3>`
    }
}