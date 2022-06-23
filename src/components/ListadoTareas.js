import React from 'react'
import { Stack, Container, Row, Col, Button} from "react-bootstrap"

export const ListadoTareas = ({arrayTareas}) => {
  return (
    <Container>
        <Stack>
            {arrayTareas.map((objetoTarea)=>{
                return(
                    <Row>
                        <Col>{objetoTarea.descripcion}</Col>
                        <Col>{objetoTarea.tautor}</Col>
                        <Col>{objetoTarea.talbum}</Col>
                        <Col>{objetoTarea.tgenero}</Col>
                        <Col><Button>Ver Archivo</Button></Col>
                        <Col><Button>Eliminar Canción</Button></Col>
                    </Row>
                )
            })}
        </Stack>
    </Container>
  )
}


export default ListadoTareas;