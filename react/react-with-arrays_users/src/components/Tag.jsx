import "./Tag.css";
export default function Tag({ tag, newClass }) {
  return <li className={`tag ${newClass}`}>{tag}</li>;
}
