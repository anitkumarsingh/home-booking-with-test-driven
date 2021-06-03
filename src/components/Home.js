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
      <div
        data-testid="homes"
        key={index}
        className="col-6 col-md-6 col-lg-4 col-xl-3 mb-3"
      >
        <div className="card w-100">
          <img
            data-testid="img"
            alt="home"
            src={i.image}
            className="card-img-top"
          />
          <div className="card-body">
            <div data-testid="home-title" className="card-title h5">
              {i.title}
            </div>
            <div data-testid="home-loc">{i.location}</div>
            <div data-testid="price">{i.price}/night</div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container m-2">
      <h1>Homes</h1>
      <div className="row">{homes}</div>
    </div>
  );
};

export default Home;
