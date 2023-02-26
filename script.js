const questions = [{
    question: "Guess The Right Color",
    a: "green",
    b: "yellow",
    c: "red",
    d: "black",
    correct: "red",
},
{
    question: "Who is the president of the US",
    a: "Donald Trump",
    b: "Jeff Bezos",
    c: "Joe Biden",
    d: "Obama",
    correct: "Joe Biden",
},
{
    question: "What does HTML Stands for",
    a: "Hyper Text",
    b: "Text Markup Language",
    c: "Hyper Text Markup Language",
    d: "Hyper Language",
    correct: "Hyper Text Markup Language",
},
{
    question: "What does CSS Stands for",
    a: "Cascading Style",
    b: "Cascading Style Sheet",
    c: "Cascading sheet",
    d: "Cascading",
    correct: "Cascading Style Sheet",
},
{
    question: "What Is the best game in 2022",
    a: "Lol",
    b: "Dota2",
    c: "Wow",
    d: "Valorant",
    correct: "Lol",
},

]
const submitBtn = document.querySelector("form button");
const form = document.querySelector("form ");
const title = document.querySelector("form h3");
const a = document.querySelector(".a_option label");
const b = document.querySelector(".b_option  label");
const c = document.querySelector(".c_option label");
const d = document.querySelector(".d_option label");
const radioBtns = document.querySelectorAll("form > div input");
const checkedInput = document.querySelector("form > div input[name='input']:checked");
let index = 0;
let result = 0;

function deSelect() {
radioBtns.forEach((e) => {

    e.checked = false;
})
}


function loadQuiz() {
deSelect();

if (index < questions.length) {
    title.innerHTML = questions[index].question;
    a.innerHTML = questions[index].a;
    b.innerHTML = questions[index].b;
    c.innerHTML = questions[index].c;
    d.innerHTML = questions[index].d;

        index++;

} else {
    form.innerHTML = `<p>You Scored ${result} out of ${questions.length}</p>
    <button class ="reload">Retake the Test</button>
    `;
    const reloadBtn = document.querySelector(".reload");
    reloadBtn.addEventListener("click", () => {
        location.reload();
    })
}
}
loadQuiz();

submitBtn.onclick = () => {
const label = document.querySelector("form > div input[name='input']:checked + label");

if (label.textContent == questions[index - 1].correct ) {
    result++;
}
loadQuiz();
}   