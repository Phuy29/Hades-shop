import ProductCard from "./ProductCart";

const Collections = ({ allPros }) => {
  return (
    <section className="grid grid-cols-4 grid-rows-2 my-20 gap-y-5 gap-x-4">
      {allPros.map((item) => {
        return (
          <div key={item.id}>
            <ProductCard
              id={item.id}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Collections;
