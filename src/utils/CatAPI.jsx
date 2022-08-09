//axios
import axios from 'axios';
//Exports
export { getRandomCat };
export { voteUp };
export { voteDown };
export { favouriteImage };
export { getBreeds };
export { getSelectedBreed };
export { getGallery };
export { getAllReactions };
export { getFavourite };
export { getBreedDetails };
export { getAllBreeds };

// axios default options
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'f11dde38-88b4-44d1-a4e6-d83224e6352d';

//One cat image for Voting Page
async function getRandomCat() {
  const response = await axios.get(`/images/search?size=full`);
  return response;
}

//Post Likes
async function voteUp(imageId, userId) {
  let body = {
    image_id: imageId,
    sub_id: userId,
    value: 1,
  };
  const response = await axios.post('/votes', body);
  return response;
}

//Post Dislikes
async function voteDown(imageId, userId) {
  let body = {
    image_id: imageId,
    sub_id: userId,
    value: 0,
  };
  const response = await axios.post('/votes', body);
  return response;
}

//Post Favourites
async function favouriteImage(imageId, userId) {
  let body = {
    image_id: imageId,
    sub_id: userId,
  };
  const response = await axios.post('/favourites', body);
  return response;
}

//Breeds for Breeds Page
async function getBreeds(limit) {
  const response = await axios.get(`/breeds?limit=${limit}`);
  return response;
}

//One breed for BreedDetails Page
async function getSelectedBreed(breed, limit) {
  const response = await axios.get(
    `/images/search?limit=${limit}&breed_ids=${breed}`
  );
  return response;
}

//Images list for gallery Page
async function getGallery(type, order, limit, breed) {
  const response = await axios.get(
    `/images/search?mime_types=${type}&order=${order}&limit=${limit}&breed_id=${breed}`
  );
  return response;
}

//All Favourites list for Favourites Page
async function getFavourite() {
  const response = await axios.get('/favourites?limit=20');
  return response;
}

//All reactions(likes and dislikes)
async function getAllReactions() {
  const response = await axios.get('/votes?limit=45');
  return response;
}

//Breed details
async function getBreedDetails(breedId) {
  const response = await axios.get(
    `/images/search?breed_ids=${breedId}&limit=10`
  );
  return response;
}

//All dreeds list
async function getAllBreeds() {
  const response = await axios.get(`/breeds`);
  return response;
}
