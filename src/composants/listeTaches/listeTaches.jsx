import styles  from "./listeTaches.module.css";
import { BlocDeChaqueTache } from "../itemTache/blocDeTache.jsx";

// Composant pour afficher la liste des tâches

export const ListeTaches = ({ lesTaches,   modifierTache,   supprimerTache }) => {

   const lesTachek = lesTaches.map((tache) => ( //boucle pour  afficher la liste des taches
      <BlocDeChaqueTache 
         key={tache.id} // pour donner une valeur unique à chaque élément de la liste
         tache={tache} 
         modifierTache={modifierTache} 
         supprimerTache={supprimerTache} />
   )); 

   if (lesTachek && lesTachek.length > 0) {
      return (
      <>
         <div className={`box ${styles.element} ${styles.cadre}`}>
            <h2 className={styles.titre}> <u>Liste des taches à terminer</u> :</h2>
            { lesTaches && lesTaches.length > 0 && (
               <ul className={styles.composant}>
                  {/* <BlocDeChaqueTache /> */}
                  { lesTachek }
               </ul>
            ) }
         </div>
      </>
      );
   } else {
      return (
      <>
         <div className={`box ${styles.element} ${styles.cadre}`}>
            <h2 className={styles.titre}>Pas de tache à terminer</h2>
         </div>
      </>
      );
   }
   
};
   
   