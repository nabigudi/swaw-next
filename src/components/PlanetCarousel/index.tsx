'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { getPlanetsWithPage } from '../../api/swapi';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PlanetCard from '../PlanetCard';
import cleanURL from '../../utils/cleanUrl';
import Back from '../../assets/icons/back.svg';
import Next from '../../assets/icons/next.svg';
import styles from './PlanetList.module.scss';
import { Planet } from '@/types/Planet';

interface PlanetListProps {
  page: number;
}

interface Planets {
  count: number,
  next: string | null,
  prev: string | null,
  results: Planet[]
}

const PlanetList = ( {page} : PlanetListProps) => {
  const [currentPage, setCurrentPage] = useState(page ?? 1);
  let [planets, setPlanets] = useState<Planets|null>(null);

  const planetClick = () => {
    return planets?.next === null ? setCurrentPage(1) : setCurrentPage(currentPage + 1)
  }

  useEffect(() => {
    getPlanetsWithPage(currentPage).then(response => {
      setPlanets(response);
    });
  }, [currentPage]);
  
  if (! planets?.results) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Star Wars Planets</h1>
      <Carousel showThumbs={false} showStatus={false} useKeyboardArrows transitionTime={1700}
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button type="button" onClick={onClickHandler} title={label} className={styles.btnNext}>
                <Image className={styles.arrow} src={Next} alt='Next Planet'/>
            </button>
          )
        }
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} className={styles.btnLeft}>
              <Image className={styles.arrow} src={Back} alt='Previous Planet'/>  
            </button>
          )
        }
        infiniteLoop
      >
        {planets.results.map((planet) => <PlanetCard planet={planet} key={planet.name} id={cleanURL(planet.url)} page={currentPage}/>)}
      </Carousel>

      <button className={styles.button} onClick={() => planetClick()}>View more planets</button>
    </div>
  );
}

export default PlanetList;