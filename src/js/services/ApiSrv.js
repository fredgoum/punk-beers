/**
 * Get beer API data based on URL parameters
 * @param {string} method GET method
 * @param {String} url api url
 */
async function call(method, url) {
  let apiData = [];
  if (method === 'GET') {
    try {
      const res = await fetch(url);
      if (! res.ok) {
        throw new Error(res.status);
      }
      const data = await res.json();
      if (data.length) apiData = data;
    } catch (error) {
      console.log(error);
    }
  }
  const result = await apiData;
  return result;
}

/**
 * Get list of beers based on a list of ids
 * @param {Array} beersId array of beers ids
 */
async function getBeersList(beersId) {
  const beers = [];
  // const beersId = this.$store.state.favoriteBeers;
  await Promise.all(beersId.map(async (id) => {
    try {
      const apiUrl = `https://api.punkapi.com/v2/beers/${id}`;
      const res = await fetch(apiUrl);
      if (! res.ok) {
        throw new Error(res.status);
      }
      const data = await res.json();
      beers.push(data[0]);
    } catch (error) {
      console.log(error);
    }
  }));
  return beers;
}

window.apiSrv = {
  call,
  getBeersList,
};

export default window.apiSrv;
