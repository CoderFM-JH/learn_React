import styles from "./itemTache.module.css";

export const BlocDeChaqueTache = ({ tache,   modifierTache,   supprimerTache })=> {

   return (
      <>
         <li className={`${styles.composant} ${styles.default}`}
            onClick={() => modifierTache(tache.id, !tache.termine)} // permet de faire passer le 'termine:false' à 'termine:true'
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
                  supprimerTache(tache.id) //pour supprimer la tache de la liste
               }}
            >
               Tache terminée
            </button>
         </li>
      </>
   )
}