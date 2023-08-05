import "./AboutBox.css";

const AboutBox = ({ title, content }) => {
  return (
    <div className="about-box">
      <div className="about-box-title">
        <h1 className="about-box-h1">{title}</h1>
        <div className="about-box-underline" />
      </div>
      <p className="about-box-p">{content}</p>
    </div>
  );
};

export default AboutBox;
