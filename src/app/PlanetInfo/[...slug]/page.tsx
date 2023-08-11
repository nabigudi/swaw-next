'use client'

import React, { useEffect,  useState} from 'react';
import Link from 'next/link'
import cleanBigNumber from '@/utils/cleanBigNumber';
import PlanetImage from '@/components/PlanetImage';
import InformationCard from '@/components/InformationCard';
import { getPlanet } from '@/api/swapi';
import styles from './PlanetInfoData.module.scss';
import { Planet } from '@/types/Planet';

interface PlanetInfoProps {
  params: { slug: string[] }
}

const PlanetInfo = ( { params }: PlanetInfoProps) => {
  const id = params.slug[1];
  const page = params.slug[0];
  
  let [planet, setPlanet] = useState<Planet|null>(null);

  useEffect(() => {
    getPlanet(id).then(response => {
      setPlanet(response);
    });
  }, [id]);

  if (!planet) {
    return null;
  }

  return ( 
    <div className={styles.container}>
      <div className={styles.planetInfo}>
        <h2 className={styles.planetName}>{planet.name}</h2>

        <div className={styles.infoCards}>
          <InformationCard category='Diameter' data={planet.diameter + ' Km'} />

          <InformationCard category='Rotation Period' data={planet.rotation_period + ' hs/day'} />

          <InformationCard category='Orbital Period' data={planet.orbital_period + ' days/year'} />

          <InformationCard category='Gravity' data={planet.gravity === 'N/A' ? 'unknown' : planet.gravity ===  '1 standard' ? 'normal' : planet.gravity + ' Gs'} />

          <InformationCard category='Population' data={ planet.population === 'unknown' ? 'unknown' : cleanBigNumber(planet.population)} />

          <InformationCard category='Climate' data={planet.climate} />

          <InformationCard category='Terrain' data={planet.terrain} />

          <InformationCard category='Surface Water' data={planet.surface_water === 'unknown' ? planet.surface_water : planet.surface_water + '%'} />

          <InformationCard category='Species' data={planet.residents.length.toString()} />
        </div>
        <div className={styles.buttonContainer}>
          <Link href={`/${page}`} className={styles.button}>Back to Planet List</Link>
        </div>
      </div>
      <div className={styles.planetImage}>
        <PlanetImage planet={planet.name} bigBottom={true}/>
      </div>
    </div>
  )
}

export default PlanetInfo;