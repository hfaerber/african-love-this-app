export const cleanData = (data) => {
  return data.map(country => {
    return { name: country.name,
             capital: country.capital,
             subregion: country.subregion,
             needsStudied: true }
  });
};

export const filter = (countries, selectedFilter) => {
  return selectedFilter === 'Still Learning' ?
    countries.filter(c => c.needsStudied)
    : selectedFilter === 'Got It!' ? countries.filter(c => !c.needsStudied)
    : countries
};

export const getQueryCard = (countries, searchQuery) =>
  {return countries.reduce((acc, c) => {
    if (c.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      acc.push(c)
    }
    return acc
    }, [])
};

export const countriesToDisplay = (countries, selectedFilter, searchQuery) =>
  {return searchQuery ? getQueryCard(countries, searchQuery)
    : filter(countries, selectedFilter)
};
