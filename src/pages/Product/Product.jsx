import { Link, useParams } from "react-router-dom";
import data from "../../data/data.json";
import { EvenColumns } from "../../components/EvenColumns/EvenColumns";
import { PictureTag } from "../../components/PictureTag/PictureTag";
import { CategoryList } from "../../components/CategoryList/CategoryList";
import { ProductDescription } from "../../components/ProductDescription/ProductDescription";
import styles from "./Product.module.css";
import {
  Button,
  CounterButton,
  ReturnButton,
} from "../../components/Button/Button";
import { useState } from "react";
import { useCart } from "../../hooks/useCart";

export function Product() {
  // get data of clicked product
  const { slug } = useParams();
  const product = data.all.find((type) => type.slug === slug);
  // cart
  const { addNewCartItem } = useCart();
  const [productAmount, setProductAmount] = useState(1);

  function addToCart() {
    addNewCartItem(
      crypto.randomUUID(),
      product.shortName,
      product.price,
      productAmount,
      `/assets/cart/image-${product.slug}.jpg`
    );
    setProductAmount(1);
  }
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <ReturnButton />
          <EvenColumns
            className={styles.evenColumns}
            col1={
              <PictureTag
                mobile={product.image.mobile}
                tablet={product.image.tablet}
                desktop={product.image.desktop}
                alt={`${product.name}`}
                mqDesktop="65em"
                mqTablet="42em"
              />
            }
            col2={
              <div>
                <ProductDescription
                  isProductPage
                  newProduct={product.new}
                  AsComponent="h2"
                  title={product.name}
                  information={product.description}
                  link={product.slug}
                  className={styles.heroDescription}
                />
                <h6 className={styles.price}>$ {product.price}</h6>
                <div className={styles.addToCart}>
                  <CounterButton
                    productAmount={productAmount}
                    setProductAmount={setProductAmount}
                    className={styles.counter}
                  />
                  {/* add items to cart */}
                  <Button onClick={() => addToCart()} theme="accent">
                    Add to cart
                  </Button>
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* PRODUCTDETAILS */}
      <section className={`${styles.productDetails} container`}>
        <div className={styles.features}>
          <h3>Features</h3>
          <p>{product.features}</p>
        </div>
        <div className={styles.included}>
          <h3>In the box</h3>
          <ul>
            {product.includes.map((item) => {
              return (
                <li key={crypto.randomUUID()}>
                  {item.quantity}x <span>{item.item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* GALLERY */}
      <section className={`${styles.gallery} container`}>
        {Object.values(product.gallery).map((item) => {
          return (
            <PictureTag
              key={crypto.randomUUID()}
              mobile={item.mobile}
              tablet={item.tablet}
              desktop={item.desktop}
              alt="audiophile showcase , headphones, speakers"
              mqDesktop="65em"
              mqTablet="42em"
            />
          );
        })}
      </section>

      <section className={`${styles.navigation} container`}>
        <h2>You may also like</h2>
        <div className={styles.otherProducts}>
          {product.others.map((item) => {
            return (
              <div key={crypto.randomUUID()}>
                <PictureTag
                  mobile={item.image.mobile}
                  tablet={item.image.tablet}
                  desktop={item.image.desktop}
                  alt={item.name}
                  mqDesktop="65em"
                  mqTablet="47em"
                />
                <h3>{item.name}</h3>
                <Button
                  to={`../${item.slug}`}
                  theme="accent"
                  AsComponent={Link}
                >
                  See Product
                </Button>
              </div>
            );
          })}
        </div>
        <CategoryList />
      </section>
    </>
  );
}
