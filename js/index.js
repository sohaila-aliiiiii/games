import {Ui} from "./ui.js";
import {Detalies} from "./detalies.js";
import {game} from "./games.js";
let x=new Ui()
var close=document.querySelector('#close')
var layer=document.querySelector('.layer')
var home= document.querySelector('.home')
var svg=document.querySelector('.svg')
var links=document.querySelectorAll('.nav-item a')





$('.nav-item a').on('click',function(e){
   let x=e.target
   $('.nav-item a').removeClass('active')
   $(x).addClass('active')
})
close.addEventListener('click',function(){
    layer.classList.add('d-none')
})
home.addEventListener('click', async function(e){
    layer.classList.remove('d-none')
    var id=e.target.getAttribute('id')
    let d=new Detalies(svg,id)
    d.getdetalis()
})

let g=new game(svg)
$('.nav-item a').on('click',function(e){
    g.id1=$(e.target).attr('id');
 g.get()

})
g.get()

   
