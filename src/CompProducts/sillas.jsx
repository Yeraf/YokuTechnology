import Data from "../Json/sillas.json";

const sillas = () => {
  return (
    <div className="">
      <div className="row">
        <div className="div-cards ">
          <hr />
          { Data && Data.map (data => {
            return (
              <div className="card Laptops-card d-flex" key={data.id}>
                <img
                  src={data.img}
                  className="card-img-top"
                  alt={data.nameProduct}
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{data.nameProduct}</h5>
                  <p className="card-text">{data.text1}</p>
                  <p className="text-muted">{data.text2}</p>
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
  )
}

export default sillas
