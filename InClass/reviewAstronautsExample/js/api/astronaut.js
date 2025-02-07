const BASE_URL = "https://ll.thespacedevs.com/2.3.0";

// destructuring syntax
const getAstronautList = async ({ search }) => {
  // let's get the astronaut list
  // Async function that fetches astronaut data, accepts search parameter as an object

  let paramsObj = {
    mode: "list",
  };
  // If search parameter exists, add it to the parameters object

  if (search) {
    paramsObj.search = search;
  }

  console.log(paramsObj);
  // {mode: 'list', search: 'thomas'}

  // use a built-in called URLSearchParams to specify the url params
  // {reminder: "url params"} means http://.../astonauts/?model=list

  // Convert parameters object to URL-friendly format using URLSearchParams
  // this is a built-in function that converts an object to a url string
  const params = new URLSearchParams(paramsObj);
  console.log(params);
  // URLSearchParams {size: 2}

  //let's define our endpoint-specific URL
  // Construct the complete URL by combining base URL, endpoint, and parameters

  const URL = `${BASE_URL}/astronauts/?${params.toString()}`;
  console.log(URL);
  // https://ll.thespacedevs.com/2.3.0/astronauts/?mode=list&search=thomas
  //Hit that url asynchronously!
  // Fetch data from the API using GET method

  const response = await fetch(URL, {
    method: "GET",
  });
  // let's get the json
  // Fetch data from the API using GET method
  // Check if the response is successful, if not throw an error
  if (!response.ok) {
    throw new Error("Error Fetching response");
  }

  // Parse the JSON response into JavaScript object
  const data = await response.json();
  // Return the parsed data
  return data;
};
// Export the getAstronautList function to be used in other files
export { getAstronautList };
