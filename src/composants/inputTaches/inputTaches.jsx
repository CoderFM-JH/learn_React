// pour afficher les champs de saisis des taches

import { useState } from "react";
import styles from "./inputTache.module.css";
//import { ajouterTache } from "./composants/composantsTaches.jsx";

// recupérer la propriété d'ajout de tache
export const InputTache = ({ajouterTache}) => {

   const [tache, setTache] = useState("");
      // console.log(tache);
      // console.log(ajouterTache);

   const handleInputChange = (e) => {//pour recupérer les saisis
      // console.log(e.target.value);
      setTache(e.target.value);
   };

   const handleAjouterTache = (e) => {//
      e.preventDefault();
      if (tache.trim()) { //la méthode '.trim()' permet de supprimmer les espacements en debut et fin de saisis
         ajouterTache(tache); //pour send la tache
         setTache(" "); // pour reinitialiser la zone de saisie de tache
      // console.log("envoi la tache", tache);
      } else {
         console.log("le champ de saisis de tache est vide !"); //empty = vide
      }
   };
   
   return(
      <>
         <div className={`box ${styles.element}`} > {/* pour introduire plusieurs classes: une classe générique'box' et une classe spécifique 'element' */}
            <h2 className={styles.title}> Ajouter une tache : </h2>
            <form action="" className={styles.composant} onSubmit={handleAjouterTache}> {/* 'onSubmit={handleAjouterTache}' permet de declancher la fonction d'ajout de tache à partir de handleAjouterTache*/} 
               <input type="text" className={styles.input}
                  placeholder="zone de saisie de taches"
                  onChange={handleInputChange} // appel de la fonction {handleInputChange}
                  value={tache}
                  required
               />
               <br />
               <button type="submit" className="button-primary">
                  Ajouter la tache
               </button>
            </form>
         </div>
      
      </>
   );

};