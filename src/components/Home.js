import React, {useState, useEffect} from "react";
import firebaseApp from "../credenciales";
import {getAuth, signOut} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"
import { Container, Button } from "react-bootstrap";

const auth = getAuth(firebaseApp);

export const Home = () => {
  return(
    <Container>
        <h4>Hola, Sesión Iniciada</h4>
        <Button onClick={() => signOut(auth)}>
            Cerrar Sesión
        </Button>
        <hr/>

    </Container>
    
);
};

export default Home;
