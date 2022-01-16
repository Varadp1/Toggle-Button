function togglebtn(){
    var btn = document.getElementsByClassName("btn")[0];
    var innercontainer = document.getElementsByClassName("btncontainer")[0];
    var para = document.getElementsByTagName("p")[0];
    // var btncontainer = document.getElementsByClassName("btncontainer")[0];
    if (btn.classList[1]=="selected"){
        btn.classList.remove("selected");
        innercontainer.style.backgroundColor = "red";
        para.style.color = "grey"
        para.innerHTML = "Off";
    }else{
        btn.classList.add("selected")
        innercontainer.style.backgroundColor = "#0ab20a";
        para.style.color = "#0ab20a"
        para.innerHTML = "On";
    }
}