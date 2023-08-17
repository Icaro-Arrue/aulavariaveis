console.log("exercicios");


/* Exercício 1:
creio que  se exibirá da seguinte forma:

10
10 
5
pois o let é uma variável que se pode modificar

exercício 2:
o c não foi informado entre as variaveis
então, no console:
20
20
undefined (ou 10, n tenho certeza se tem de ser expresso previamente um valor)

exercício 3:
o código exibe o resultado da divisão de dinheiro recebido (t) por tempo trabalhado (p)
nomes alternativos para as variaveis =
p = horasTrabalha
t = dinheiroRecebe

*/

/*
//1
const nomeUser = prompt("Qual o seu nome?")
const idadeUser = prompt("Qual a sua idade?")


console.log(typeof nomeUser, typeof idadeUser);

//string pois resultados de prompt serão smp strings a menos q convertidos

console.log("olá", nomeUser, "feliz aniversario de", idadeUser, "anos");



//2
const precisaAjuda = prompt("Quer ajuda?");
const gostaLego = prompt("Você gosta de lego?");
const estaBem = prompt("Você está bem?");

console.log("Quer ajuda?", precisaAjuda);
console.log("Você gosta de Lego?", gostaLego);
console.log("Você está bem?", estaBem);

//3
let a = 10
let b = 25

c = b
b = a
a = c

console.log("o novo valor de a é", a);
console.log("O novo valor de b é", b);

*/

const anoNascimento = prompt("Em que ano você nasceu?");
const diaNascimento = prompt("Em que dia do mês você nasceu?");

const calculoNumber = Number(anoNascimento) + Number(diaNascimento);

console.log(calculoNumber);

const multiplicaNumber = Number(anoNascimento) * (Number(diaNascimento));

console.log(multiplicaNumber);