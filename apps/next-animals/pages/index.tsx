import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import type { Animal } from '@nx-animals/shared-types';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  const [search, setSearch] = useState('');
  const [animals, setAnimal] = useState<Animal[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3333/api/search?q=${search}`)
      .then((res) => res.json())
      .then((result) => setAnimal(result));
  }, [search]);

  const handleSearchInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    []
  );

  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome to the Animal squad 👋
            </h1>
          </div>

          <div id="hero" className="rounded">
            <div className="text-container">
              <span>Search animal below</span>
              <input
                onChange={handleSearchInput}
                placeholder="Search name of animal here!"
              />
            </div>
          </div>

          <div id="middle-content">
            <div id="learning-materials" className="rounded shadow">
              <h2>List of animals</h2>
              {animals.map((animal, index) => (
                <div key={index} className="list-item-link">
                  <span>
                    {animal.name}
                    <span>{animal.species}</span>
                  </span>
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg> */}
                </div>
              ))}
            </div>
          </div>
          <p id="love">
            Carefully crafted with
            <svg
              fill="currentColor"
              stroke="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </p>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
