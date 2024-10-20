import axios from "axios";

const API_KEY = '46483987-c8443b8397d1fa46fa83b5f89';

axios.defaults.baseURL = 'https://pixabay.com/api';

async function getImg(params) {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: params.q,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
        page: params.page,
        per_page: params.per_page,
        maxPage: 1
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
