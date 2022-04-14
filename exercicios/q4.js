function clic(){
    var num = parseInt(prompt("Digite o numúmero aqui: "));
   document.querySelector("p").innerHTML="O antecessor de " + num + " é " + (num -1) + " e o seu sucessor é " + (num +1);
}