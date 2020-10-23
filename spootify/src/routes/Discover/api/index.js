import makeRequest from "./../api/makeRequest";

const newReleases = new Promise((resolve, reject) => {
  const data = makeRequest("new-releases");
  resolve(data);
  reject(new Error("error"));
});

const playlists = new Promise((resolve, reject) => {
  const data = makeRequest("featured-playlists");
  resolve(data);
  reject(new Error("error"));
});

const categories = new Promise((resolve, reject) => {
  const data = makeRequest("categories");
  resolve(data);
  reject(new Error("error"));
});

async function getData() {
  const allData = await Promise.all([newReleases, playlists, categories])
    .then((result) => {
      return result;
    })
    .catch((err) => console.log("Error:", err.message));
  return allData;
}

export default getData;
