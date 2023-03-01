const quizData = [
    {
        Qus: "კითხვა I: რა არის 'Python' ?",
        ans1: "ქვეწარმავალი",
        ans2: "ქსელური მარკეტინგი",
        ans3: "პროგრამირების ენა",
        ans4: "პატარა კოდი",
        ans: "c"
    },
    {
        Qus: "კითხვა II: პითონი არის _______ პროგრამირების ენა ?",
        ans1: "ობიექტზე ორიენტირებული",
        ans2: "ობიექტზე დაფუძნებული",
        ans3: "ობიექტთან მებრძოლი",
        ans4: "არცერთი",
        ans: "a"
    }, 
    {
        Qus: "კითხვა III: დაწერეთ ტიპი - print(type('5')) ?",
        ans1: "<class 'int'>",
        ans2: "<class 'float'>",
        ans3: "<class 'str'>",
        ans4: "<class 'list'>",
        ans: "c"
    },
    {
        Qus: "კითხვა IV: for x in range(0.5, 5.5, 0.5): print(x) ?        ?",
        ans1: "შეცდომა",
        ans2: "[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5]",
        ans3: "[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]",
        ans4: "[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]",
        ans: "a"
    },
    {
        Qus: "კითხვა V: var1 = 1, var2 = 2, var3 = '3' print(var1+var2+var3) ?",
        ans1: "123",
        ans2: "6",
        ans3: "შეცდომა",
        ans4: "33",
        ans: 'c'
    },
    {
        Qus: "კითხვა VI: i = '' , print(bool(i)) ?",
        ans1: "False",
        ans2: "True",
        ans3: "None",
        ans4: "შეცდომა",
        ans: "a"
    },
    {
        Qus: "კითხვა VII: რა არის 'Flask' ?",
        ans1: "წიწაკა",
        ans2: "მიკრო ვებ-ფრეიმვორქი",
        ans3: "ჯანგო",
        ans4: "ყველა ზემოთ ჩამოთვლილი",
        ans: "b"
    }
]

const btn = document.querySelector(".btn");
const nextQueBtn = document.getElementById("nextQueBtn");
const resultBtn = document.querySelector(".resultBtn");
const playagainBtn = document.querySelector(".playagainBtn")
const queAndoptions = document.querySelector(".queAndoptions");
const first = document.querySelector(".first");
const head = document.getElementById("head")
const ques = document.querySelector(".ques");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");
let option = document.querySelectorAll(".option")


let questions = 0;

function show() {
    let quizQuestions = quizData[questions];

    ques.innerHTML = quizQuestions.Qus;

    opt1.innerText = quizQuestions.ans1;
    opt2.innerText = quizQuestions.ans2;
    opt3.innerText = quizQuestions.ans3;
    opt4.innerText = quizQuestions.ans4;
}

btn.addEventListener("click", function () {
    queAndoptions.style.display = "block";
    first.style.display = "none"
    show();
})


let answer = '';
let score = '';
const getAns = () => {
    option.forEach((element) => {
        if (element.checked) {
            answer = element.id
        }
    })
    return answer;
}

const deselectAll= ()=>{
    option.forEach((element)=>{
        element.checked = false;
    })
}

nextQueBtn.addEventListener("click", function () {
    let checkAnswer = getAns()
    console.log(checkAnswer);

    if (checkAnswer == quizData[questions].ans) {
        score++;
    }
    questions++;
    if (questions < quizData.length) {
        show();
        deselectAll();
    }
    else {
        queAndoptions.style.display = "none";
        first.style.display = "block"
        head.innerText = "გილოცავთ! ქვიზი დასრულებულია."
        btn.style.display = "none"
        resultBtn.style.display = "block"

        resultBtn.addEventListener("click", () => {
            queAndoptions.style.display = "block";
            queAndoptions.innerHTML = `<h2>თქვენ დააგროვეთ ${score}/${quizData.length}</h2>`
            resultBtn.style.display = "none"
            playagainBtn.style.display = "block"
            head.style.display = "none"
        })
        playagainBtn.addEventListener("click", () => {
            location.reload();
        })
    }
})