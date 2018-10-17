botaoAbrir = document.getElementsByClassName('botaoMenu')[0]
menu = document.getElementsByClassName('menuAberto')[0]
botaoFechar = document.getElementsByClassName('botaoFechar')[0]
botaoAbrir.addEventListener('click',event=>{
    $('.menuAberto').animate({'margin-right': '0'},500)
    $('#menuSuperior').animate({right: '100px'},500)
})
botaoFechar.addEventListener('click',event=>{
    $('.menuAberto').animate({'margin-right': '-200'},500)
    $('#menuSuperior').animate({right: '0px'},500)
})

