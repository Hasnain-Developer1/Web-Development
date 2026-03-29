function createcard(title, cName, views, monthsold, duration, thumbnail) {
    // finsih this function
    let viewStr;
    if (views >= 1000000) {
        viewStr = views / 1000000 + "M";

    }
    else if(views >= 1000)  {
        viewStr = views / 1000 + "K";
    }
    else {
        viewStr = views;
    }
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="">
                    <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsold} months ago</p>
            </div>
        </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html

}

createcard("Introduction to BackEnd | Sigma Web Dev Video #2", "Hasnian Malik", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w")