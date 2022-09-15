import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Carditem({ productname, productUrl, prodesc}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={productUrl} />
            <Card.Body>
                <Card.Title>{productname}</Card.Title>
                <Card.Text>{prodesc}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default Carditem;