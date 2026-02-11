// ---------------------- ВОПРОСЫ И ВАРИАНТЫ ----------------------
const quizData = [
    {
        question: "Karina x Aru канон?",
        options: [
            { text: "Да", value: 1 },
            { text: "Нет", value: 0 }
        ]
    },
    {
        question: "Как в 7 классе Ару называла gpt ?",
        options: [
            { text: "Good boy/girl", value: 0 },
            { text: "Собака", value: 1 },
            { text: "Чушка", value: 0 }
        ]
    },
    {
        question: "Трилогия по которой она тащится",
        options: [
            { text: "Всё ради игры", value: 1 },
            { text: "Всё ради игры", value: 1 },
            { text: "Всё ради игры", value: 1 }
        ]
    },
    {
        question: "Происходит ли у неё каждый день на курсах какая-то фигня?",
        options: [
            { text: "ДА", value: 1 },
            { text: "Нет, что за бред", value: 0 },
            { text: "Тостой", value: 1 }
        ]
    },
    {
        question: "Находит ли Ару какой-то вебтун и заставляет читать своего раба",
        options: [
            { text: "Да", value: 1 },
            { text: "Да", value: 1 }
        ]
    },
    {
        question: "Смеет ли кто-то спорить с ней на алгебре",
        options: [
            { text: "Какое чмо посмело", value: 1 },
            { text: "Нет", value: 1 },
            { text: "У кого хватило наглости чтобы перечить ей", value: 1 }
        ]
    },
    {
        question: "Ару француз?",
        options: [
            { text: "100% да", value: 0 },
            { text: "Скорее да", value: 0 },
            { text: "Кыргызстан алга", value: 0 },
            { text: "사랑해요 씨발 !", value: 1 }
        ]
    },
    {
        question: "ARU PEAKK",
        options: [
            { text: "YESS", value: 1 },
            { text: "no", value: 0 }
        ]
    }
];

let current = 0;
let score = 0;
let userName = "";

function startQuiz() {
    userName = document.getElementById("name").value.trim();
    if (!userName) {
        alert("WRITE YOUR NAME");
        return;
    }
    document.getElementById("start").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const q = quizData[current];
    document.getElementById("q-text").textContent = (current + 1) + ". " + q.question;
    document.getElementById("q-num").textContent = current + 1;

    const optsDiv = document.getElementById("options");
    optsDiv.innerHTML = "";

    q.options.forEach(opt => {
        const div = document.createElement("div");
        div.className = "option";
        div.textContent = opt.text;
        div.addEventListener("click", () => {
            score += opt.value;
            document.querySelectorAll(".option").forEach(el => el.classList.remove("selected"));
            div.classList.add("selected");
            document.getElementById("next").disabled = false;
        });
        optsDiv.appendChild(div);
    });

    document.getElementById("next").disabled = true;
}

function nextQuestion() {
    current++;
    if (current < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";

    document.getElementById("res-name").textContent = userName;
    const finalScore = Math.round(score);
    document.getElementById("res-score").textContent = finalScore + "/8";

    let message = "";
    if (finalScore <= 3) {
        message = "ewww ты не настоящий арустанец 😭";
    } else if (finalScore <= 6) {
        message = "Пойдёт, но не идеально";
    } else {
        message = "УАХАХАХА ТРУ АРУ ФАН! Karina x Aru канон, ARU PEAKK, 사랑해요 씨발! 💙🔥";
    }

    document.getElementById("message").textContent = message;
}
