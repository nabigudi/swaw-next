import styles from './PlanetQuote.module.scss';

interface PlanetQuoteProps {
  planetName: string;
}
export const PlanetQuote = ({planetName}: PlanetQuoteProps) => {
  switch (planetName){
    case 'Alderaan':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;The galaxy knows Alderaan as &quot;the planet of beauty&quot;. Nature, poetry, philosophy, art, couture, cuisine—we freely share all with all.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Bail Organa —</p>   
        </div>                                        
      );
    case 'Bespin':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Bespin. It&quot;s pretty far, but I think we can make it.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Captain Han Solo —</p>   
        </div>                                        
      );
    case 'Coruscant':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Coruscant, the capital of the Republic. The entire planet is one big city.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Ric Olié —</p>   
        </div>                                        
      );
    case 'Dagobah':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Strong this planet is with the Force.&rdquo;
&ldquo;It is one of the purest places in the galaxy.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Yoda and the spirit of Qui-Gon Jinn —</p>   
        </div>                                        
      );
    case 'Endor':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Oh, I told you it was dangerous here!&rdquo;</cite></p>
          <p className={styles.nameQuote}>― C-3PO —</p>   
        </div>                                        
      );
    case 'Hoth':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;There isn&quot;t enough life on this ice cube to fill a space cruiser!&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Captain Han Solo —</p>   
        </div>                                        
      );
    case 'Kamino':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Bespin. It&quot;s pretty far, but I think we can make it.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Captain Han Solo —</p>   
        </div>                                        
      );
    case 'Naboo':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Naboo represents the best of the Old Republic.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Leia Organa, to Queen Sosha Soruna —</p>   
        </div>                                        
      ); 
    case 'Yavin IV':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Welcome to Yavin 4....There are cells gathered here from every corner of the galaxy.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Rebel Captain Garazeb Orrelios —</p>   
        </div>                                        
      );
    case 'Geonosis':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;This planet is rotten from the inside out.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Jedi Knight Anakin Skywalker —</p>   
        </div>                                        
      );
    case 'Utapau':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Greetings, young Jedi. What brings you to our remote sanctuary?&rdquo;
          &ldquo;Unfortunately, the war.&rdquo;
          &ldquo;There&quot;s no war here. Unless you brought it with you.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Tion Medon and Obi-Wan Kenobi —</p>   
        </div>                                        
      );
    case 'Mustafar':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;I&quot;ve only heard that name once. From Kanan. He said Mustafar is where Jedi go to die.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Hera Syndulla —</p>   
        </div>                                        
      );
    case 'Kashyyyk':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;It is settled then. Yoda will take a battalion of clones to reinforce the Wookiees on Kashyyyk.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Jedi Master Mace Windu —</p>   
        </div>                                        
      );
    case 'Mygeeto':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Galen, you know where these came from.&rdquo;
          &ldquo;Mygeeto, perhaps.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Lyra and Galen Erso —</p>   
        </div>                                        
      );
    case 'Cato Neimoidia':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;This is hardly your planet anymore—not since you signed your holdings over to the Banking Clan in return for a stake in this new droid foundry.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Senator Rush Clovis of the InterGalactic Banking Clan, to Senator Lott Dod of the Trade Federation —</p>   
        </div>                                        
      );
    case 'Saleucami':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;So... I see the war has finally made its way out here, and I guess I can expect a visit from some droids soon.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Cut Lawquane —</p>   
        </div>                                        
      );
    case 'Stewjon':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Well I can&quot;t say I really remember. I was very young when I left my homeworld.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Obi-Wan Kenobi, to Anakin Skywalker —</p>   
        </div>                                        
      );
    case 'Eriadu':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Under Tarkin&quot;s rule, Eriadu finally achieved the celebrity it had been clamoring for. It became the rising star, planet other eager-to-be-exploited worlds began looking up to.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Berch Teller —</p>   
        </div>                                        
      );
    case 'Corellia':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Well, I admire anyone who can crawl their way out of the sewer. Especially a sewer as putrid as Corellia.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Dryden Vos, to Han Solo —</p>   
        </div>                                        
      );
    case 'Rodia':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;A jungle world. Domed cities I see. Rodia it is.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Yoda —</p>   
        </div>                                        
      );
    case 'Nal Hutta':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Nothing&quot;s free on Nal Hutta.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― An Ithorian bartender to Anakin Skywalker —</p>   
        </div>                                        
      );
    case 'Dantooine':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Dantooine? That&quot;s in the middle of nowhere.&rdquo;
          &ldquo;That&quot;s the whole point. Where else could the rebels hide?&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Thane Kyrell and an Imperial officer —</p>   
        </div>                                        
      );
    case 'Bestine IV':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;I realize that you have been successful in shipping lommite through Malastare, and circling around Bestine to reach Fondor and the Core. But where will Eriadu be when Fondor opts to join the Confederacy?&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Dooku questions Tarkin on his plans for the oncoming Clone Wars —</p>   
        </div>                                        
      );
    case 'Ord Mantell':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Well, the bounty hunter we ran into on Ord Mantell changed my mind.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Han Solo —</p>   
        </div>                                        
      );
    case 'Unknown':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;I left for the Unknown Regions, determined to lose myself. I learned that unknown was not the same as empty.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Darth Krayt —</p>   
        </div>                                        
      );
    case 'Trandosha':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;I am Bossk from Trandosha! I did not come to Monad Outpost to die in this arena. But if I am to die tonight, I wish to die as a warrior.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Bossk —</p>   
        </div>                                        
      );
    case 'Mon Cala':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Mon Cala is a valuable world in many ways--its people, technology, and civilization. Why, Emperor Palpatine himself enjoys the Mon Calamari Aquatic Ballet.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Governor Wilhuff Tarkin —</p>   
        </div>                                        
      );
    case 'Sullust':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;What of the reports of the Rebel fleet massing near Sullust?&rdquo;
          &ldquo;It is of no concern.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Darth Vader and Emperor Palpatine —</p>   
        </div>                                        
      );
    case 'Toydaria':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Perhaps you failed to pay attention to the Senate orientation. They should have explained that Toydaria is a neutral system.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Katuunko, King of Toydaria, to Bail Organa —</p>   
        </div>                                        
      );
    case 'Malastare':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;We need that treaty signed so we can gain access to the fuel reserves here on Malastare. Without it, our armies shall be vulnerable.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Supreme Chancellor Sheev Palpatine —</p>   
        </div>                                        
      );
    case 'Dathomir':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Warrior-like men, witches—this place is all kinds of fun.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Anakin Skywalker —</p>   
        </div>                                        
      );
    case 'Ryloth':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Another armed occupation is not a free Ryloth. How long before I am fighting you, Master Jedi?&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Cham Syndulla —</p>   
        </div>                                        
      );
    case 'Haruun Kal':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;This particular Jedi—Master Depa Billaba—is hardly a threat. Our intelligence identifies her as a failed commander, a liability to the Republic. In fact, according to this, you yourself faced her on Haruun Kal…where you decimated her troops and very nearly ended her life.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― General Kleeve —</p>   
        </div>                                        
      );
    case 'Cerea':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Please. Get me off this exhaustingly polite rock.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Archex —</p>   
        </div>                                        
      );
    case 'Glee Anselm':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;There&quot;s an ocean planet… home to Nautolans. Glee Anselm?&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Mace Windu —</p>   
        </div>                                        
      );
    case 'Iridonia':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;I was under the impression that Darth Maul&quot;s home world was Iridonia.&rdquo;
          &ldquo;Dathomir is the planet where Maul was raised. Iridonia is where the rest of the males of the species dwell.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Obi-Wan Kenobi and Mace Windu —</p>   
        </div>                                        
      );
    case 'Quermia':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;It is holy relic of the Quermian people! My people! It belongs back at home, not here, in this…this…shrine to wholesale cultural theft!&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Needle —</p>   
        </div>                                        
      );
    case 'Dorin':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Ahsoka and I were busy routing the Seppies near Dorin.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Anakin Skywalker —</p>   
        </div>                                        
      );
    case 'Champala':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Vice Chancellor, I imagine that fishing is a very popular pastime on your homeworld.&rdquo;
          &ldquo;Champala&quot;s seas are not what they once were, but yes, of course.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Orson Callan Krennic and Mas Amedda —</p>   
        </div>                                        
      );
    case 'Mirial':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;We&quot;re researching the effects…the fall of the Republic on planets like Utapau.&rdquo;
          &ldquo;Or Mirial! You know, out-of-the-way places that were abandoned after all the fighting, and no one stayed behind to clean up the mess. We&quot;re going there next, but Utapau was closer, so we started here first.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Karr Nuq Sin and Maize Raynshi —</p>   
        </div>                                        
      );
    case 'Concord Dawn':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;So, that&quot;s Concord Dawn. Sure looks like it&quot;s been through a war.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Hera Syndulla —</p>   
        </div>                                        
      );
    case 'Umbara':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Umbara was one of the major Separatist planets. The locals fought pretty hard, and got stomped pretty solidly.&rdquo;</cite></p>
          <p className={styles.nameQuote}>― Eli Vanto —</p>   
        </div>                                        
      );
    case 'Tatooine':
      return (
        <div className={styles.quote}>
          <p><cite className={styles.planetQuote}>&ldquo;Well, if there&quot;s a bright center to the universe, you&quot;re on the planet that it&quot;s farthest from.&rdquo;</cite></p>
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