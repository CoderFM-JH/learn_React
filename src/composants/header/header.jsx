// composant pour afficher l'entete de l'application
   
import styles from "./header.module.css";
// import './header.css';
import logo from "../../assets/react.svg";

export const Header = () => {

   return(
      <>
      
         <div className={styles.composants}>

            <div className={styles.titleComposants}>
               {/* pour le titre de l'appli */}
               <img className="logo" src={logo} alt="logo" width={70} height={50} />
               <h1>ToDoList App</h1>
               <br />
               <div className="color-gray">
                  <code>Application de gestion de liste de taches</code>
               </div>
            </div>

            <code className={`color-primary ${styles.couleur}`}>
               v.1.1
            </code>

         </div>
      </>
   );
}