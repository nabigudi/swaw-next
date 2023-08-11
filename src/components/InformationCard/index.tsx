import Image from 'next/image'
import Diameter from '../../assets/icons/diameter.svg';
import Climate from '../../assets/icons/climate.svg';
import Gravity from '../../assets/icons/gravity.svg';
import Population from '../../assets/icons/population.svg';
import Rotation from '../../assets/icons/rotation.svg';
import Orbital from '../../assets/icons/orbital.svg'
import Terrain from '../../assets/icons/terrain.svg';
import Water from '../../assets/icons/water.svg';
import Species from '../../assets/icons/species.svg';

import styles from './InformationCard.module.scss';

interface CategoryProps {
  category: string;
}

interface InformationCardProps {
  category: string;
  data: string;
}

const CategoryIcon = ({category}: CategoryProps) => {
  switch (category){
    case 'Diameter':
      return (
        <div className={styles.categoryIconSection}>
           <Image className={styles.categoryIcon} src={Diameter} alt={category}/>
        </div>
      );
    case 'Climate':
      return (
        <div className={styles.categoryIconSection}>
          <Image className={styles.categoryIcon} src={Climate} alt={category}/>
        </div>
      );
    case 'Gravity':
      return (
        <div className={styles.categoryIconSection}>
          <Image className={styles.categoryIcon} src={Gravity} alt={category}/>
        </div>
      );
    case 'Population':
      return (
        <div className={styles.categoryIconSection}>
          <Image className={styles.categoryIcon} src={Population} alt={category}/>
        </div>
      );
    case 'Rotation Period':
      return (
        <div className={styles.categoryIconSection}>
          <Image className={styles.categoryIcon} src={Rotation} alt={category}/>  
        </div>
      );
    case 'Orbital Period':
      return (
        <div className={styles.categoryIconSection}>
          <Image className={styles.categoryIcon} src={Orbital} alt={category}/>  
        </div>
      );
    case 'Terrain':
      return (
        <div className={styles.categoryIconSection}>
          <Image className={styles.categoryIcon} src={Terrain} alt={category}/>  
        </div>
      );
    case 'Species':
      return (
        <div className={styles.categoryIconSection}>
          <Image className={styles.categoryIcon} src={Species} alt={category}/>  
        </div>
      );
    case 'Surface Water':
    default:
      return (
        <div className={styles.categoryIconSection}>
          <Image className={styles.categoryIcon} src={Water} alt={category}/> 
        </div>
      );
  }
}

const InformationCard = ({category, data}: InformationCardProps) => {
  if (!category && !data) {
    return null;
  }

  return ( 
    <div className={styles.container}>
      <CategoryIcon category={category}/>
      <div className={styles.infoText}>
        <p className={styles.data}>{data}</p>
        <p className={styles.category}>{category}</p>
      </div>
    </div>
  )
}

export default InformationCard;