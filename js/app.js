const brtcQuiz = [
    {
        question: "সুপারিকল্পিত ভাবে রাস্তায় যানবাহন পরিচালনার দায়িত্ব কোন কোন সংস্থার উপর ন্যাস্ত",
        options: [
            "যোগাযোগ মন্ত্রণালয়",
            "সড়ক ও জনপথ বিভাগ",
            "ট্রাফিক পুলিশ বিভাগ",
            "ড্রাইভিং প্রশিক্ষণ কেন্দ্র",

        ],
        correct: 0
    },
    {
        question: "রাস্তায় চলমান গাড়ীর কাগজপত্র পরির্দশন করার ক্ষমতা রাখেন কারা?",
        options: [
            "পুলিশের সাব ইন্সপেক্টর, সার্জেন্ট ও উর্ধ্বতন কর্মকর্তা।",
            "বি.আর.টি.এ এর কর্মকর্তা",
            "মোবাইল কোর্টের ম্যাজিষ্ট্রেট",
            "শুধুমাত্র উল্লেখিত প্রতিষ্ঠান/ব্যক্তি কাগজ পত্র পরির্দশন করবেন",

        ],
        correct: 0
    },
    {
        question: "জরুরী গাড়ী কি ধরনের সিগন্যাল ব্যবহার করেন?",
        options: [
            "ভিআইপি গাড়ীঃ লাল বাতি ও সর্তক সংকেত ব্যবহার করেন",
            "অগ্নিনির্বাপক গাড়ীঃ লাল-নীল বাতি ও বেল বাজিয়ে থাকেন।",
            "এম্বুলেন্সঃ লাল-নীল বাতি ও আলাদা হর্ন (সাইরেন) ব্যবহার করেন",
            "উপরের সব গুলোই",

        ],
        correct: 0
    },
    {
        question: "কুলিং ফ্যান গাড়ির জন্য কি কাজ করে?",
        options: [
            "কারবারে বৃদ্ধি দেয়",
            "ইঞ্জিন ঠান্ডা রাখে",
            "ব্রেক সিস্টেম ঠিক রাখে",
            "ইঞ্জিন ও গাড়ির দুর্বল অংশ পানির ভাপ করে",

        ],
        correct: 1
    },
]

//console.log(brtcQuiz[0])

// get elements
const quiz = document.querySelector("#quiz")
const answerElement = document.querySelectorAll(".answer");
const [questionElement, option_1, option_2, option_3, option_4] = document.querySelectorAll("#question, .option_1, .option_2, .option_3, .option_4");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let socre = 0;

// loadQuiz function 

const loadQuiz = () => {
    //data distructuring
    const {question, options} = brtcQuiz[currentQuiz];
    questionElement.textContent = question;

    options.forEach((currentOption, index) =>(window[`option_${index + 1}`].innerText = currentOption))
    // options.forEach((currentOption, index) => {
    //     const optionElement = document.querySelector(`.option_${index + 1}`);
    //     console.log(optionElement)
    //     //optionElement.innerText = currentOption;
    // });
    
}

loadQuiz()

const getSelectedOption = () => {
    let ans_index;
    answerElement.forEach((currentOption, index) => {
        if(currentOption.checked){
             ans_index = index
        }
    })
    return ans_index;
}

const deselectedAnswers = () => {
    answerElement.forEach(currentElement => currentElement.checked = false);
}

//click event

submitBtn.addEventListener('click', () => {
    const seletedOptionIndex = getSelectedOption();
    console.log(seletedOptionIndex);

    if( seletedOptionIndex === brtcQuiz[currentQuiz].correct){
        socre = socre + 1 ;
    }
    currentQuiz++;
    if(currentQuiz < brtcQuiz.length){
        deselectedAnswers()
        loadQuiz()
    }else {
        quiz.innerHTML = `
        <div class="result">
        <h2> Your Socre: ${socre}/${brtcQuiz.length} Correct Answers</h2>
        <p> Congratulations on completing the quiz!</p>
        <button class="reload-btn" onclick="location.reload()">Play Again</button> 
        `
    }
})
