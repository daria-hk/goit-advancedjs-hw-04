import { getImg } from "./js/pixabay-api";
import { createCardsMarkup, loadSimpleLitebox } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const fetchUsersBtn = document.querySelector("input[type=submit]");
const imgs = document.querySelector("ul.images-div");
const loaderClass = document.querySelector(".loaderClass");
const loadMore = document.querySelector(".load-more");

const params = {
  page: 1,
  per_page: 15,
  maxPage: 1,
  q: '',
};

loadMore.addEventListener("click", handleLoadmore);
fetchUsersBtn.addEventListener("click", handleSearch);

async function handleSearch(evt) {
  evt.preventDefault();
  
  const searchInput = document.querySelector('input[name="search"]');
  const notFoundTextEl = document.querySelector(".not-found-el");

  params.page = 1;
  const searchValue = searchInput.value.trim();

  if (searchValue === '') {
    iziToast.show({
      title: "Error",
      message: "Please enter a valid search query!",
      color: "red",
    });
    return;
  }

  params.q = searchValue;

  loaderClass.style.display = "flex";
  console.log("Loader shown");
  

  try {
    const data = await getImg(params);

    const total_pages = Math.ceil(data.totalHits / params.per_page);

    if (data.totalHits === 0) {
      imgs.innerHTML = "";
      notFoundTextEl.innerHTML = `Results for query <span>${searchValue}</span> not found!`;
      iziToast.show({
        title: "Error",
        message: "No images found for this query. Try again!",
        backgroundColor: "#B51B1B",
        messageColor: "white",
        titleColor: "yellow",
      });
      return;
    }

    params.maxPage = total_pages;

    imgs.innerHTML = createCardsMarkup(data.hits);
    loadMore.style.display = params.page < params.maxPage ? "flex" : "none";

    await handleImageLoading();
    loadSimpleLitebox(); 

  } catch (error) {
    console.error("Error fetching images:", error);
    iziToast.show({
      title: "Error",
      message: "An error occurred while fetching images. Please try again later.",
      color: "red",
    });
  } finally {
    loaderClass.style.display = "none";
    console.log("Loader hidden");
  }
}

async function handleLoadmore() { 
  params.page += 1;

  try {
    loaderClass.style.display = "flex";
    const data = await getImg(params);

    const imgsMarkup = createCardsMarkup(data.hits);
    imgs.insertAdjacentHTML("beforeend", imgsMarkup);

    await handleImageLoading();
    loadSimpleLitebox();
    scrollByCards()

    if (params.page >= params.maxPage) {
      iziToast.show({
      title: "Info",
      message: "We're sorry, but you've reached the end of search results.",
      color: "blue",
      });
      loadMore.style.display = "none";
    }
    
  } catch (error) {
    console.error("Error loading more images:", error);
    iziToast.show({
      title: "Error",
      message: "Failed to load more images. Please try again.",
      color: "red",
    });
  } finally {
    loaderClass.style.display = "none";
    console.log("Loader hidden");
  }
}


function scrollByCards() {
  const galeryCard = document.querySelector(".gallery-card");

  window.scrollBy({
     top: galeryCard.height * 2,
     behavior: "smooth" 
  });
}

async function handleImageLoading() {
  const imageElements = document.querySelectorAll(".gallery-img");
    const loadPromises = Array.from(imageElements).map((img) => {
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

  Promise.all(loadPromises)
    .then(() => {
      console.log(loadPromises);
    })
    .catch((err) => {
      loaderClass.innerHTML = "";
      console.error(err);
    });
}

