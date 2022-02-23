document.getElementById("lıstemevsımler").addEventListener("change",yer)
let sonuc=document.getElementById("sonucBaslık")
function yer(){
sonuc.classList.remove("ilkb","yaz","sonb","kış","normal")
let mevsım=document.getElementById("lıstemevsımler").selectedIndex
if(mevsım==1){
    document.body.style.backgroundColor="yellow"
    sonuc.innerHTML="mevsimler aşık olacaksa o ilkbahar olmalıdır"
    sonuc.classList.add("ilkb")
    document.getElementById("logo").setAttribute("src","ilkbahar.jpg")
}
else if(mevsım==2){
    document.body.style.backgroundColor="orange" 
    sonuc.innerHTML="yazın tadı çıkar güneşle,buzla tatlilin tadı çıkar karpuzla"  
    sonuc.classList.add("yaz") 
    document.getElementById("logo").setAttribute("src","yaz.jpg")
}
else if(mevsım==3){
    document.body.style.backgroundColor="grey"
    sonuc.innerHTML="aslında yaprak sıkılmıştı ağaçtan bahaneydi sonbahar" 
    sonuc.classList.add("sonb") 
    document.getElementById("logo").setAttribute("src","sonbahar.jpg") 
}
else if(mevsım==4){
    document.body.style.backgroundColor="white " 
    sonuc.innerHTML="kış beyazı davet eder"
    sonuc.classList.add("kış")
    document.getElementById("logo").setAttribute("src","kış.jpg") 
}
}