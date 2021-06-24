let custoProduto = 1;
let custoVenda = 3;

if (custoProduto >= 0 && custoVenda >= 0) {
  let valorCustoTotal = custoProduto * 1.2;
  let lucro = (custoVenda - valorCustoTotal) * 1000;
  console.log(lucro);
} else {
  console.log("erro, os valores não podem ser negativos");
}
