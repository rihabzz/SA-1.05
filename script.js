//faire charger le DOM//
document.addEventListener("DOMContentLoaded",function(){
    console.log(donnees)
    


    donnees.forEach(function afficheNote(item){
        //on récupère les éléments de notre  tableau data//
        var contenu = document.querySelector("#div-contenu");
        contenu.innerHTML = contenu.innerHTML + 
        "<section class='"+item.section+"' id='"+item.idsection+"'>"+
        "<h1>Si j'étais "+item.analogie +" je serais... </h1>"+
        "<h2> "+item.valeurAnalogie+" </h2>"+
        "<img src='"+item.image+"' alt='"+item.valeurAnalogie+"'></img>"+
        "<p class='justification'> "+item.explication+"</p>"+
        "<a href='#"+item.idsectionsuivante+"' >"+
        "<img src='./images/flechebas.png' alt='bas'>"+
        "</a>"+
        "</section>"
    });
  
    //on sélectionne la classe contenuML//
var fenetre=document.querySelector('.contenuML') 
var btnMentions=document.querySelector('h6') 
//Pour qu'elle s'ouvre quand on clique sur la croix//
btnMentions.addEventListener('click',function(afficher){
    fenetre.style.display='block' })

//on sélectionne la classe fermer dans la div que j'ai créé//
    var fermer= document.querySelector('.fermer')
    fermer.addEventListener('click', function(cacher){
        fenetre.style.display='none'
        
    } ) 



//éléments que l'utilisateur rempli dans le formulaire//
    var clavierAnalogie = document.querySelector('#analogie')
    var clavierValeurAnalogie= document.querySelector('#valeurAnalogie')
    var clavierImage= document.querySelector('#image')
    var clavierExplication= document.querySelector('#explication')
    var claviercourriel=document.querySelector('#courriel')



    document.querySelector('#envoyé').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('.ajouter').innerHTML += //nouvelle section pour le formulaire (classe créé dans le html)//
        "<section>"+
        "<h1>Si j'étais "+clavierAnalogie.value +" je serais... </h1>"+
        "<h2> "+clavierValeurAnalogie.value+" </h2>"+
        "<img src='"+clavierImage.value+"' ></img>"+
        "<p class='justification'> " +clavierExplication.value+" </p>"+
        "</section>";
    
    
        fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=rihab&courriel=" + document.querySelector("#courriel").value + "&message=Si j'étais " + document.querySelector("#analogie").value + ", je serais " + document.querySelector("#valeurAnalogie ").value + document.querySelector("#explication").value );


    })



})



