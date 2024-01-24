import { BsFillBagFill } from "react-icons/bs";

const Card = ({ imageUrl, name, star, reviews, price }) => {
  return (
    <>
      <section className="card">
        <img src={imageUrl} alt={name} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{name}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
            ${price}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;