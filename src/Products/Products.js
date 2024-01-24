import { AiFillStar } from 'react-icons/ai';
import './Products.css';
function Products() {
  return (
    <>
    <section className="card-container">
      <section className="card">
        <img src="https://cdn.eraspace.com/media/catalog/product/z/e/zenfone_9_black1_1.jpg" alt="handphone" />
        <div className="card-details">
          <h3 className="card-title">
            Handphone
          </h3>
          <section className="card-reviews">
            <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>
            <span className="total-reviews">4</span>
          </section>
        </div>
      </section>
    </section>
    </>
  )
}

export default Products;
