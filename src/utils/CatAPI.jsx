import axios from 'axios';
export { getRandomCat };
export { voteUp };
export { voteDown };
export { favouriteImage };
export { getBreeds };
export { getSelectedBreed };

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'f11dde38-88b4-44d1-a4e6-d83224e6352d';

async function getRandomCat() {
  const response = await axios.get(`/images/search?size=full`);
  return response;
}

async function voteUp(imageId, userId) {
  let body = {
    image_id: imageId,
    sub_id: userId,
    value: 1,
  };
  const response = await axios.post('/votes', body);
  return response;
}
async function voteDown(imageId, userId) {
  let body = {
    image_id: imageId,
    sub_id: userId,
    value: 0,
  };
  const response = await axios.post('/votes', body);
  return response;
}

async function favouriteImage(imageId, userId) {
  let body = {
    image_id: imageId,
    sub_id: userId,
  };
  const response = await axios.post('/favourites', body);
  return response;
}

async function getBreeds(limit) {
  const response = await axios.get(`/images/search?limit=${limit}`);
  return response;
}

async function getSelectedBreed(breed, limit) {
  const response = await axios.get(
    `/images/search?limit=${limit}&breed_ids=${breed}`
  );
  return response;
}
