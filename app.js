let characterList = document.getElementById("characterList");
const URL = `https://hp-api.herokuapp.com/api/characters`;
let datas = [];

let searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", (e) => {
  console.log(e.target.value);

  const searchString = e.target.value.toLowerCase();
   console.log(datas)
  const filterData = datas.filter((character) => {
    return  character.name.toLowerCase().includes(searchString) || character.house.toLowerCase().includes(searchString);
  });

  console.log(filterData);

  display(filterData)
});

const getData = async () => {
  try {
    const res = await fetch(URL);
    result = await res.json();
    datas = result.splice(0, 24);
    display(datas);
    // console.log(datas.splice(50, 20));
  } catch (error) {
    console.log(error);
  }
};

const display = (data) => {
  console.log(data);
  const mapData = data
    .map(
      (el) =>
        `<li class="character">
        <h2>${el.name}</h2>
        <p>House : ${el.house}</p>
        <img src=${el.image} alt="image" />
      </li>`
    )
    .join("");

  characterList.innerHTML = mapData;
};

getData();
