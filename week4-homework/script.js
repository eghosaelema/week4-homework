// JavaScript source code
function check() {

    var c = 0;
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    var result = document.getElementById('result');
    var quiz = document.getElementById('quiz');

    if (q1 == "jason") { c++ }
    if (q2 == "bank") { c++ }
    if (q3 == "eghosa") { c++ }
    if (q4 == "lemonade") { c++ }
    if (q5 == "blue") { c++ }
    document.write(c);
    quiz.style.display = 'none';
    if (c <=3) {
        result.textContent = 'your result is $(c). TRY HARDER '
    }
    else {
        result.textContent = 'your result is $(c). GOOD JOB,KEEP IT UP '
    }
}
