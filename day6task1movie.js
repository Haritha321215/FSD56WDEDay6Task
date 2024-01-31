class Movie{
    constructor(title, studio, rating = "PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    static getPG(movies){//We can't call the function from the class name unless the function is static.
        let newarr=[];
        for (const iterator of movies) {            
            if(iterator.rating=="PG"){
                newarr.push(iterator)
            }
        }
        return newarr;
    }
    toString(){
        return ` Title: ${this.title} , Studio: ${this.studio} , Rating: ${this.rating}\n`;
    }
}
const movie1= new Movie("Casino Royale","Eon Productions","PG13");
const moviesarr = [ new Movie("movie2","Productions2"),
                    new Movie("movie3","Productions3","R"),
                    new Movie("movie4","Productions4","PG")];
console.log(movie1.toString());
console.log(`The movies Rating of "PG" are: \n ${Movie.getPG(moviesarr)}`);


// output
// Title: Casino Royale , Studio: Eon Productions , Rating: PG13

// The movies Rating of "PG" are: 
//   Title: movie2 , Studio: Productions2 , Rating: PG
// , Title: movie4 , Studio: Productions4 , Rating: PG