import BASE_URL from "../../config.js";
import axios from "axios";
import getToken from "../../helpers/getToken.js";
export const updatePromotion = async (value) => {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${BASE_URL}/subscription/promotion`, headers: {
            'Authorization': `Bearer ${getToken()}`, 'Content-Type': 'application/json'
        },
        data: {
            "promotion": value
        }
    };
    try {
        const response = await axios(config);
        const data = response.data;
        return data;
    } catch (error) {
        if (error?.response?.data) {
            return error?.response?.data
        }
        else {
            return { status: false, msg: "Something went wrong !! Its not you its us.... we'll fix it soon!!" }
        }
    }
};
