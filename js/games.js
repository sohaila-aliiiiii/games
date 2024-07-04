import {Ui} from "./ui.js";
let x=new Ui()


 export class game
{
    
   constructor(svg)
   {
    this.id1='mmorpg'
    this.svg=svg
   }

    async get()
{
  
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '4474c611f2mshf3ed76a518dc741p15b1acjsn10838b3870a7',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    try {
        this.svg.style.display = 'flex'; // Sho w loading indicator
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.id1}`,options);
        const result = await response.json();
        this.svg.style.display = 'none'; // Hide loading indicator

        if (response.status !== 200) {
            console.error('Failed to fetch games list');
            return;
        }
       
        x.displayy(result)
       
    } catch (error) {
        this.svg.style.display = 'none'; // Hide loading indicator in case of error

        console.error(error);
    }

} 
 


}
