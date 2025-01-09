import getData from "$lib/fetch-data";

/** @satisfies {import('./$types').Actions} */


// Data
//

export async function load({ params, url }) {

  // get current date yyyy-mm-dd
  const datum = new Date().toISOString().split('T')[0];

  const data = getData("2025-01-02");
  console.log('Data:', data);

  return {
    data: data.data
  };
}



export const actions = {
  default: async ({ request }) => {
    try {
      const data2 = await request.formData();
      const datum = data2.get('datum');

      const data = getData("2025-01-02");

      console.log('Data:', data);
      return {
        data: data.data
      };

    } catch (error) {
      console.error('Error handling change action:', error);
      return { success: false, error: 'Failed to process form data' };
    }
  }
};
