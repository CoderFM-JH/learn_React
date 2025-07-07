
import { Header } from "./header/header.jsx";
import { Footer } from "./footer/footer.jsx";
import { ListeTaches } from "./listeTaches/listeTaches.jsx";
// import { BlocDeChaqueTache } from "./itemTache/blocDeTache.jsx";
import { SaisirTache } from "./saisirTaches/saisirTaches.jsx";
import { useState } from "react";


// // composant pour afficher toutes les fonctionnalités
export const ComposantPrincipal = () => {

   const [lesTaches, setTaches] = useState([
      /*
      {
         id: 1,
         tache: "programmer",
         terminee: false
      },
      {
         id: 2,
         tache: "concevoir un système",
         terminee: true
      },
      {
         id: 3,
         tache: "déployer l'application",
         terminee: false
      }
      */
   ]);
   // console.log("liste des taches",lesTaches);

   const ajouterTache = (tache) => {
      const nouvelleTache = {
         id: lesTaches.length + 1 , // pour avoir l'id de la nouvelle tache
         tache: tache,
         terminee: false
      };
      setTaches([...lesTaches, nouvelleTache]);
   };

   const modifierTache = (id, etatTache) => {
      setTaches(
         lesTaches.map((tache) =>   tache.id === id ? {...tache, terminee: etatTache} :tache  )
      );
   };

   const supprimerTache = (id) => {
      setTaches(
         lesTaches.filter((tache) =>   tache.id !== id   )
      );
   };

   // const compterLesTaches = () => {
   //    const tachesTerminees = lesTaches.filter((tache) => tache.terminee === true ).length;
   //    const tachesNonTermines = lesTaches.length - tachesTerminees ;
   //    return(
   //       tachesTerminees, tachesNonTermines
   //    );
   // };
   // const {tachesTerminees, tachesNonTermines} = compterLesTaches();
   // // console.log(tachesTerminees, tachesNonTermines);

   return(
      <>
         <main>
            <Header />
            <SaisirTache ajouterTache={ajouterTache} />
            <ListeTaches lesTaches={lesTaches} 
               modifierTache={modifierTache} 
               supprimerTache={supprimerTache} 
            />
            {/* <BlocDeChaqueTache />v */}
            <Footer />
         </main>
      </>
   );
}



