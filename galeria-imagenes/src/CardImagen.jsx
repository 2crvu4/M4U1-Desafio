import React from 'react';
import {Card, Button} from 'react-bootstrap';

const CardImagen = (props) => {
    return (
        <div>
            {/* -----    Imagen 1 .  -------*/}

            <Card style={{width: "18rem"}}>
                <Card.Img style={{height: "14rem"}} variant="top" src={props.imagen}/>
                <Card.Body>
                    <Card.Title>{props.titulos}</Card.Title>
                    <Card.Text>{props.descripcion}</Card.Text>
                    <Button variant="success">Ver Mas</Button>
                </Card.Body>
            </Card>
            <br></br>

        </div >
    );
}

export default CardImagen

