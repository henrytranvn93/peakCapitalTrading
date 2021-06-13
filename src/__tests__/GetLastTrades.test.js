import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const URL = process.env.REACT_APP_API_SERVER;

it("call axios and return last trade", async () => {
    const response = await axios.get(`${URL}/AAPL?apiKey=${API_KEY}`);

    expect(response.data.results.T).toEqual('AAPL');
    expect(response.data.status).toEqual('OK');
})