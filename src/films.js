// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);

  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director === director);

  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = array.filter((movie) => movie.director === director);
  console.log("EXERCICE 3 ->", moviesFromDirector);

  let sumaNotas = moviesFromDirector.reduce((acumulador, movie) => acumulador + movie.score, 0);
  console.log("EXERCICE 3 ->", sumaNotas);

  
  let result = sumaNotas / moviesFromDirector.length;

  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let titulos = array.map((movie) => movie.title);

  console.log("EXERCICE 4 ->", titulos);

  // let titulosOrdenados = titulos.sort();

  // console.log("EXERCICE 4 ->", titulosOrdenados);

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
});  console.log("EXERCICE 4 ->", titulosOrdenados);

  if (titulosOrdenados.length > 20) {
    return titulosOrdenados.slice(0, 20);
  }

  return titulosOrdenados;
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
