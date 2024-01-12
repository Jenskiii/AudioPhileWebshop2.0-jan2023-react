import { Link, useParams } from "react-router-dom";
import { productData } from "../../data/productData";

export function Category() {
  // imports category from router
  const { category } = useParams();
  // updates data based on selected category
  const type = productData.find((type) => type.category === category);
  
  return (
    <>
      <h1>Category - {category}</h1>

      {type.data.map((item) => {
        return (
          <div key={crypto.randomUUID()}>
            <Link to={`${item.slug}`}>{item.name}</Link>
            <br />
          </div>
        );
      })}
    </>
  );
}
