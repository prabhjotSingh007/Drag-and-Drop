
let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let btn = document.getElementById("btn");
let message = document.getElementById("message")

let draggingElement = "";

rightBox.addEventListener("dragover", (e) => {
    e.preventDefault();
})

leftBox.addEventListener("dragover", (e) => {
    e.preventDefault();

})

for (let list of lists) {
    list.addEventListener("dragstart", (e) => {
        draggingElement = e.target;
    })
}

rightBox.addEventListener("drop", (e) => {
    rightBox.append(draggingElement);
    message.classList.remove("message");
    message.classList.add("messageAlert");

    setTimeout(() => {
        message.classList.remove("messageAlert");
        message.classList.add("messageAlert1");

    }, 1000)
    setTimeout(() => {
        message.classList.remove("messageAlert1");
        message.classList.add("message");

    }, 2000)
})

leftBox.addEventListener("drop", (e) => {
    leftBox.append(draggingElement);
});

btn.addEventListener("click", () => {

    let rightLIst = rightBox.querySelectorAll(".list")
    rightLIst.forEach(item => {
        leftBox.append(item);
    })

})
