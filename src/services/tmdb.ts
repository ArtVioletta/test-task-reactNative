const apiKey =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTMxODljNjVjY2M4YjEwYmJjYWI5NTZjMzgwMTdkNiIsInN1YiI6IjY2MWI4NDAwOWE2NDM1MDE4NmUwMzBlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwB7GgSDtVeoGWm2SxGEJYUpGzQyCdDFOBCLfn_aYaM';

const headers = {
  accept: 'application/json',
  Authorization: 'Bearer ' + apiKey,
};

export const fetchMovies = async () => {
  const url =
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers,
  };
  const res = await fetch(url, options);
  console.log(res.status);
  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }

  const json = await res.json();
  return json.results;
};

export const fetchMovie = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: 'GET',
    headers,
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }

  const json = await res.json();
  return json;
};
