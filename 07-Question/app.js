//using selectors inside the element
// traversing the dom

//method:-traversing the DOM
const btns = document.querySelectorAll(".question-btn");
const plus = document.querySelector(".plus-icon");
const minus = document.querySelector(".minus-icon");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const question = e.currentTarget.parentElement.parentElement;
        console.log(question);
        question.classList.toggle("show-text");
    });
});