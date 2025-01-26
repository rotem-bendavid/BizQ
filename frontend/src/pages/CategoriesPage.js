import React from 'react';
import '../App.css';
import Background from '../features/Generics/Background';
import { CATEGORIES } from '../features/SignUpPage/data';

const CategoriesPage = () => {
  return (
    <>
      <Background />
      <div className="container">
        <h1>CATEGORIES</h1>
        <ul>
          {CATEGORIES.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoriesPage;