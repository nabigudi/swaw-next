import styles from './PlanetQuote.module.scss';

interface PlanetQuoteProps {
  planetName: string;
}
export const PlanetQuote = ({planetName}: PlanetQuoteProps) => {
  switch (planetName){
    case 'Alderaan':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"The galaxy knows Alderaan as &apos;the planet of beauty&apos;. Nature, poetry, philosophy, art, couture, cuisine—we freely share all with all."</cite></p>
          <p className={styles.nameQuote}>― Bail Organa —</p>   
        </div>                                        
      );
    case 'Bespin':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Bespin. It&apos;s pretty far, but I think we can make it."</cite></p>
          <p className={styles.nameQuote}>― Captain Han Solo —</p>   
        </div>                                        
      );
    case 'Coruscant':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Coruscant, the capital of the Republic. The entire planet is one big city.</cite></p>
          <p className={styles.nameQuote}>― Ric Olié —</p>   
        </div>                                        
      );
    case 'Dagobah':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Strong this planet is with the Force."
"It is one of the purest places in the galaxy.</cite></p>
          <p className={styles.nameQuote}>― Yoda and the spirit of Qui-Gon Jinn —</p>   
        </div>                                        
      );
    case 'Endor':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Oh, I told you it was dangerous here!</cite></p>
          <p className={styles.nameQuote}>― C-3PO —</p>   
        </div>                                        
      );
    case 'Hoth':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"There isn&apos;t enough life on this ice cube to fill a space cruiser!</cite></p>
          <p className={styles.nameQuote}>― Captain Han Solo —</p>   
        </div>                                        
      );
    case 'Kamino':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Bespin. It&apos;s pretty far, but I think we can make it."</cite></p>
          <p className={styles.nameQuote}>― Captain Han Solo —</p>   
        </div>                                        
      );
    case 'Naboo':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Naboo represents the best of the Old Republic.</cite></p>
          <p className={styles.nameQuote}>― Leia Organa, to Queen Sosha Soruna —</p>   
        </div>                                        
      ); 
    case 'Yavin IV':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Welcome to Yavin 4....There are cells gathered here from every corner of the galaxy.</cite></p>
          <p className={styles.nameQuote}>― Rebel Captain Garazeb Orrelios —</p>   
        </div>                                        
      );
    case 'Geonosis':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"This planet is rotten from the inside out."</cite></p>
          <p className={styles.nameQuote}>― Jedi Knight Anakin Skywalker —</p>   
        </div>                                        
      );
    case 'Utapau':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Greetings, young Jedi. What brings you to our remote sanctuary?"
"Unfortunately, the war."
"There&apos;s no war here. Unless you brought it with you."</cite></p>
          <p className={styles.nameQuote}>― Tion Medon and Obi-Wan Kenobi —</p>   
        </div>                                        
      );
    case 'Mustafar':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"I&apos;ve only heard that name once. From Kanan. He said Mustafar is where Jedi go to die."</cite></p>
          <p className={styles.nameQuote}>― Hera Syndulla —</p>   
        </div>                                        
      );
    case 'Kashyyyk':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"It is settled then. Yoda will take a battalion of clones to reinforce the Wookiees on Kashyyyk."</cite></p>
          <p className={styles.nameQuote}>― Jedi Master Mace Windu —</p>   
        </div>                                        
      );
    case 'Mygeeto':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Galen, you know where these came from."
"Mygeeto, perhaps."</cite></p>
          <p className={styles.nameQuote}>― Lyra and Galen Erso —</p>   
        </div>                                        
      );
    case 'Cato Neimoidia':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"This is hardly your planet anymore—not since you signed your holdings over to the Banking Clan in return for a stake in this new droid foundry."</cite></p>
          <p className={styles.nameQuote}>― Senator Rush Clovis of the InterGalactic Banking Clan, to Senator Lott Dod of the Trade Federation —</p>   
        </div>                                        
      );
    case 'Saleucami':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"So... I see the war has finally made its way out here, and I guess I can expect a visit from some droids soon."</cite></p>
          <p className={styles.nameQuote}>― Cut Lawquane —</p>   
        </div>                                        
      );
    case 'Stewjon':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Well I can&apos;t say I really remember. I was very young when I left my homeworld."</cite></p>
          <p className={styles.nameQuote}>― Obi-Wan Kenobi, to Anakin Skywalker —</p>   
        </div>                                        
      );
    case 'Eriadu':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"…Under Tarkin&apos;s rule, Eriadu finally achieved the celebrity it had been clamoring for. It became the rising star, planet other eager-to-be-exploited worlds began looking up to."</cite></p>
          <p className={styles.nameQuote}>― Berch Teller —</p>   
        </div>                                        
      );
    case 'Corellia':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Well, I admire anyone who can crawl their way out of the sewer. Especially a sewer as putrid as Corellia."</cite></p>
          <p className={styles.nameQuote}>― Dryden Vos, to Han Solo —</p>   
        </div>                                        
      );
    case 'Rodia':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"A jungle world. Domed cities I see. Rodia it is."</cite></p>
          <p className={styles.nameQuote}>― Yoda —</p>   
        </div>                                        
      );
    case 'Nal Hutta':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Nothing&apos;s free on Nal Hutta."</cite></p>
          <p className={styles.nameQuote}>― An Ithorian bartender to Anakin Skywalker —</p>   
        </div>                                        
      );
    case 'Dantooine':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Dantooine? That&apos;s in the middle of nowhere."
"That&apos;s the whole point. Where else could the rebels hide?"</cite></p>
          <p className={styles.nameQuote}>― Thane Kyrell and an Imperial officer —</p>   
        </div>                                        
      );
    case 'Bestine IV':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"I realize that you have been successful in shipping lommite through Malastare, and circling around Bestine to reach Fondor and the Core. But where will Eriadu be when Fondor opts to join the Confederacy?"</cite></p>
          <p className={styles.nameQuote}>― Dooku questions Tarkin on his plans for the oncoming Clone Wars —</p>   
        </div>                                        
      );
    case 'Ord Mantell':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Well, the bounty hunter we ran into on Ord Mantell changed my mind."</cite></p>
          <p className={styles.nameQuote}>― Han Solo —</p>   
        </div>                                        
      );
    case 'Unknown':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"I left for the Unknown Regions, determined to lose myself. I learned that unknown was not the same as empty."</cite></p>
          <p className={styles.nameQuote}>― Darth Krayt —</p>   
        </div>                                        
      );
    case 'Trandosha':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"I am Bossk from Trandosha! I did not come to Monad Outpost to die in this arena. But if I am to die tonight, I wish to die as a warrior."</cite></p>
          <p className={styles.nameQuote}>― Bossk —</p>   
        </div>                                        
      );
    case 'Mon Cala':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Mon Cala is a valuable world in many ways--its people, technology, and civilization. Why, Emperor Palpatine himself enjoys the Mon Calamari Aquatic Ballet."</cite></p>
          <p className={styles.nameQuote}>― Governor Wilhuff Tarkin —</p>   
        </div>                                        
      );
    case 'Sullust':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"What of the reports of the Rebel fleet massing near Sullust?"
"It is of no concern."</cite></p>
          <p className={styles.nameQuote}>― Darth Vader and Emperor Palpatine —</p>   
        </div>                                        
      );
    case 'Toydaria':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Perhaps you failed to pay attention to the Senate orientation. They should have explained that Toydaria is a neutral system."</cite></p>
          <p className={styles.nameQuote}>― Katuunko, King of Toydaria, to Bail Organa —</p>   
        </div>                                        
      );
    case 'Malastare':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"We need that treaty signed so we can gain access to the fuel reserves here on Malastare. Without it, our armies shall be vulnerable."</cite></p>
          <p className={styles.nameQuote}>― Supreme Chancellor Sheev Palpatine —</p>   
        </div>                                        
      );
    case 'Dathomir':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Warrior-like men, witches—this place is all kinds of fun."</cite></p>
          <p className={styles.nameQuote}>― Anakin Skywalker —</p>   
        </div>                                        
      );
    case 'Ryloth':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Another armed occupation is not a free Ryloth. How long before I am fighting you, Master Jedi?"</cite></p>
          <p className={styles.nameQuote}>― Cham Syndulla —</p>   
        </div>                                        
      );
    case 'Haruun Kal':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"…This particular Jedi—Master Depa Billaba—is hardly a threat. Our intelligence identifies her as a failed commander, a liability to the Republic. In fact, according to this, you yourself faced her on Haruun Kal…where you decimated her troops and very nearly ended her life."</cite></p>
          <p className={styles.nameQuote}>― General Kleeve —</p>   
        </div>                                        
      );
    case 'Cerea':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Please. Get me off this exhaustingly polite rock."</cite></p>
          <p className={styles.nameQuote}>― Archex —</p>   
        </div>                                        
      );
    case 'Glee Anselm':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"There&apos;s an ocean planet… home to Nautolans. Glee Anselm?"</cite></p>
          <p className={styles.nameQuote}>― Mace Windu —</p>   
        </div>                                        
      );
    case 'Iridonia':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"I was under the impression that Darth Maul&apos;s home world was Iridonia."
"Dathomir is the planet where Maul was raised. Iridonia is where the rest of the males of the species dwell."</cite></p>
          <p className={styles.nameQuote}>― Obi-Wan Kenobi and Mace Windu —</p>   
        </div>                                        
      );
    case 'Quermia':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"It is holy relic of the Quermian people! My people! It belongs back at home, not here, in this…this…shrine to wholesale cultural theft!"</cite></p>
          <p className={styles.nameQuote}>― Needle —</p>   
        </div>                                        
      );
    case 'Dorin':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Ahsoka and I were busy routing the Seppies near Dorin."</cite></p>
          <p className={styles.nameQuote}>― Anakin Skywalker —</p>   
        </div>                                        
      );
    case 'Champala':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Vice Chancellor, I imagine that fishing is a very popular pastime on your homeworld."
"Champala&apos;s seas are not what they once were, but yes, of course."</cite></p>
          <p className={styles.nameQuote}>― Orson Callan Krennic and Mas Amedda —</p>   
        </div>                                        
      );
    case 'Mirial':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"We&apos;re researching the effects…the fall of the Republic on planets like Utapau."
"Or Mirial! You know, out-of-the-way places that were abandoned after all the fighting, and no one stayed behind to clean up the mess. We&apos;re going there next, but Utapau was closer, so we started here first."</cite></p>
          <p className={styles.nameQuote}>― Karr Nuq Sin and Maize Raynshi —</p>   
        </div>                                        
      );
    case 'Concord Dawn':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"So, that&apos;s Concord Dawn. Sure looks like it&apos;s been through a war."</cite></p>
          <p className={styles.nameQuote}>― Hera Syndulla —</p>   
        </div>                                        
      );
    case 'Umbara':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Umbara was one of the major Separatist planets. The locals fought pretty hard, and got stomped pretty solidly."</cite></p>
          <p className={styles.nameQuote}>― Eli Vanto —</p>   
        </div>                                        
      );
    case 'Tatooine':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>"Well, if there&apos;s a bright center to the universe, you&apos;re on the planet that it&apos;s farthest from."</cite></p>
          <p className={styles.nameQuote}>― Luke Skywalker, to C-3PO —</p>   
        </div>                                        
      );
    case 'Kalee':
    case 'Shili':
    case 'Muunilinst':
    case 'Skako':
    case 'Ojom':
    case 'Zolan':
    case 'Iktotch':
    case 'Chandrila':
    case 'Polis Massa':
    case 'Felucia':
    case 'Socorro':
    case 'Aleen Minor':
    case 'Vulpter':
    case 'Troiken':
    case 'Tund':
    case 'Tholoth':
    case 'Serenno':
    default:
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}></cite></p>
          <p className={styles.nameQuote}></p>   
        </div>                                        
      );
  };
};

export default PlanetQuote;