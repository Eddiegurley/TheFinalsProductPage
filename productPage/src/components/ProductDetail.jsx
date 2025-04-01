import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <Card>
     <div className="product-detail-container">
       <div className="product-detail-card"> 
       <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      <img src={product.image} alt={product.title} className="product-detail-img" />
      <div className="product-detail-text">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>⭐ {product.rating?.rate} ({product.rating?.count})</p>
        <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
       </div> 
      </div>
     </div> 
    </Card>
  );
}

export default ProductDetail;

