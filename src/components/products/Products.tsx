import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../store/store";
import { useEffect } from "react";
import { fetchProducts } from "../../store/slices/products/products.thunk";

function Products() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, products } = useSelector(
    (state: RootState) => state.product,
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log({ products, loading });

  if (loading) return <p>Loading...</p>;

  return (
    <ul className="max-w-xl mx-auto mt-8 space-y-4">
      {products.map((product) => (
        <li
          key={product.productId}
          className="flex justify-between items-center p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 border border-gray-100"
        >
          <span className="text-gray-800 font-medium">
            {product.productName}
          </span>

          <span className="text-indigo-600 font-semibold">
            ${product.price}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Products;
