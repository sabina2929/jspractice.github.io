var btn=document.getElementById("popup_btn") //Обращаемся к элементу(к кнопке ) через id 
var popup=document.getElementById("popup_sign")//Обращаемся к элементу(к модальному окну ) через id 
var span=document.getElementById("close")//Обращаемся к элементу(к Х ) через id 
btn.onclick=function(){
    popup.style.display="block" /// Мы здесь при нажатий на кнопку меняем display:none к display:block, т.е. делаем невидимое видимым
}
span.onclick = function(){
    popup.style.display="none"/// Мы здесь при нажатий на Х меняем display:block к display:none, т.е. делаем  видимое невидимым 
}