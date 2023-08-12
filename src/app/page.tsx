import React from 'react';
import styles from './page.module.scss';
import PlanetCarousel from '@/components/PlanetCarousel';

const PlanetList = () => {
  return (
    <div className={styles.container}>
      <PlanetCarousel page={1}/>
    </div>
  );
}

export default PlanetList;