
function slidshow()
{ 
    
    const arr=["https://www.eastcoastdaily.in/wp-content/uploads/2021/05/3-2.jpg","https://news.otakukart.com/wp-content/uploads/2020/03/movies.jpg","https://news.otakukart.com/wp-content/uploads/2020/03/movies.jpg","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-1614634680.jpg","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/summer-movies-1587392939.jpg" ]
  let div=document.createElement("div")
  
  
  let img=document.createElement("img")
  
  let i = 0;
  img.src = arr[0];
  
  div.append(img);
  
  document.body.append(div);           // to access any element use document
  
  div.setAttribute("id", "slideshow");
  
  setInterval(function () {
    if (i >= arr.length)
        i = 0;
    img.src = arr[i];
    i++;
   
   },2000)

  
}
   
slidshow();

const movies = [
    
  {
      name: "Looper",
      IMDb_Rating: "7.4" ,
      releaseDate:"12 October 2012",
      img:"https://pavbca.com/walldb/original/7/d/8/721221.jpg"
  },
  {
      name: "Interstellar",
      IMDb_Rating: "8.6" ,
      releaseDate:"7 November 2014 ",
      img:"https://i.ytimg.com/vi/YF1eYbfbH5k/maxresdefault.jpg"
  },
  {
      name: "Fantastic Four",
      IMDb_Rating: "5.7" ,
      releaseDate:"July 8, 2005",
      img:"https://cdn.britannica.com/38/182838-050-F71E4278/image-Fantastic-Four.jpg"
  },
  {
      name: "Avengers: Infinity War",
      IMDb_Rating: "8.4" ,
      releaseDate:"27 April 2018 ",
      img:"https://wallpaperbat.com/img/236791-hd-movie-wallpaper-top-free-hd-movie-background.jpg"
  },
 
  {
      name: "The Dark Knight Rises",
      IMDb_Rating: "8.4" ,
      releaseDate:" 20 July 2012",
      img:"https://wallpaperbat.com/img/398625-movie-hd-wallpaper-and-background-image.jpg"
  },
  {
      name: "Alita: Battle Angel",
      IMDb_Rating: "7.3" ,
      releaseDate:" 8 February 2019",
      img:"https://1.bp.blogspot.com/-Gcf0tNXdbpc/XTgG9Vi1gGI/AAAAAAAAS3U/_gNEKdS_mrktYw_almNKBc8pOkRT4IejgCLcBGAs/s1600/alita.jpg"
  },
  {
      name: "Venom",
      IMDb_Rating: "6.7" ,
      releaseDate:"5 October 2018",
      img:"https://wallpaperbat.com/img/279403-venom-hd-wallpaper-and-background-image.jpg"
  },
  {
      name: "Iron Man",
      IMDb_Rating: "7.9" ,
      releaseDate:"1 May 2008 ",
      img:"https://wallpapercave.com/wp/biJl8uL.jpg"
  },
  {
      name: "The Pursuit of Happyness",
      IMDb_Rating: "8" ,
      releaseDate:"November 2006  ",
      img:"https://miro.medium.com/max/548/1*Y8vXN1mJeEHyXWJtFICjiQ.jpeg"
  },
  
]


if(localStorage.getItem("movies")==null)
{
  localStorage.setItem("movies", JSON.stringify(movies));
}
console.log(movies);


let movies_div = document.createElement("div")
movies_div.setAttribute("id", "movies_div")

function showMovies(d) {
 
  let movies  = d; 
  
    movies_div.innerHTML=null;
  
  movies.forEach(function (el) 
 { 
    let div = document.createElement("div")

    let p_name = document.createElement("p")
    p_name.innerHTML = el.name;
    
    let p_date = document.createElement("p")
    p_date.innerHTML = el.releaseDate;
      
    let  p_ratingImdb= document.createElement("p")
    p_ratingImdb.innerHTML = el.IMDb_Rating;

    let img = document.createElement("img")
    img.src = el.img;
      
    div.append(img, p_name, p_date, p_ratingImdb)
      
    movies_div.append(div);
      
     document.body.append(movies_div);
     
  })
}

 
showMovies(JSON.parse(localStorage.getItem("movies")));   
    

function sortLH() {
   
    
    let movies = JSON.parse(localStorage.getItem("movies")).sort(function (a, b)
    {
        return a.IMDb_Rating-b.IMDb_Rating
    })
    console.log('movies:', movies)
     

    showMovies(movies)
     
}

function sortHL() {
    
  
    let movies = JSON.parse(localStorage.getItem("movies")).sort(function (a, b)
    {
        return b.IMDb_Rating-a.IMDb_Rating
    })
    
     showMovies(movies)

}