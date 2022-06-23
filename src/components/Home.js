import React, {useState, useEffect} from "react";
import firebaseApp from "../credenciales";
import {getAuth, signOut} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"
import { Container, Button } from "react-bootstrap";
import AgregarTarea from "./AgregarTarea";
import ListadoTareas from "./ListadoTareas";

const auth = getAuth(firebaseApp);

export const Home = () => {
  const fakeData = [{id: 1, descripcion: "prueba1", tautor: "prueba1", talbum: "prueba1", tgenero:"prueba1", url:"https://picsum.photos/420"},
  {id: 2, descripcion: "prueba1", tautor: "prueba1", talbum: "prueba1", tgenero:"prueba1", url:"https://picsum.photos/420"},
  {id: 3, descripcion: "prueba1", tautor: "prueba1", talbum: "prueba1", tgenero:"prueba1", url:"https://picsum.photos/420"}
]
  return(
    <Container>
        <h4>Hola, Sesión Iniciada</h4>
        <Button onClick={() => signOut(auth)}>
            Cerrar Sesión
        </Button>
        <hr/>
        <AgregarTarea/>
        <ListadoTareas arrayTareas = {fakeData}/>

    </Container>
    
);
};

export default Home;
