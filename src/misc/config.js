const BASE_URL = `https:api.tvmaze.com/`;
export async function getAPI(queryString) {
  const res = await fetch(`${BASE_URL}${queryString}`);
  return res;
}
