const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id')


const [{title,year}] = movieList.filter(movie => movie.id === +id )
const movie = getMovie(title,year)
movie.then(res => {
  displayMovie(res)
})

const displayMovie = async (movie) => {
  const {Title, Poster, Year, Actors, Director, Genre, Plot, Runtime, Awards, imdbRating } = movie


    const movieContainer = document.querySelector('.movie-container');
      movieContainer.innerHTML = `
        <figure>
          <img src="${Poster}" alt="${Title}">
          <div class="product-info">
            <h2>${Title}</h2>
            <figcaption><span>Year</span>: ${Year}</figcaption>
            <figcaption><span>Main Actors</span>: ${Actors}</figcaption>
            <figcaption><span>Director</span>: ${Director}</figcaption>
            <figcaption><span>Genre</span>: ${Genre}</figcaption>
            <figcaption><span>Duration</span>: ${Runtime}</figcaption>
            <figcaption><span>Awards</span>: ${Awards}</figcaption>
            <figcaption><span>Rating</span>: ${imdbRating}</figcaption>
            <figcaption>${Plot}</figcaption>
            </div>
        </figure>`;
} 