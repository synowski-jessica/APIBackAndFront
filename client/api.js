const fetchData = async () => {
  //1. Récupération des données de l'API
  const response = await fetch("http://localhost:3002/images");
  const data = await response.json();

  console.log(data);

  //2.Récupération du DOM
  const slides = document.querySelector(".splide__list");
  console.log(slides);

  //3.Mapper pour récupérer que les images
  const imageUrl = data.map((image) => image.download_url);
  console.log(imageUrl);

  //4.Iterer sur les données pour les inclure au DOM

  imageUrl.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("splide__slide");

    const img = document.createElement("img");
    img.src = item;
    img.alt = "image aléatoire";

    listItem.appendChild(img);
    slides.appendChild(listItem);
  });

  //5.Ajout du slider avec la bibliothèque Splide
  new Splide(".splide", {
    type: "loop",
    perPage: 3,
    perMove: 3,
    width: "90vw",
    height: "90vh",
  }).mount();
};

fetchData();
