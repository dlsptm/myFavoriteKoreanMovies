
const main = document.querySelector('main');
const itemPerPage = 12;
let currentPage = 1;

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

const displayMovies = async (movieList, page) => {
  const startIndex = (page - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const moviesToDisplay = movieList.slice(startIndex, endIndex);


  for (const movieInfo of moviesToDisplay) {
    const {title, year, } = movieInfo;
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
      article.addEventListener('click', () => {
        window.location.href = `./movie.html?id=${movieInfo.id}`;
      })
    } catch(error) {
      console.error(`Error retrieving movie "${movieTitle}": ${movie.Error}`);
    }
    
  }
};

const movieList = [
  {id: 1, title: 'A tale of two sisters', year: '2003' },
  {id: 2, title: 'Gonjiam', year: '2018', url: 'https://kissasian.lu/Drama/Gonjiam-Haunted-Asylum/Movie?id=37303' },
  {id: 3, title: 'Deranged', year: '2012' },
  {id: 4, title: 'The Wailing', year: '2016'},
  {id: 5, title: 'lady vengeance', year: '2005'},
  {id: 6, title: 'The Call', year: '2020'},
  {id: 7, title: 'A hard day', year: '2014'},
  {id: 8, title: 'The Good the Bad the Weird', year: '2008'},
  {id: 9, title: 'Bittersweet life', year: '2005'},
  {id: 10, title: 'Confession of murder', year: '2012'},
  {id: 11, title: 'Nameless Gangster: Rules of the Time', year: '2012'},
  {id: 12, title: 'Mother', year: '2009'},
  {id: 13, title: 'The man from nowhere', year: '2010'},
  {id: 14, title: 'Memories of Murder', year: '2003'},
  {id: 15, title: 'The Negotiation', year: '2018'},
  {id: 16, title: 'Unstoppable', year: '2018'},
  {id: 17, title: 'Door lock', year: '2018'},
  {id: 18, title: 'The thieves', year: '2012'},
  {id: 19, title: 'Midnight runners', year: '2017'},
  {id: 20, title: 'Exit', year: '2019'},
  {id: 21, title: 'Inside men', year: '2015'},
  {id: 22, title: 'The terror live', year: '2013'},
  {id: 23, title: 'New world', year: '2013'},
  {id: 24, title: 'Parasite', year: '2019'},
  {id: 25, title: 'Friend', year: '2001'},
  {id: 26, title: 'The unjust', year: '2010'},
  {id: 27, title: 'The Gangster, the Cop, the Devil', year: '2019'},
  {id: 28, title: 'ashfall', year: '2019'},
  {id: 29, title: 'Believer', year: '2018'},
  {id: 30, title: 'Believer 2', year: '2023'},
  {id: 31, title: 'The childe', year: '2023'},
  {id: 32, title: 'Emergency declaration', year: '2021'},
  {id: 33, title: 'Unlocked', year: '2023'},
  {id: 34, title: 'Ballerina', year: '2023'},
  {id: 35, title: 'Kill Boksoon', year: '2023'},
  {id: 36, title: 'the killer', year: '2022'},
  {id: 38, title: 'Along With the Gods: The Two Worlds', year: '2017'},
  {id: 39, title: 'Along With the Gods: The Last 49 Days', year: '2018'},
  {id: 40, title: 'The Age of Shadows', year: '2016'},
  {id: 41, title: 'Yellow sea', year: '2010'},
  {id: 42, title: 'Asura', year: '2016'},
  {id: 43, title: 'Take point', year: '2018'},
  {id: 44, title: 'Midnight', year: '2021'},
  {id: 45, title: 'My sassy girl', year: '2001'},
  {id: 46, title: 'miracle in cell no.7', year: '2013'},
  {id: 47, title: 'the dude in me', year: '2019'},
  {id: 48, title: 'Bareuge salja', year: '2007'},
  {id: 49, title: 'Whatcha Wearin', year: '2012'},
  {id: 50, title: 'ode to my father', year: '2014'},
  {id: 51, title: 'Joint Security Area', year: '2000'},
  {id: 52, title: 'Assassination', year: '2015'},
  {id: 53, title: 'fighter in the wind', year: '2004'},
  {id: 54, title: 'Tae Guk Gi: The Brotherhood of War', year: '2004'},
  {id: 55, title: 'A taxi driver', year: '2017'},
  {id: 56, title: '1987: When the Day Comes', year: '2017'},
  {id: 57, title: 'Masquerade', year: '2012'},
  {id: 58, title: 'The man standing next', year: '2020'},
  {id: 59, title: 'The king and the clown', year: '2005'},
  {id: 60, title: 'The throne', year: '2015'},
  {id: 61, title: 'Silenced', year: '2011'},
  {id: 62, title: 'Itaewon salinsageon', year: '2009'},
  {id: 63, title: 'The Juror', year: '2019'},
  {id: 64, title: 'Veteran', year: '2015'},
  {id: 65, title: 'The chaser', year: '2008'},
  {id: 66, title: 'Dark figure of crime', year: '2018'},
  {id: 67, title: 'The attorney', year: '2013'},
  {id: 68, title: 'Scandal Makers', year: '2008'},
  {id: 69, title: 'Okay Madam', year: '2020'},
  {id: 70, title: 'Sleep', year: '2023'},
  {id: 71, title: 'Take point', year: '2018'},
  {id: 72, title: 'A Violent Prosecutor', year: '2016'},
  {id: 73, title: 'Train to Busan', year: '2016'},
  {id: 74, title: 'Forgotten', year: '2017'},
  {id: 75, title: 'Oldboy', year: '2003'},
  {id: 76, title: 'Hwayi: A Monster Boy', year: '2013'},
  {id: 77, title: 'Monster', year: '2014'},
  {id: 78, title: 'The Host', year: '2006'},
  {id: 79, title: 'Target', year: '2023'},
  {id: 80, title: 'Concrete Utopia', year: '2023'},
  {id: 81, title: 'Death Bell', year: '2008'},
  {id: 82, title: 'Don\'t cry mommy', year: '2012'},
  {id: 83, title: 'Missing Woman', year: '2016'},
  {id: 84, title: 'The Outlaws', year: '2017'},
  {id: 85, title: 'The Neighbors', year: '2012'},
  {id: 86, title: 'Heart Blackened', year: '2017'},
  {id: 87, title: 'Hostage: Missing Celebrity', year: '2021'},
  {id: 88, title: 'I Can Speak', year: '2017'},
  {id: 89, title: 'Intimate Strangers', year: '2018'},
  {id: 90, title: 'Love and Leashes', year: '2022'},
  {id: 91, title: 'The Face Reader ', year: '2013'},
  {id: 92, title: 'The Vanished', year: '2018'},
  {id: 93, title: 'The Client', year: '2011'},
];


localStorage.setItem('movieList', JSON.stringify(movieList));
const totalPages = Math.ceil(movieList.length / itemPerPage);



const handlePaginationClick = (pageNumber) => {
  main.innerHTML = ''; // Clear previous movies
  currentPage = pageNumber;
  displayMovies(movieList, currentPage);
};

const renderPagination = () => {
  const paginationElement = document.querySelector('.pagination-container');
  paginationElement.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.classList.add('page-button');

    if (i === 1) {
      pageButton.classList.add('current-page');
    }

    pageButton.addEventListener('click', (event) => {
      const allPageButtons = document.querySelectorAll('.page-button');

      // Retirer la classe 'current-page' de tous les boutons
      allPageButtons.forEach(button => {
        button.classList.remove('current-page');
      });

      // Ajouter la classe 'current-page' au bouton cliqué
      event.target.classList.add('current-page');

      // Afficher les films de la page correspondante
      main.innerHTML = '';
      currentPage = i;
      displayMovies(movieList, currentPage);
    });

    paginationElement.appendChild(pageButton);
  }
};



displayMovies(movieList, currentPage);
renderPagination();
