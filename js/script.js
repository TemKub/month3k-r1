//////////////////////
// 1)
const regExp = /^[0-9]+$/

const containsOnlyDigits = (str) => {
    return regExp.test(str)
}

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false

//////////////////////
// 2)
const startAlarm = () => {
    setInterval(() => {
        console.log("Прошла секунла");
    }, 1000)
}
startAlarm();

//////////////////////
// 3)
const startCount = () => {
    let i = 1;
    const timer = setInterval(() => {
        console.log(i)
        if (i === 10) {
            clearInterval(timer)
        }
        i++;
    }, 1000)
}
startCount();

//////////////////////
// 4)
const startCountUp = () => {
    let i = 10;
    const timer = setInterval(() => {
        console.log(i)
        if (i === 0) {
            clearInterval(timer)
        }
        i--;
    }, 1000)
}
startCountUp();

//////////////////////
// 5)
const box = document.querySelector("#box");
box.addEventListener("click", () => {
    box.classList.toggle("active");
});

//////////////////////
// 6)

//////////////////////
// 7)
const button = document.querySelector("#checkBtn");
const loginInput = document.querySelector("#loginInput");

button.addEventListener("click", () => {
    const getPerson = async () => {

        const response = await fetch("../json/users.json");
        const infoPerson = await response.json();
        const searchText = loginInput.value;
        const foundText = infoPerson.find((person) =>
        {
            return person.login === searchText;
        });
        console.log(foundText);
    };
    getPerson();
});


