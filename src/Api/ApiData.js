import axios from "axios";

const ApiData = () => {

    const getData = async () => {
        try {
            const res = await axios.get(`https://dummyjson.com/products`);
            return res
        } catch (error) {
            console.log('error', error);
        }
    };


    return {
        getData,
    };
};

export default ApiData();
