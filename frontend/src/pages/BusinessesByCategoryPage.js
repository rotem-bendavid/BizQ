import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import '../App.css';
import Background from '../features/Generics/Background';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../features/SignUpPage/data';

const BusinessesByCategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [businesses, setBusinesses] = useState([]);
  const navigate = useNavigate();

  const fetchBusinesses = async (category) => {
    try {
      const q = query(collection(db, 'businesses'), where('category', '==', category));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const businessesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setBusinesses(businessesData);
      } else {
        setBusinesses([]);
      }
    } catch (error) {
      console.error('Error fetching businesses:', error);
    }
  };

  useEffect(() => {
    if (selectedCategory) fetchBusinesses(selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <Background />
      <div className="container">
        <h1>Businesses by Category</h1>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select a Category</option>
          {CATEGORIES.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        {businesses.length > 0 ? (
          <ul>
            {businesses.map((business) => (
              <li
                key={business.id}
                onClick={() => navigate(`/business/${business.id}`)}
                style={{ cursor: 'pointer' }}
              >
                {business.name}
              </li>
            ))}
          </ul>
        ) : (
          selectedCategory && <p>No businesses found for this category.</p>
        )}
      </div>
    </>
  );
};

export default BusinessesByCategoryPage;