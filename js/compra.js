var resultado = document.getElementById("resultado");

function comprarTinto() {
    alert("Adicionado ao carrinho com sucesso");
    var cupom = document.getElementById("cupom").value;
    var qntdGarrafas = parseInt(document.getElementById("numero").value);
    let preco = 90.99 * qntdGarrafas;
    var desconto = preco * (10/100)

    if (cupom != 'FIAP2024'){
        resultado.innerHTML = `<h3>Preço: R$ ${preco}</h3>`
    }else {
        resultado.innerHTML = `<h3>Preço: R$ ${(preco-desconto).toFixed(2)}</h3>`
    }
}

function comprarBranco() {
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

function comprarRose() {
    alert("Adicionado ao carrinho com sucesso");
    var cupom = document.getElementById("cupom").value;
    var qntdGarrafas = parseInt(document.getElementById("numero").value);
    let preco = 80.99 * qntdGarrafas;
    var desconto = preco*(10/100)

    if (cupom != 'FIAP2024'){
        resultado.innerHTML = `<h3>Preço: R$ ${preco}</h3>`
    }else {
        resultado.innerHTML = `<h3>Preço: R$ ${(preco-desconto).toFixed(2)}</h3>`
    }
}

function comprarEspumante() {
    alert("Adicionado ao carrinho com sucesso");
    var cupom = document.getElementById("cupom").value;
    var qntdGarrafas = parseInt(document.getElementById("numero").value);
    let preco = 180.99 * qntdGarrafas;
    var desconto = preco*(10/100)

    if (cupom != 'FIAP2024'){
        resultado.innerHTML = `<h3>Preço: R$ ${preco}</h3>`
    }else {
        resultado.innerHTML = `<h3>Preço: R$ ${(preco-desconto).toFixed(2)}</h3>`
    }
}