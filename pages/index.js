// pages/index.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../features/sampleSlice';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.sample.data);

  useEffect(() => {
    axios.get('https://pantip.com/api/home') // Example endpoint
      .then(response => {
        dispatch(setData(response.data));
      });
  }, [dispatch]);

  return (
    <div className="container">
      <header className="header">
        <h1>Pantip Home Page</h1>
      </header>
      <main className="main">
        {data ? (
          <div className="content">
            {/* Render data in Airbnb style */}
            {data.map((item, index) => (
              <div key={index} className="item">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </main>
      <style jsx>{`
        .container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .header {
          background: #ff5a5f;
          padding: 10px;
          text-align: center;
          color: white;
        }
        .main {
          margin: 20px 0;
        }
        .content {
          display: flex;
          flex-wrap: wrap;
        }
        .item {
          border: 1px solid #ddd;
          margin: 10px;
          padding: 10px;
          border-radius: 4px;
          background: #fff;
          flex: 1 1 calc(33% - 20px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        @media (max-width: 768px) {
          .item {
            flex: 1 1 calc(50% - 20px);
          }
        }
        @media (max-width: 480px) {
          .item {
            flex: 1 1 calc(100% - 20px);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
