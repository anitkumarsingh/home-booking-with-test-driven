import { BASE_URL } from '../constants/api';
const apiClient = {
  getHomes: () => {
    return fetch(`${BASE_URL}`).then((response) => response.json());
  }
};
export default apiClient;
