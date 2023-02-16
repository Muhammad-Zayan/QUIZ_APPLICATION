const quizDB = [
    {
        question: " Q1 :What does HTML stands for?",
        a: "Hyperlinks and Text Markup Language",
        b: "Hyper Text Markup Language",
        c: "Home Tool Markup Language",
        ans: "ans2"
    },
    {
        question: "Q2: CSS stands for",
        a: "Computer Style Sheets",
        b: "Cascading Style Sheets",
        c: "Canvas Styling System",
        ans: 'ans2'
    },
    {
        question: "Q3: How can you add CSS?",
        a: "Using Internal Style Sheet",
        b: "Using External Style Sheet",
        c: "In all two ways",
        ans: 'ans3'
    },
    {
        question: "Q4: Which HTML tag specifies an internal style sheet?",
        a: "<css>",
        b: "<script>",
        c: "<style>",
        ans: 'ans3'
    },
    {
        question: "Q5: What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        ans: 'ans2',
    },
    {
        question: "Q6: What HTML form input must be used to present multiple options, but select only one?",
        a: "<input type='radio'>",
        b: "<input type='checkbox'>",
        c: "<input type='text'>",
        ans: 'ans1'
    },
    {
        question: "Q7: How does Java Script store dates in objects of Date type?",
        a: "The number of picoseconds since January 1st, 1970",
        b: "The number of days since January 1st, 1900",
        c: " The number of milliseconds since January 1st, 1970 ",
        ans: 'ans3'
    },
    {
        question: "Q8: Which of the following is correct to write â€œHello Worldâ€ on the web page?",
        a: " document.write(â€œHello Worldâ€) ",
        b: " response.write(â€œHello Worldâ€)",
        c: "System.out.println(â€œHello Worldâ€)",
        ans: 'ans1'
    },
    {
        question: "Q9: JavaScript is also called client-side JavaScript.",
        a: "LiveWire",
        b: "Navigator ",
        c: " Microsoft",
        ans: 'ans2'
    },
    {
        question: "Q10: What is the alternate name for Java script?",
        a: "Both b and c",
        b: "ECMAScript ",
        c: "ECMScript",
        ans: 'ans2'
    },
    {
        question: "Q11: What java wrapper type is created when a JavaScript object is sent to Java?",
        a: "ScriptObject",
        b: "JSObject ",
        c: "Jobject",
        ans: 'ans2'
    },

    {
        question: "Q12: JavaScript ignores extra spaces",
        a: "True",
        b: "False",
        
        ans: 'ans1'
    },

    {
        question: "Q13: Which of the following is a client-side Java Script object?",
        a: "FileUpload ",
        b: "File",
        c: "Function",
        ans: 'ans1'
    },

    {
        question: "Q14: How to append a value to an array of Java Script?",
        a: "arr[arr.length-1] = value",
        b: "arr[arr.length] = value ",
        c: "arr[arr.length+1] = value",
        ans: 'ans2'
    },

    {
        question: "Q15: Java Script entities start with ______ and end with ______",
        a: "Semicolon, Ampersand",
        b: "Ampersand, colon",
        c: "Ampersand, semicolon ",
        ans: 'ans3'
    }
];

const question = document.querySelector('.question')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const submit = document.querySelector('#submit')
const btn = document.querySelector('.btn')
const showScore = document.querySelector('#showScore')

//if we ant to use mulitple class in one query then we use queryselectorAll
const answers = document.querySelectorAll('.answer')



let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount]

    question.innerText = questionList.question
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;


}
loadQuestion();

// in javascript provide checked property by defualt to check the statment or options 

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsEle) => {
        if (curAnsEle.checked) {
            answer = curAnsEle.id
        }

    })

    return answer;

}


const deselectAll = () => {
    answers.forEach((curAnsEle) => curAnsEle.checked = false)
}



function validate(){
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    if(password=="123" && username=="user"){
        // window.location.replace("http://www.w3schools.com");
        window.location.href = "file:///login.html"

        alert("Now you can attemend Quiz")
        return false
    }else{
        alert("Login Falied")
    }

}





submit.addEventListener('click', () => {
    const checkanswer = getCheckAnswer()
    console.log(checkanswer)

    if (checkanswer == quizDB[questionCount].ans) {
        score++;
    }

    questionCount++;

    deselectAll()

    if (questionCount < quizDB.length) {
        loadQuestion()
    } else {
        showScore.innerHTML = `
        <h3>Your Score ${score}/${quizDB.length} </h3>
        <h3>Your Percentage is ${Math.round(score/quizDB.length*100)}%</h3>
        <button class="btn" onclick="location.reload()">DO AGAIN</button>
        window.location.href= "index.html"
        `
        
        showScore.classList.remove('scorearea')
    }

    


})

