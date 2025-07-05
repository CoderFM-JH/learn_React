// pour lister les taches

import styles from "./listeTaches.module.css";
import { ItemTache } from "../itemTache/itemTache.jsx";

export const ListeTaches = (
   {
      listTache,
      // pour l'item
      editTache,
      deleteTache,
      // pour la liste
      // tacheFinis,
      tacheNonFinis,
   }
) => {

   const listTachek = listTache.map((tache) => ( //boucle pour  afficher la liste des taches
      <ItemTache
         key={tache.id} 
         tache={tache} 
         editTache={editTache} 
         deleteTache={deleteTache} />
   ));   


   if (listTache ){
      return(
         <>
            <div className={styles.cadre}>
               <h2 className={styles.titre}>
                  Listes des {tacheNonFinis} taches à terminer :
               </h2>
               { listTache && listTache.length > 0 && (
                  <ul className={styles.composant}>
                     {/* <ItemTache /> */}
                     { listTachek }
                  </ul>
               ) }
               {/*                
                  {listTache && listTache.length > 0 && (
                  <ul className={styles.composant}>
                     {listTache.map((tache) => (
                        <ItemTache key={tache.id} />
                     ))}
                  </ul>
                  )} 
               */}
            </div>
         </>
      );
   } else {
      return(
         <>
         <div className="box">
            <div className={styles.cadre}>
               <h2 className={styles.titre}>
                  pas de tache à faire !
               </h2>
            </div>
         </div>
         </>
      );
   }
   
}


