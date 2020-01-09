export const fetchCountryData = () => {
  return fetch('https://restcountries.eu/rest/v2/region/africa')
    .then(res => {
      if (!res.ok) {
        throw Error('something went wrong')
      }
      return res.json();
    })
}
