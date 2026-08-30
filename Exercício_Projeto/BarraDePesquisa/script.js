const data = [
  {
    title: "Minha casa é grande",
    description: "Minha casa é muito grande mesmo, bando de porra",
  },
  {
    title: "NEWworld melhora casa branca",
    description: "Minha casa é muito grande mesmo, bando de porra",
  },
  {
    title: "NEWworld",
    description: "Minha casa é muito grande mesmo, bando de porra",
  },
  {
    title: "Helllo",
    description: "Minha casa é muito grande mesmo, bando de porra",
  },
  {
    title: "Inara te amo, coisa fofa",
    description: "Minha casa é muito grande mesmo, bando de porra",
  },
];

const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("#searchInput");

const displayData = (item) => {
  cardContainer.innerHTML = "";

  item.forEach((e) => {
    cardContainer.innerHTML += `
    <div class="card">
    <h3>${e.title}</h3>
    <p>${e.description}</p>
    </div>
    `;
  });
};

searchInput.addEventListener("keyup", (e) => {
  const search = data.filter((item) =>
    item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    || item.description.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
);

  displayData(search);
});

window.addEventListener("load", displayData.bind(null, data));
