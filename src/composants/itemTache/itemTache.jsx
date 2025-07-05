// pour l'affichage de tache

import styles from "./itemTache.module.css";

export const ItemTache = (
   {
      tache,
      editTache,
      deleteTache,
   }
) => {
   
   return(
      <>
         <li className={`${styles.composant} ${styles.default}`}
            onClick={() => editTache(tache.id, !tache.termine)} // permet de faire passer le 'termine:false' à 'termine:true'
         > {/*definition de classe conditionnée : className={`${condition} ${condition}`}*/}
            <div className={styles.item}>
               <div className={`${styles.idd}  ${styles.idDefault}`}> {/*  */}
                  {tache.id} 
               </div>
               <div className={styles.contentDefault}>
                  {tache.tache}
               </div>
            </div>
            <button className="button-primary"
               onClick={(e) =>{  // 'e'='event'
                  e.stopPropagation(); //pour séparer la propagation d'information entre les composants
                  deleteTache(tache.id)
               }}
            >
               Tache terminée
            </button>
         </li>
      </>
   );
   
}