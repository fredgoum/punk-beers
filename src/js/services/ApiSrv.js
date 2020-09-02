// Gets API data from Punk Beers API
async function call(method) {
  let apiData = [];
  if (method === 'GET') {
    try {
      const url = 'https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6';

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

window.apiSrv = {
  call,
};

export default window.apiSrv;
