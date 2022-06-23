import React from 'react'
import { Stack, Container, Row, Col, Button} from "react-bootstrap"
import firebaseApp from '../credenciales';
import { getFirestore, updateDoc, doc } from 'firebase/firestore';

const firestore = getFirestore(firebaseApp);

const ListadoTareas = ({arrayTareas, correoUsuario, setArrayTareas}) => {

    async function eliminarTarea(idTareaAEliminar ){
        const nvoArrayTareas = arrayTareas.filter((objetoTarea) => objetoTarea.id !== idTareaAEliminar);

        //actulizar BD
        const docuRef = doc(firestore, `usuarios/${correoUsuario}`);

        updateDoc (docuRef, {tareas: [...nvoArrayTareas]})
        //act state
        setArrayTareas(nvoArrayTareas);



    }
  return (
    <Container>
        <Stack>
            {arrayTareas.map((objetoTarea)=>{
                return(
                    <>
                    <Row>
                        <Col>{objetoTarea.descripcion}</Col>
                        <Col>{objetoTarea.tautor}</Col>
                        <Col>{objetoTarea.talbum}</Col>
                        <Col>{objetoTarea.tgenero}</Col>
                        <Col><Button>Ver Archivo</Button></Col>
                        <Col><Button onClick = {()=>eliminarTarea(objetoTarea.id)}>Eliminar Canción</Button></Col>
                    </Row>
                    <hr></hr>
                    </>
                )
            })}
        </Stack>
    </Container>
  )
}


export default ListadoTareas;