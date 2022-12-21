import Alert from 'react-bootstrap/Alert';


function Footer(props) {
    return (
        <Alert key='light' variant='light'>
            {props.texto}
        </Alert>
    )
}

export default Footer