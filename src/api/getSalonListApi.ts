import axios from "axios";

export const getListApi = axios({
    method: 'get',
    url: 'https://ec995b7d-a344-49e4-b84e-0a7ed19a8bd1.mock.pstmn.io/petSalon'
})
