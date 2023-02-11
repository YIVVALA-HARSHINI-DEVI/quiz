var marks = 0;
const Questions = [{
    id: 0,
    q : "How many number of states in India?",
    a : [{text : "27", isCorrect : false},
        {text : "28", isCorrect : false},
        {text : "29", isCorrect : true},
        {text : "30", isCorrect : false},
        ]
    },
    {
    id: 1,
    q : "Which among one is the capital of Kerala?",
    a : [{text: "Calicut",isCorrect : false},
        {text: "Bombay",isCorrect : false},
        {text: "Hyderabad",isCorrect : false},
        {text: "Thiruvananthapuram",isCorrect : true},
        ]
    },
    {
    id: 2,
    q : "How was TamilNadu Known as?",
    a : [{text: "Mysore",isCorrect : false},
        {text: "Madras",isCorrect : true},
        {text: "Hyderabad",isCorrect : false},
        {text: "Bombay",isCorrect : false},
        ]
    },
    {
    id: 3,
    q : "Where is the tomb of Akbar?",
    a : [{text: "Delhi",isCorrect : false},
        {text: "Sikandra",isCorrect : true},
        {text: "Lahore",isCorrect : false},
        {text: "Fatehpur Sikri",isCorrect : false},
        ]
    },
    {
    id: 4,
    q : "Which is the national animal of india?",
    a : [{text: "Tiger",isCorrect : true},
        {text: "Deer",isCorrect : false},
        {text: "Elephant",isCorrect : false},
        {text: "cow",isCorrect : false},
        ]
    },
    {
    id: 5,
    q : "Which is the national flower of india?",
    a : [{text: "Rose",isCorrect : false},
        {text: "Marigold",isCorrect : false},
        {text: "Lotus",isCorrect : true},
        {text: "Sunflower",isCorrect : false},
        ]
    },
    {
        id: 6,
        q : "Which of these colours cannot be found in the Indian Flag?",
        a : [{text: "Red",isCorrect : true},
            {text: "Deep saffron",isCorrect : false},
            {text: "White",isCorrect : false},
            {text: "Dark Green",isCorrect : false},
            ]
    },
    {
        id: 7,
        q : "Who is considered India’s Father of the Nation? ",
        a : [{text: "Nehru",isCorrect : false},
            {text: "Abdul kalam",isCorrect : false},
            {text: "Baghat Singh",isCorrect : false},
            {text: "Mahatma Gandhi",isCorrect : true},
            ]
    },
    {
        id: 8,
        q : "On which continent is India is located?",
        a : [{text: "Europe",isCorrect : false},
            {text: "Asia",isCorrect : true},
            {text: "Africa",isCorrect : false},
            {text: "North America",isCorrect : false},
            ]
    },
    {
        id: 9,
         q : "How many seasons are there in the Hindu Calendar?",
         a : [{text: "12",isCorrect : false},
            {text: "4",isCorrect : false},
            {text: "6",isCorrect : true},
            {text: "8",isCorrect : false},
            ]
    }
]
function iterate(id){
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
    const question = document.getElementById("question");
    question.innerText = Questions[id].q;
    const op1 = document.getElementById("op1");
    const op2 = document.getElementById("op2");
    const op3 = document.getElementById("op3");
    const op4 = document.getElementById("op4");

    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected = "";
    op1.addEventListener("click",()=>{
        document.getElementById('op1').className = "btn btn-danger";
        selected += op1.value;
    })
    op2.addEventListener("click", () => {
        document.getElementById('op2').className = "btn btn-danger";
        selected += op2.value;
    })
    op3.addEventListener("click", () => {
        document.getElementById('op3').className = "btn btn-danger";
        selected += op3.value;
    })
    op4.addEventListener("click", () => {
        document.getElementById('op4').className = "btn btn-danger";
        selected += op4.value;
    })
    const check_answer = document.getElementsByClassName("check_answer");
    check_answer[0].addEventListener("click",()=>{
        if(selected === "true"){
            result[0].innerHTML = "Correct Answer";
            result[0].style.color = "green";
            marks++;
        }else{
            result[0].innerHTML = "Wrong Answer";
            result[0].style.color = "red";
        }
        score[0].innerHTML = String(marks)+"/10";
    })
}
var start = true;
if(start){
    iterate("0",0);
}
var score = document.getElementsByClassName("score");
score[0].innerText = "0/10";
var remarks = document.getElementsByClassName("remarks");
remarks[0].innerText = "";

const next = document.getElementsByClassName("next")[0];
var id = 0;
next.addEventListener("click",()=>{
    start = false;
    document.getElementById('op1').className = "btn btn-warning";
    document.getElementById('op2').className = "btn btn-warning";
    document.getElementById('op3').className = "btn btn-warning";
    document.getElementById('op4').className = "btn btn-warning";
    if(id <= 9){
        id++;
        if(id == 10 ){
            if(marks > 6)
            remarks[0].innerHTML = "Congraxs! You Passed the Exam";
            else
            remarks[0].innerHTML = "Sorry! You are not Qualified";
        }
        else{
            iterate(id);
        }
    }
})
