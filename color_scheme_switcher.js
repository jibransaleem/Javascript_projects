const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const head =  document.querySelector("h1")
const foot = document.querySelector("h2")
const refresh_button = document.querySelector("#reset")
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e)
        switch(e.target.id){
            case "red":
            body.style.backgroundColor = e.target.id;
            head.style.color = "green";
            foot.style.color = "green";
            refresh_button.style.backgroundColor = "green"
            refresh_button.style.color = "white"
            break;
        }
        switch(e.target.id){
            case "green":
            body.style.backgroundColor = e.target.id
            head.style.color = "rgb(119, 119, 199)";
            foot.style.color = "rgb(119, 119, 199)";
            refresh_button.style.backgroundColor = "rgb(119, 119, 199)"
            break;
        }
        switch(e.target.id){
            case "blue":
            body.style.backgroundColor = e.target.id
            head.style.color = "pink";
            foot.style.color = "pink";
            refresh_button.style.backgroundColor = "pink"
            break;
        }
        switch(e.target.id){
            case "pink":
            body.style.backgroundColor = e.target.id
            head.style.color = "red";
            foot.style.color = "red";
            refresh_button.style.backgroundColor = "red"
            break;
        }
        ;})
    })
function refresh(){
    window.location.reload()
}
