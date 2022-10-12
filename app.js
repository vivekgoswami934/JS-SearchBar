let characterList = document.getElementById("characterList");
const URL = `https://hp-api.herokuapp.com/api/characters`;

let datas = [];

const getData = async () => {
  try {
    const res = await fetch(URL);
    result = await res.json();
    datas = result.splice(0, 26);
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
