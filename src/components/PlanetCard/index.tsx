// import { Link } from "react-router-dom";
import Link from 'next/link'
import PlanetImage from '../PlanetImage';
import PlanetQuote from '../PlanetQuote';
import styles from './PlanetCard.module.scss';
import { Planet } from '@/types/Planet';

type PlanetCardProps = {
  planet: Planet, 
  id: number,
  page: number,
}

const PlanetCard = ({planet, id, page}: PlanetCardProps) => {
  if (!planet) {
    return null;
  }

  return ( 
    <div className={styles.container}>
      <div className={styles.card}>
        <PlanetImage planet={planet.name} bigBottom={false}/>
        <div className={styles.textSection}>
          <h2 className={styles.planetName}>{planet.name}</h2>
          <PlanetQuote planetName={planet.name} />
          <Link href={`/PlanetInfo/${page}/${id}`} className={styles.button}>View Planet Info</Link>
        </div>
      </div>
    </div>
  )
}

export default PlanetCard;