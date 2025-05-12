import AddToCart from "@/components/AddToCart/AddToCart";
import styles from "./page.module.css";

const Page = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return (
    <div className={styles.container}>
      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        className={styles.productImage}
      />
      <p>{product.description}</p>
      <AddToCart product={product} />
    </div>
  );
};

export default Page;
