// Gets API data from Punk Beers API
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

window.apiSrv = {
  call,
};

export default window.apiSrv;
