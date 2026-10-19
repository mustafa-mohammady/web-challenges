import Card from "../Card";
import useSwr from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};
export default function Character({ id }) {
  let name = "";
  let height = "";
  let eyeColor = "";
  let birthYear = "";

  const URL = `https://swapi.py4e.com/api/people/${id}`;
  const { data, error, isLoading } = useSwr(URL, fetcher);

  if (data) {
    name = data.name;
    height = data.height;
    eyeColor = data.eye_color;
    birthYear = data.birth_year;
  }

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <Card
      id={id}
      name={name}
      height={height}
      eyeColor={eyeColor}
      birthYear={birthYear}
    />
  );
}
