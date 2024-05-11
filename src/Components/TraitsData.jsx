import "./TraitsStyles.css";

function TraitsData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="image" />
      </div>

      <h4>{props.heading}</h4>
      <h5>{props.head}</h5>

      <p>{props.text}</p>
    </div>
  );
}

export default TraitsData;
