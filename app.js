document.addEventListener('DOMContentLoaded', () => {
const getMovie = async (title, year) => {
  const key = '95a533bd';
  try {
    const response = await fetch(`https://www.omdbapi.com/?t=${title}&y=${year}&type=movie&apikey=${key}`);

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return { Response: 'False', Error: 'Movie not found!' };
    }
  } catch (error) {
    console.log(error);
    return { Response: 'False', Error: 'Something went wrong!' };
  }
};

const displayMovies = async (movieList) => {
  const main = document.querySelector('main');


  for (const movieInfo of movieList) {
    const {title, year} = movieInfo;
    const movie = await getMovie(title, year);
    try {
      const article = document.createElement('article');
      article.innerHTML = `
      <figure>
        <img src='${movie.Poster}' alt='${movie.Title}' />
        <div class='header'>
        <h2>${movie.Title}</h2>
        <figcaption>${movie.Year}</figcaption></div>
        <figcaption><span>Main Actors</span> : ${movie.Actors}</figcaption>
        <figcaption><span>Director</span> : ${movie.Director}</figcaption>
        <figcaption><span>Genre</span> : ${movie.Genre}</figcaption>
        <figcaption>${movie.Plot}</figcaption>
      </figure>
      `;
      main.appendChild(article);
    } catch(error) {
      console.error(`Error retrieving movie "${movieTitle}": ${movie.Error}`);
    }
  }
};

const movieList = [
  { title: 'A tale of two sisters', year: '2003' },
  { title: 'Gonjiam', year: '2018' },
  { title: 'Deranged', year: '2012' },
  {title: 'The Wailing', year: '2016'},
  {title: 'lady vengeance', year: '2005'},
  {title: 'The Call', year: '2020'},
  {title: 'A hard day', year: '2014'},
  {title: 'The Good the Bad the Weird', year: '2008'},
  {title: 'Bittersweet life', year: '2005'},
  {title: 'Confession of murder', year: '2012'},
  {title: 'Nameless Gangster: Rules of the Time', year: '2012'},
  {title: 'Mother', year: '2009'},
  {title: 'The man from nowhere', year: '2010'},
  {title: 'Memories of Murder', year: '2003'},
  {title: 'The Negotiation', year: '2018'},
  {title: 'Unstoppable', year: '2018'},
  {title: 'Door lock', year: '2018'},
  {title: 'The thieves', year: '2012'},
  {title: 'Midnight runners', year: '2017'},
  {title: 'Exit', year: '2019'},
  {title: 'Inside men', year: '2015'},
  {title: 'The terror live', year: '2013'},
  {title: 'New world', year: '2013'},
  {title: 'Parasite', year: '2019'},
  {title: 'Friend', year: '2001'},
  {title: 'The unjust', year: '2010'},
  {title: 'The Gangster, the Cop, the Devil', year: '2019'},
  {title: 'ashfall', year: '2019'},
  {title: 'Believer', year: '2018'},
  {title: 'Believer 2', year: '2023'},
  {title: 'The childe', year: '2023'},
  {title: 'Emergency declaration', year: '2021'},
  {title: 'Unlocked', year: '2023'},
  {title: 'Ballerina', year: '2023'},
  {title: 'Kill Boksoon', year: '2023'},
  {title: 'the killer', year: '2022'},
  {title: 'the call', year: '2020'},
  {title: 'Along With the Gods: The Two Worlds', year: '2017'},
  {title: 'Along With the Gods: The Last 49 Days', year: '2018'},
  {title: 'Yellow sea', year: '2010'},
  {title: 'Asura', year: '2016'},
  {title: 'Take point', year: '2018'},
  {title: 'Midnight', year: '2021'},
  {title: 'My sassy girl', year: '2001'},
  {title: 'miracle in cell no.7', year: '2013'},
  {title: 'the dude in me', year: '2019'},
  {title: 'Bareuge salja', year: '2007'},
  {title: 'Whatcha Wearin', year: '2012'},
  {title: 'The Age of Shadows', year: '2016'},
  {title: 'ode to my father', year: '2014'},
  {title: 'Joint Security Area', year: '2000'},
  {title: 'Assassination', year: '2015'},
  {title: 'fighter in the wind', year: '2004'},
  {title: 'Tae Guk Gi: The Brotherhood of War', year: '2004'},
  {title: 'A taxi driver', year: '2017'},
  {title: '1987: When the Day Comes', year: '2017'},
  {title: 'Masquerade', year: '2012'},
  {title: 'The man standing next', year: '2020'},
  {title: 'The king and the clown', year: '2005'},
  {title: 'The throne', year: '2015'},
  {title: 'Silenced', year: '2011'},
  {title: 'Itaewon salinsageon', year: '2009'},
  {title: 'The Juror', year: '2019'},
  {title: 'Veteran', year: '2015'},
  {title: 'The chaser', year: '2008'},
  {title: 'Dark figure of crime', year: '2018'},
  {title: 'The attorney', year: '2013'},
  {title: 'Scandal Makers', year: '2008'},
];
displayMovies(movieList);
});