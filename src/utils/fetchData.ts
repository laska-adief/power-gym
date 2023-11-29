export const options: RequestInit = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY!,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url: string, options: RequestInit) => {
  const response = await fetch(url, options);
  const data = response.json();

  return data;
};
