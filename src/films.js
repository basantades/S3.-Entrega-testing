// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);

  // console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director === director);

  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = array.filter((movie) => movie.director === director);

  let sumaNotas = moviesFromDirector.reduce((acumulador, movie) => acumulador + movie.score, 0);

  let result = sumaNotas / moviesFromDirector.length;
  result = parseFloat(result.toFixed(2));

  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let titulos = array.map((movie) => movie.title);

  // let titulosOrdenados = titulos.sort();

let titulosOrdenados = titulos.sort((a, b) => {
  // Ordenar correctamente por los números al principio de las cadenas
  const numA = parseInt(a.match(/^\d+/)); // Extrae el número al inicio de 'a'
  const numB = parseInt(b.match(/^\d+/)); // Extrae el número al inicio de 'b'

  // Si hay números, compáralos; si no, ordena como cadenas normales
  if (numA && numB) {
    return numA - numB; // Orden numérico ascendente
  } else {
    return a.localeCompare(b); // Orden alfabético como fallback
  }
  }); 

  if (titulosOrdenados.length > 20) {
    titulosOrdenados = titulosOrdenados.slice(0, 20);
  }

  return titulosOrdenados;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let ordenAny = array.slice().sort((a, b) => a.year - b.year);

  ordenFinal = ordenAny.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
  });

  return ordenFinal;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let filtroCategory = array.filter((movie) => movie.genre.includes(category));

  let result = filtroCategory.reduce((acumulador, movie) => acumulador + movie.score, 0)/filtroCategory.length;
  result = parseFloat(result.toFixed(2));

  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  let newArray = array.map(item => ({ ...item })); // Clonar el array

  newArray.forEach((movie) => {
    let duracion = movie.duration;
    let horas = duracion.match(/(\d+)h/);
    (horas === null) ? horas = 0 : horas = parseInt(horas[1]); // si el .match funciona saca un array del cual nos interesa el valor en index 1, si no encuentra sale null y le ponemos 0
    let min = duracion.match(/(\d+)min/);
    (min === null) ? min = 0 : min = parseInt(min[1]);
    duracion = horas * 60 + min;

    movie.duration = duracion;

  });

  return newArray;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, any) {
  let moviesYear = array.filter((movie) => movie.year === any);
  moviesYear = moviesYear.sort((a, b) => b.score - a.score);

  // return moviesYear.slice(0, 1);

  // mejora para comtemplar si hay empate en la mejor puntuacion (y añadido test propio para comprobarlo):
  let bestScore = moviesYear[0].score;
  let bestMovieYear = moviesYear.filter((movie) => movie.score === bestScore);
  return bestMovieYear;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
