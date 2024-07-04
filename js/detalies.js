import {Ui} from "./ui.js";
let x=new Ui()

export class Detalies
{
    constructor(svg,id)
    {
        this.svg=svg
        this.id=id
    }
    async  getdetalis()
    {
            const options = {
         	method: 'GET',
	        headers: {
		            'x-rapidapi-key': '4474c611f2mshf3ed76a518dc741p15b1acjsn10838b3870a7',
		            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	                 }
                           };

            try {
                this.svg.style.display = 'flex'; // Show loading indicator

	        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`, options);
	        const result = await response.json();
            this.svg.style.display = 'none'; // Hide loading indicator

                if (response.status !== 200) {
                    console.error('Failed to fetch game details');
                    return;
                }

                x.displaydata(result)
           
                 } 
                 catch (error)
                  {
                    this.svg.style.display = 'none'; // Hide loading indicator in case of error

	               console.error(error);
                 }
               
  

    }
}