const perguntas = [
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "var myVar;",
            "let myVar;",
            "const myVar;",
        ],
        correta: 2
    },
    {
        pergunta: "O que o operador '===' faz em JavaScript?",
        respostas: [
            "Verifica se dois valores são iguais em valor e tipo.",
            "Verifica se dois valores são iguais em valor, mas não em tipo.",
            "Compara dois valores independentemente de seu tipo.",
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "addToEnd()",
            "append()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
        respostas: [
            "5",
            "32",
            "Erro",
        ],
        correta: 1
    },
    {
        pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "<!-- Este é um comentário -->",
            "/* Este é um comentário */",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a saída do seguinte código: console.log(typeof [])?",
        respostas: [
            "'object'",
            "'array'",
            "'undefined'",
        ],
        correta: 0
    },
    {
        pergunta: "O que é JSON em JavaScript?",
        respostas: [
            "JavaScript Object Notation",
            "Java Symbolic Object Notation",
            "JavaScript Ordered Notation",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
        respostas: [
            "Converter uma string em um número inteiro",
            "Converter um número inteiro em uma string",
            "Arredondar um número para o inteiro mais próximo",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador lógico que representa 'OU' em JavaScript?",
        respostas: [
            "&&",
            "||",
            "!",
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "removeLast()",
            "deleteLast()",
        ],
        correta: 0
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostratTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta


    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }

            mostratTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
}