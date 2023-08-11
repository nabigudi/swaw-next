import React from 'react';
import styles from './page.module.scss';
import PlanetCarousel from '../../components/PlanetCarousel';

interface PlanetListProps {
  params: { slug: string }
}

const PlanetList = ( {params} : PlanetListProps) => {
  const page = parseInt(params.slug)
  return (
    <div className={styles.container}>
      <PlanetCarousel page={page}/>
    </div>
  );
}

export default PlanetList;