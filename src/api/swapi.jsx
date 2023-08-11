import axios from 'axios';

export const getPlanet = async (id) => {
  try {
    const response = await axios.get(`https://swapi.dev/api/planets/${id}/`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
  
export const getPlanetsWithPage = async (page) => {
  try {
    const response = await axios.get(`https://swapi.dev/api/planets/?page=${page}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};