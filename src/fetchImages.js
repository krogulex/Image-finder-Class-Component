import axios from "axios";


axios.defaults.baseURL =
  'https://pixabay.com/api/?key=33188868-874ed4f4ba7cc47db513adf3f';

export async function fetchImages(page) {
    
  try {

    const response = await axios.get(`&per_page=4&${page}`);
    return response

  } catch (error) {
    console.log(error)
  }
}