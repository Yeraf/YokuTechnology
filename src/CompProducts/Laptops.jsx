import "../Css/Cssapp/Products/Laptops.css";
import data from "../Json/Laptop.json";
// import Laptop1 from "../Img/ImgJson/ImgLaptops/Laptop.jpg";

const Laptops = () => {
  return (
    <div className="">
      <div className="row">
        <div className="div-cards">
          <hr />
          {data.map((data) => {
            return (
              <div className="card Laptops-card d-flex " key={data.id}>
                <img
                  src={data.img}
                  className="card-img-top h-10"
                  alt={data.nameProduct}
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{data.nameProduct}</h5>
                  <p className="card-text">{data.text1}</p>
                  <p className="card-text">{data.text2}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Laptops;
