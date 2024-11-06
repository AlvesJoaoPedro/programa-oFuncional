/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const dobroNumeros = numeros.map(x=>x*2);

const mostraNumerosImpares = numeros.filter(x=> x%2===1);
const mostraNumerosPares = numeros.filter(x=> x%2===0);

console.log("Números ímpares da lista: " + mostraNumerosImpares);
console.log("Números pares da lista: " + mostraNumerosPares);

const somaValores = numeros.reduce((a, b) => a+b, 0);
console.log("A soma de todos os valores da lista é de " + somaValores);

const fatorialLista = numeros.reduce((a, b) => a*b, 1);
console.log("O fatorial da lista de valores é de " + fatorialLista);*/

class Produto
{
    constructor(nome, valor)
    {
      this.Nome = nome;
      this.Valor = valor;
      this.Quantidade = 0;
    }
    
}
const produto1 = new Produto("GTX 1660S", 1320);
produto1.Quantidade = 3;

const produto2 = new Produto("Teclado Gamer Razer Viper", 900);
produto2.Quantidade = 5;

const produto3 = new Produto("Caixa de chocolate Lacta", 12);
produto3.Quantidade = 15;


compras = 
[
  produto1,
  produto2,
  produto3
]

const valorTotal = compras.map(produto => produto.Valor * produto.Quantidade).reduce((total,valor) => total + valor, 0);
console.log("O valor total da compra é de R$ " + valorTotal);
