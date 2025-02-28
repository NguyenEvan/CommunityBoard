
const Card = (props) => {
    return (
      <div className="card">
        <img src={props.pic} className="card-image" />
        <h3>{props.title}</h3>
        <h4>{props.date}</h4>
        <p>{props.desc}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="card-button">
        More Info
        </a>
        {/*<a href={link} target="_blank" rel="noopener noreferrer">More Info</a>*/}
      </div>
    );
  };
  
export default Card;
  