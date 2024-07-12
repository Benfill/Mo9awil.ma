import Cookies from "js-cookie";
import GET from "./GET";

const API_URL = "http://127.0.0.1:8000/api/";

async function PUT(endpoint, id, updateCach = true, body=[]) {
    const token = Cookies.get("token");
    const response = await fetch(`${API_URL + endpoint}/${id}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        method: "PUt",
        body: JSON.stringify(body) 
    });
    if (response && updateCach === true) {
        sessionStorage.removeItem(endpoint);
        await GET(endpoint, true);
    }
    return await response.json();
}

export default PUT;
