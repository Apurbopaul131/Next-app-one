const HomePage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "force-cache",
  });
  const products = await res.json();
  console.log(products);
  return (
    <div>
      <h1 className="text-4xl text-center">This is Home page</h1>
    </div>
  );
};

export default HomePage;
