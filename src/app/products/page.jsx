import Product from "@/components/Product";

const getProducts = async () => {
  const res = await fetch("http://localhost:3004/products",{next:{revalidate:20}});
  return res.json();
};

async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h2>ProductsPage:{products.length}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4 m-10"> 
        {
          products.map(product => <Product key={product.id} product={product} />)
        }
      </div>
    </div>
  );
}

export default ProductsPage;
