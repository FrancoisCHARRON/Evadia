/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import backgroundVideo from '../../assets/video/timelapse_light.mp4';
import API from '../../api';

import './styles.scss';
import cityStore from '../../store/city';

const Homepage = () => {
  const history = useHistory();
  const setCity = cityStore(state => state.setCity);

  const toRandom = async () => {
    const data = await API.getRandomCity();
    setCity(data[0]);
    history.push('/details');
  };

  return (
    <>
      <div className="background_video">
        <video autoPlay loop muted id="video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className="homepage__container">
        <h1 className="homepage__container__h1">
          Evadez-vous avec{' '}
          <span className="homepage__container__evadia">Evadia</span>
        </h1>
        <h2 className="homepage__container__h2">
          Trouvez la ville de vos rêves pour un déménagement, un week-end, et
          bien plus encore !
        </h2>
        <div className="homepage__container__search">
          <a
            href="#"
            className="homepage__container__search__link__button"
            onClick={toRandom}
          >
            <div className="homepage__container__search__link">Aléatoire</div>
          </a>

          <NavLink
            className="homepage__container__search__link__button"
            type="button"
            to="/details"
          >
            <div className="homepage__container__search__link">Par ville</div>
          </NavLink>

          <NavLink
            className="homepage__container__search__link__button"
            type="button"
            to="/criteria"
          >
            <div className="homepage__container__search__link">Critères</div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Homepage;
