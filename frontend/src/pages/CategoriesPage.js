import React from 'react';
import '../App.css';
import BackGround from '../features/BackGround';
import { CATEGORIES } from '../features/SignUpPage/data';

const CategoriesPage = () => {
  return (
    <>
      <BackGround />
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