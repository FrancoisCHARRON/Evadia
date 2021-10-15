/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import useClickOutside from '../../../hooks/useClickOutside';

import './styles.scss';

// eslint-disable-next-line react/prop-types
const DropdownPersonnel = ({ data = [] }) => {
  // Méthode pour le petit menu déroulant.
  const [displayMenu, setDisplayMenu] = useState(false);
  const dropdownRef = useRef();

  useClickOutside(dropdownRef, () => setDisplayMenu(false));

  const showDropdownMenu = (event) => {
    event.preventDefault();
    setDisplayMenu((state) => !state);
  };

  return (
    <>
      <div className="details__dropdown" ref={dropdownRef}>
        <div className="details__dropdown__button" onClick={showDropdownMenu}>
          {' '}
          Personnel de santé{' '}
          <IoChevronDownOutline
            className={` dropdown__button__arrow ${
              displayMenu ? 'dropdown__button__arrow__animation' : ''
            }`}
          />
        </div>
        {displayMenu ? (
          <ul className="details__dropdown__ul">
            {data && data.length < 10 ? (
              data.map((element) => (
                <li className="details__dropdown__li">{element.profession}</li>
              ))
            ) : data && data.length >= 10 ? (
              <li className="details__dropdown__li">
                {data.length} personnel de santé
              </li>
            ) : (
              <li className="details__dropdown__li">
                Aucun personnel de santé
              </li>
            )}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default DropdownPersonnel;
