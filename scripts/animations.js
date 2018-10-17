function animateHeader(){
    let titulo = $('.tituloHeader')
    let vantagem1 = $('.paragrafoHeader:nth-of-type(1)')
    let vantagem2 = $('.paragrafoHeader:nth-of-type(2)')
    let vantagem3 = $('.paragrafoHeader:nth-of-type(3)')
    
   

/*Animando conteúdo do Header*/
$(titulo).css({display: "block"})
$(titulo).css({"font-size": "0px"})
$(titulo).fadeIn(2000,() => {
    $(titulo).animate({"font-size":"50px"},2500)
    vantagem1.fadeIn(1000,()=>{
        $(vantagem2).fadeIn(1000,()=>{
            vantagem3.fadeIn(1000)
        })
    })
})
}

function menuControl(){
 /*Controlando menu de navegação*/
 $('body').scroll(function(){
     
    let menuNavegacao = $('#menuSuperior')
    let distanceTop = $('body').scrollTop()
   
 })
 
}