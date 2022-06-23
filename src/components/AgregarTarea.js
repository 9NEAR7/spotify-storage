import React from 'react';
import { Container, Form , Col, Row, Button } from 'react-bootstrap';
import firebaseApp from '../credenciales';
import { getFirestore, updateDoc, doc } from 'firebase/firestore';
const firestore = getFirestore(firebaseApp)

const AgregarTarea = ({correoUsuario, setArrayTareas, arrayTareas}) => {

  async function añadirTarea(e){
    e.preventDefault();
    const descripcion = e.target.formDescripcion.value;
    const tautor = e.target.formtautor.value;
    const talbum = e.target.formtalbum.value;
    const tgenero = e.target.formtgenero.value;
    //crear nvo array
    const nvoArrayTareas = [...arrayTareas, {id: + new Date(), descripcion:descripcion, tautor: tautor, talbum: talbum, tgenero: tgenero, url: "htttps://picsum/photos/420"},];
    //act BD
    const docuRef = doc(firestore, `usuarios/${correoUsuario}`);
    updateDoc(docuRef, {tareas:[...nvoArrayTareas]});
    setArrayTareas(nvoArrayTareas);

    e.target.formDescripcion.value = "";
    e.target.formtautor.value = "";
    e.target.formtalbum.value = "";
    e.target.formtgenero.value = "";
  }

  return (
    <Container>
      <>
      <Form onSubmit={añadirTarea}>
      <Row className="mb-5">
        <Col><Form.Control
              type="text"
              placeholder="Título Cancion"
              id="formDescripcion"
            /></Col>
        <Col>
        <Form.Control
              type="text"
              placeholder="Autor"
              id="formtautor"
            /></Col>
        <Col><Form.Control
              type="text"
              placeholder="Album"
              id="formtalbum"
            /></Col>
        <Col><Form.Control
              type="text"
              placeholder="Género"
              id="formtgenero"
            /></Col>
        <Col><Form.Control
              type="file"
              placeholder="Añade archivo"
              style={{ width: "400px" }}
              
            /></Col>
        <Col>  <Button type="submit"> Agregar Canción</Button></Col>
        </Row>
      </Form>
      <br></br>
      </>

    </Container>
  )
}

export default AgregarTarea;