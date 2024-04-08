import "./Paragraph.css"

const Paragraph = ({ text, title }) => {
  return <div className="paragraph"><h>{title}</h><p>{text}</p></div>;
};

export default Paragraph;
