const produtos = [
    { codigo: 1, nome: 'Produto A', preco: 10.0},
    { codigo: 2, nome: 'Produto B', preco: 20.0},
    { codigo: 3, nome: 'Produto C', preco: 15.0},
];
function calcularTotal(){
    const codigoProduto = parseInt(document.getElementById('codigoProduto').value);
    const quantidade = parseInt(document.getElementById('quantidade').value);
    
    switch(codigoProduto){
        case 1:
            calcular(quantidade, produtos[0]);
        break;
        case 2:
            calcular(quantidade, produtos[1]);
        break;
        case 3:
            calcular(quantidade, produtos [2]);
        break;
        default:
            alert('Códuigo de produto inválido');
    }
}
    function calcular(quantidade, produto){
        const total = quantidade * produto.preco;
        alert (`Total para ${quantidade} ${produto.nome}(s): R$ ${total.toFixed(2)}`);
    }
