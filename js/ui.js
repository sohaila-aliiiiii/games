export class Ui{

     displayy(list)
    {
        var contanir=``;
        for(var i=0; i<list.length;i++)
            {
                contanir+=`    <div class="col-md-3  border-color mt-2 hov px-2 mb-2" id="${list[i].id}">
              <div class="cardd p-2 text-center" id="${list[i].id}">
                 <img src='${list[i].thumbnail}' class="w-100" id="${list[i].id}">
                 <div class="d-flex justify-content-between mt-3 " id="${list[i].id}">
                  <h3 class="fs-6" id="${list[i].id}">'${list[i].title}'</h3>
                  <button class="bg-span px-2 fs-6 text-white" id="${list[i].id}">free</button>
                 </div>
                 <p class="p-style opacity-50  "id="${list[i].id}">
                  '${list[i].short_description}'
               </p>
               <div class="d-flex justify-content-between foot border-top border-black p-1" id="${list[i].id}" >
                <span id=${list[i].id}>'${list[i].genre}'</span>
                <span id=${list[i].id}>'${list[i].platform}'</span>
                
               </div>
    
              </div>
            </div>`
    
            
            document.querySelector('.home').innerHTML=contanir
    }
    }
     
    displaydata(result)
    {

      let contanir=` <div class="col-md-4 p-2 ">
      <img src='${result.thumbnail}'>
   </div>
   <div class="col-md-8 px-5">
      <h3 class="py-3">Title: ${result.title}</h3>
      <h5 class="py-1">Category:<span class="px-1 ms-1">${result.genre}</span> </h5>
      <h5 class="py-1">Platform:<span class="px-1 ms-1">${result.Windows}</span> </h5>
      <h5 class="py-1">Status: <span class="px-1 ms-1">${result.status}</span></h5>
      <p class="">${result.description}</p>
      <a href='${result.game_url}'><button>Show Game</button></a>
   </div>`

    document.getElementById('Details').innerHTML=contanir

    }







}