var movies = document.getElementById("movie");
var series = document.getElementById("serie");
if (movies || series) {
  movies.addEventListener("click", function () {
    movies.classList.add("active");
    series.classList.remove("active");
  });
  series.addEventListener("click", function () {
    series.classList.add("active");
    movies.classList.remove("active");
  });
}
