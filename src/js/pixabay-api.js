import axios from "axios";

const API_KEY = '46483987-c8443b8397d1fa46fa83b5f89';

axios.defaults.baseURL = 'https://pixabay.com/api';

async function getImg(searchValue) {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: searchValue,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true"
    });

    try {
        const res = await axios.get(`?${searchParams.toString()}`);

        return res.data;
    } catch (error) {
        console.error( error);
        throw error;
    }
}

export { getImg };
