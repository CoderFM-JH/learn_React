

import { Header } from "./header/header.jsx";
import { InputTache } from "./inputTaches/inputTaches.jsx";
import { ListeTaches } from "./listeTaches/listeTaches.jsx";
import { Footer } from "./footer/footer.jsx";
import { useState } from "react";

// composant pour afficher toutes les fonctionnalités
export const ComposantTaches = () => {

   const [listTache, setListTache] = useState(
      [
         //tableau de valeur pour le hook useState
         {/*
         {
            id: 1,
            tache: "finir le travail",
            termine: false,
         },
         {
            id: 2,
            tache: "réparer la machine",
            termine: false,
         },
         {
            id: 3,
            tache: "netoyer l'écran",
            termine: true,
         },
         */}
      ]
   );

   console.log("liste de tache:", listTache);

   const ajouterTache = (laTache) => {
      const newTache = {
         // id: 5,
         // id: listTache.length + 1,
         id: listTache.length ? listTache[listTache.length - 1].id + 1 : 1, //pour éviter les 'id' aléatoires
         tache: laTache,
         termine: false,
      };
      //mettre la liste à jour avec l'ajout de nouvelle tache à la liste
      setListTache([...listTache, newTache])
   };
   // console.log(listTache.length); // la propriété 'length' permet de compter le nombre d'element

   const editTache = (id, tacheTermine) => { //fonction pour ajouter la tache à la liste
      setListTache(
         listTache.map( (tache) =>
            tache.id === id ? { ...tache, termine: tacheTermine}: tache
         )
      );
   };

   const deleteTache = (id) => { //fonction pour supprimer la tache à la liste
      setListTache(
         listTache.filter( (tache) => 
            tache.id !== id // filtrer les éléments de la liste afin de recupérer et réafficher tout les éléments <> de l'id sélectionné
         )
      );
   };

   const getCountTache = () => {
      const tacheFinis = listTache.filter( (tache) => 
            tache.termine === true
         ).length;
      const tacheNonFinis = listTache.length - tacheFinis;
      return (
         tacheFinis,
         tacheNonFinis
      );
   }
      // pour afficher les résultats
   const {tacheFinis, tacheNonFinis} = getCountTache;
   console.log(tacheFinis, tacheNonFinis);

   return(
      <>
         <main>
            <Header />
            <InputTache ajouterTache={ajouterTache} /> 
            <ListeTaches 
               listTache={listTache} 
               editTache={editTache} 
               deleteTache={deleteTache} 
               tacheFinis={tacheFinis}
               tacheNonFinis={tacheNonFinis}
            />
            <Footer />
         </main>
      </>
   );
}



{/* 
   explications:

   importer le composant {ComposantTaches} de composantsTaches.jsx dans App
   création du 'header'

   dans le 'inputTaches':
   créer le composant 'inputTache.jsx'

   dans le 'listeTaches':
   créer le composant 'listeTaches.jsx'

   dans le 'itemTache':
   créer le composant 'itemTache.jsx' et l'importer dans le 'listTaches.jsx'

   réaliser le footer

*/}

