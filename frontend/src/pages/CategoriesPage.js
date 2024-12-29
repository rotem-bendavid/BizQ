import React from 'react';
import '../App.css';
import BackGround from '../features/BackGround';

const CategoriesPage = () => {
  const categories = ['אסתטיקה', 'שיער', 'בריאות', 'כושר', 'חינוך'];

  return (
    <>
      <BackGround />
      <div className="container">
        <h1>Categories</h1>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoriesPage;