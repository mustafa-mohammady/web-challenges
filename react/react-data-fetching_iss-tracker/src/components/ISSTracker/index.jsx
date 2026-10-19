import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";
const URL = "https://api.wheretheiss.at/v1/satellites/25544";
const fetcher = (...args) =>
  fetch(...args).then((res) => {
    if (!res.ok) {
      throw new Error("Server Problem");
    } else {
      return res.json();
    }
  });
export default function ISSTracker() {
  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });
  let longitude = 0;
  let latitude = 0;
  const { data, error, isLoading, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  if (data) {
    longitude = data.longitude;
    latitude = data.latitude;
  }

  // useEffect(() => {
  //   getISSCoords();
  //   const timer = setInterval(() => getISSCoords(), 5000);
  //   return () => clearInterval(timer);
  // }, [data]);

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  if (isLoading) return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  if (error)
    return <h1 style={{ textAlign: "center" }}>Problem Occurred...</h1>;

  return (
    <main>
      <Map longitude={longitude} latitude={latitude} />
      <Controls longitude={longitude} latitude={latitude} onRefresh={mutate} />
    </main>
  );
}
