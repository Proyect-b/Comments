function Comment(content){
    this.content = content;
    this.class = "commentNew";
    this.src = "black.jpg"
};

let inputComment = document.getElementById("comment").value;
let button = document.getElementById("send");
let commentContent = document.getElementById("contentComments") 
button.addEventListener("click", event => {
    if(document.getElementById("comment").value === ""){
        console.log("error NaN");
    } else {
        var comment = new Comment(document.getElementById("comment").value);
        var icon = new Image()
        icon.src = "icon.jpg";
        icon.classList.add("icon");
        var p = document.createElement("span");
        var name = document.createElement("span");
        var div = document.createElement("div");
        var divTwoTop = document.createElement("div");
        divTwoTop.classList.add("topComment")
        commentContent.appendChild(divTwoTop)
        commentContent.appendChild(div)
        divTwoTop.appendChild(icon)
        divTwoTop.appendChild(name)
        div.appendChild(p)
        name.innerHTML = "Humer";
        p.innerHTML = comment.content;
        p.classList.add(comment.class)
        name.classList.add("name")
        console.log(p)
        document.getElementById("comment").value = "";
    }
});