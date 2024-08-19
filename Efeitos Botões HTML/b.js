
document.getElementsByClassName("botao")[0].addEventListener('click', function () {
    if(this.classList.contains("activo")){
        this.classList.remove("activo");
    }else{
        this.classList.add("activo");
    }
});