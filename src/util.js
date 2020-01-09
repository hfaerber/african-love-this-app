export const cleanData = (data) => {
  return data.map(country => {
    return { name: country.name, capital: country.capital, region: country.region, subregion: country.subregion }
  })
}
