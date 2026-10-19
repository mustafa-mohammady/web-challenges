export default function App() {
  return <Smiley isHappy={true} />;
}

const Smiley = ({ isHappy }) => {
  return <h1>{isHappy ? "🥳" : "😌"}</h1>;
};
