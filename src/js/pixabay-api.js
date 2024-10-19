const API_KEY = '46483987-c8443b8397d1fa46fa83b5f89';

function getImg(searchValue) {
    const searchParams = new URLSearchParams({
            key: API_KEY,
            q: searchValue,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true"
        });

    
    return fetch(`https://pixabay.com/api/?${searchParams.toString()}`).then(res => {
    if (!res.ok) {
       throw new Error(res.status);
     }

     return res.json();
   });
}

export {getImg}