// Um cliente que vende internacionais e nacionais conseguiu extrair alguns dados de seu programa financeiro. 
// O problema é que esse programa retorna os dados na forma de mapas e traz apenas o valor do produto e se ele é internacional 
// ou nacional, mas não calcula os impostos.

// Dada essa situação, ele contratou você para criar um programa que, ao receber o mapa de um produto, verifica se ele
// é nacional ou internacional e aplica 20% de impostos seja de outro país e 12% seja brasileiro. Uma vez aplicado o imposto, 
// o programa imprime na tela o valor total do produto.

let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if (produtoA.internacional) {
    console.log("A", (produtoA.nome), "custa", (produtoA.valor*1.20), "reais.")
} else {
    console.log("A", (produtoA.nome), "custa", (produtoA.valor*1.12), "reais.")
}
if (produtoB.internacional) {
    console.log("O", (produtoB.nome), "custa", (produtoB.valor*1.20), "reais.")
} else {
    console.log("O", (produtoB.nome), "custa", (produtoB.valor*1.12), "reais.")
}
if (produtoC.internacional) {
    console.log("A", (produtoC.nome), "custa", (produtoC.valor*1.20), "reais.")
} else {
    console.log("A", (produtoC.nome), "custa", (produtoC.valor*1.12), "reais.")
}