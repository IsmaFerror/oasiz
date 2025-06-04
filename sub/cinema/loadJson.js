const moviesPerRow = 3;

async function loadData() {
  const response = await fetch("./data.json");
  return response.json();
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const cartelera = document.getElementById("cartelera");
    const data = await loadData();

    data.movies.forEach(function callback(movie, index) {
      if(index%moviesPerRow == 0) { cartelera.append(createRow(index)); }
      const currentRow = document.getElementById("row"+Math.floor(index/moviesPerRow))
      currentRow.append(createCol(index, movie))
    });
  } catch (e) { console.log(e); }
});

function createRow(index) {
  console.log("+ creating row"+Math.floor(index/moviesPerRow));
  let row = document.createElement("div");
  row.classList.add("row", "gap-3", "mb-3");
  row.id = "row"+Math.floor(index/moviesPerRow);
  return row;
}

function createCol(index, movie) {
  console.log("> adding to row"+Math.floor(index/moviesPerRow))
  let col = document.createElement("div");
  col.classList.add("col", "d-flex", "flex-column", "gap-1", "justify-content-center", "align-items-center", "text-center");
  col.style.backgroundColor = "#e6e6e6";
  col.style.borderRadius = "5px";
  populateCol(index, col, movie);
  return col;
}

function populateCol(index, col, movie) {
  let tittle = document.createElement("div");
  tittle.append(movie.tittle);
  tittle.style.marginTop = "1vh";
  col.append(tittle);

  let img = document.createElement("img");
  img.src = movie.img;
  img.style.width = "100%";
  img.style.height = "100%";
  col.append(img);

  let tags = document.createElement("div");
  tags.append(movie.tag);
  col.append(tags);

  let duration = document.createElement("div");
  duration.append("Duration: "+movie.duration);
  col.append(duration);

  let buy = document.createElement("button");
  buy.append("Comprar entradas");
  buy.onclick = function(){ location.href = movie.url; };
  buy.classList.add("btn", "btn-primary");
  buy.style.marginBottom = "1vh";
  col.append(buy);

  return col;
}