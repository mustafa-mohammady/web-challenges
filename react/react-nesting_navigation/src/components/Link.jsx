export default function Link({ url, children }) {
  return (
    <>
      <a className="navigation__link" href={url}>
        {children}
      </a>
    </>
  );
}
