import "./Paragraph.css"

const Paragraph = ({ text, title }) => {
  return <div className="paragraph"><h1>{title}</h1><p>{text}</p></div>;
};

export default Paragraph;
