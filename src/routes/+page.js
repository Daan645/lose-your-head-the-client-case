import getData from "$lib/fetch-data";

/** @satisfies {import('./$types').Actions} */


export async function load({ params, url }) {
  const currentDay = new Date().toISOString().split('T')[0];
  const clickedDay = url.searchParams.get('datum')
  const data = await getData(clickedDay || currentDay);

  return {
    data: data.data
  };
}
