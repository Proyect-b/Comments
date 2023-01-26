let inputComment = document.getElementById("comment").value
let button = document.getElementById("send")

button.addEventListener("click", event => {
    if(document.getElementById("comment").value === ""){
        console.log("error")
    } else {
        let newComment = document.createElement("div");
        let textContComment = document.createElement("span");
        textContComment.textContent = document.getElementById("comment").value;
        document.body.appendChild(newComment);
        textContComment.classList.add("commentNew")
        newComment.appendChild(textContComment);
    }
})
