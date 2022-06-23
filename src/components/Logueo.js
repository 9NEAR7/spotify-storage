import React, {useState} from 'react'
import { Container, Stack, Form, Button } from 'react-bootstrap';




export const Logueo = () => {

  const [estaRegistrandose, setEstaRegistrandose] = useState(false);

  return (
    <Container>
      <Stack gap={3}>
        <h1>{estaRegistrandose ? "Regístrate" : "Inicia Sesión"}</h1>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    {estaRegistrandose ? "Regístrate" : "Inicia Sesión"}
  </Button>
</Form>

<Button variant="primary" type="submit">
    Acceder con Google
  </Button>

  <Button variant="primary" type="submit" onClick = {()=> setEstaRegistrandose(!estaRegistrandose)}>
    {estaRegistrandose ? "¿Ya tienes Cuenta? Inicia sesión" : "¿No tienes Cuenta? Regístrate"}
  </Button>
      </Stack>
    </Container>
  )
}

export default Logueo;
