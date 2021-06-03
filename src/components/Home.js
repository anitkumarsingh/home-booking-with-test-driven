import React, { useState, useEffect } from 'react';
import apiClient from '../services/apiClient';

const Home = () => {
  const [homeData, setHomeData] = useState([]);

  const homeDataPromise = apiClient.getHomes();

  let homes;

  useEffect(() => {
    homeDataPromise.then((home) => setHomeData(home));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('home ran', homes);
  homes = homeData.map((i, index) => {
    return (
      <div data-testid="homes" key={index}>
        <div data-testid="home-title">{i.title}</div>
        <img data-testid="img" alt="home" src={i.image} />
        <div data-testid="home-loc">{i.location}</div>
        <div data-testid="price">{i.price}</div>
      </div>
    );
  });
  return <div>{homes}</div>;
};

export default Home;
