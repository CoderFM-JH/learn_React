// pour afficher les champs de saisis des taches

import { useState } from "react";
import styles from "./saisirTache.module.css";
//import { ajouterTache } from "./composants/composantsTaches.jsx";

// recupérer la propriété d'ajout de tache
export const SaisirTache = ({ajouterTache}) => {
   
   const [tache, setTache] = useState("");

   const gererChangementEntree = (element) => {
       // pour verifier la récupération de onChange={gererChangementEntree} dans 'input'
      setTache (element.target.value);
   };

   const gererAjoutDeTache = (element) => {
      element.preventDefault();
      if (tache.trim()) {
         ajouterTache(tache);
         setTache("");
      };
   };

   return(
      <>
         <div className={`box ${styles.element}`}>
            <h2 className={styles.titre}> <u>Saisir votre tache</u> :</h2>
            <form action="" className={styles.composant} onSubmit={gererAjoutDeTache}>
               <input type="text" className={styles.input}
                  placeholder="saisir votre tache ici..."
                  onChange={gererChangementEntree} // pour recupérer les entrées
                  value={tache}
                  required
               />
               <button type="submit" className={`button-primary ${styles.bouton}`}>
                  Ajouter la tache
               </button>
            </form>
         </div>
      </>
   );

};