import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-500 text-white text-center py-20">
      <h1 className="text-4xl font-bold">Benvenuto nel mio sito!</h1>
      <p className="mt-2 text-lg">Scopri di più su di noi</p>
      <button className="mt-4 px-6 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-200">
        Scopri di più
      </button>
    </section>
  );
};

export default Hero;
