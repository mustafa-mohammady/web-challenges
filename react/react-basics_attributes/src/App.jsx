import "./styles.css";

function Article() {
  return (
    <article>
      <h2 className="article__title">Search</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" />
      <a
        href="https://en.wikipedia.org/wiki/React_(software)"
        className="article__link"
      >
        Show more
      </a>
    </article>
  );
}
export default function App() {
  return <Article />;
}
