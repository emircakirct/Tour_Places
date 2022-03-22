function Card(props) {
    // function Card({ title, image, desc, text }) {
    const { title, image, desc } = props;
    console.log(props);
    return (
      <div className="cards">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <img src={image} alt={title} />
        <div className="describe">
          <p>{desc}</p>
        </div>
      </div>
    );
  }
  
  export default Card;