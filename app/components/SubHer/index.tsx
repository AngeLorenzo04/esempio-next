import React from "react";

const products = [
  { id: 1, name: "Prodotto 1", image: "https://www.chemicalsconsulting.eu/wp-content/uploads/2019/05/scadenza-prodotti-cosmetici.jpg" },
  { id: 2, name: "Prodotto 2", image: "https://simoambiente.it/wp-content/uploads/2022/04/pane-2-768x510.jpg" },
  { id: 3, name: "Prodotto 3", image: "https://www.conviene-italy.com/wp-content/uploads/2022/05/ingrosso-prodotti-italiani-all-estero-per-la-ristorazione.webp" },
];

const SubHero: React.FC = () => {
  return (
    <section className="bg-gray-100 text-center py-12 px-4">
      <h2 className="text-2xl font-semibold text-gray-800">I nostri prodotti</h2>
      <p className="mt-2 text-gray-600">Scopri la nostra selezione esclusiva.</p>

      {/* Gallery */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded-lg">
            <img src={product.image} alt={product.name} className="w-full rounded-md" />
            <h3 className="mt-2 text-lg font-medium">{product.name}</h3>
          </div>
        ))}
      </div>

      {/*UI VERSE COMPONENT*/}

    <div className="cards flex items-center justify-center mt-10 mb-6">
        <div className="card red">
            <p className="tip">Prodotto 1</p>
            <p className="second-text">Lorem Ipsum</p>
        </div>
        <div className="card blue">
            <p className="tip">Prodotto 2</p>
            <p className="second-text">Lorem Ipsum</p>
        </div>
        <div className="card green">
            <p className="tip">Prodotto 3</p>
            <p className="second-text">Lorem Ipsum</p>
        </div>
    </div>


    </section>
  );
};

export default SubHero;
