import Image from 'next/image'
import Alderaan from '../../assets/planets/Alderaan.png'
import Bespin from '../../assets/planets/Bespin.png'
import Coruscant from '../../assets/planets/Coruscant.png'
import Dagobah from '../../assets/planets/Dagobah.png'
import Endor from '../../assets/planets/Endor.png'
import Hoth from '../../assets/planets/Hoth.png'
import Kamino from '../../assets/planets/Kamino.png'
import Naboo from '../../assets/planets/Naboo.png'
import Tatooine from '../../assets/planets/Tatooine.png'
import YavinIV from '../../assets/planets/Yavin_IV.png'
import styles from './PlanetImage.module.scss';

interface PlanetImageProps {
  planet: string;
  bigBottom: boolean;
}

export const PlanetImage = ({planet, bigBottom}: PlanetImageProps) => {
  switch (planet){
    case 'Kashyyyk':
    case 'Stewjon':
    case 'Troiken':
    case 'Tholoth':
    case 'Quermia':
    case 'Alderaan':
      return (
        <div className={bigBottom ? styles.bigBottomContainer : styles.container }>
          <Image className={bigBottom ? styles.bigBottom : styles.image} src={Alderaan} alt={planet}/>
        </div>
      );
    case 'Socorro':
    case 'Geonosis':
    case 'Mustafar':
    case 'Bespin':
      return (
        <div className={bigBottom ? styles.bigBottomContainer : styles.container }>
          <Image className={bigBottom ? styles.bigBottom : styles.image} src={Bespin} alt={planet}/>
        </div>
      );
    case 'Sullust':
    case 'Malastare':
    case 'Dathomir':
    case 'Umbara':
    case 'Coruscant':
      return (
        <div className={bigBottom ? styles.bigBottomContainer : styles.container }>
          <Image className={bigBottom ? styles.bigBottom : styles.image} src={Coruscant} alt={planet}/>
        </div>
      );
    case 'Polis Massa':
    case 'Nal Hutta':
    case 'Ord Mantell': 
    case 'Dorin':
    case 'Zolan':
    case 'Dagobah':
      return (
        <div className={bigBottom ? styles.bigBottomContainer : styles.container }>
          <Image className={bigBottom ? styles.bigBottom : styles.image} src={Dagobah} alt={planet}/>
        </div>
      );
    case 'Shili':
    case 'Muunilinst':
    case 'Concord Dawn':
    case 'Saleucami':
    case 'Mygeeto':
    case 'Ryloth':
    case 'Endor':
      return (
        <div className={bigBottom ? styles.bigBottomContainer : styles.container }>
          <Image className={bigBottom ? styles.bigBottom : styles.image} src={Endor} alt={planet}/>
        </div>
      );
    case 'Bestine IV':
    case 'Tund':
    case 'Haruun Kal':
    case 'Iktotch':
    case 'Iridonia':
    case 'Hoth':
      return (
        <div className={bigBottom ? styles.bigBottomContainer : styles.container }>
          <Image className={bigBottom ? styles.bigBottom : styles.image} src={Hoth} alt={planet}/>
        </div>
      );
    case 'Cato Neimoidia':
    case 'Eriadu':
    case 'Corellia':
    case 'Unknown':
    case 'Mon Cala':
    case 'Chandrila':
    case 'Kamino':
      return (
        <div className={bigBottom ? styles.bigBottomContainer : styles.container }>
          <Image className={bigBottom ? styles.bigBottom : styles.image} src={Kamino} alt={planet}/>
        </div>
      ); 
    case 'Champala':
    case 'Mirial':
    case 'Serenno':
    case 'Naboo':
      return (
        <div className={bigBottom ? styles.bigBottomContainer : styles.container }>
          <Image className={bigBottom ? styles.bigBottom : styles.image} src={Naboo} alt={planet}/>
        </div>
      ); 
    case 'Utapau':
    case 'Felucia':
    case 'Rodia':
    case 'Trandosha':
    case 'Toydaria':
    case 'Cerea':
    case 'Glee Anselm':
    case 'Yavin IV':
      return (
        <div className={bigBottom ? styles.bigBottomContainer : styles.container }>
          <Image className={bigBottom ? styles.bigBottom : styles.image} src={YavinIV} alt={planet}/>
        </div>
      );
    case 'Kalee':
    case 'Aleen Minor':
    case 'Vulpter':
    case 'Tatooine':
    case 'Dantooine':
    case 'Ojom':
    case 'Skako':
    default:
      return (
        <div className={bigBottom ? styles.bigBottomContainer : styles.container }>
          <Image className={bigBottom ? styles.bigBottom : styles.image} src={Tatooine} alt={planet}/>
        </div>
      );
  };
};

export default PlanetImage;