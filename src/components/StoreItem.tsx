import { Card } from "react-bootstrap"
import { formatCurrency } from '../utilities/formatCurrency';

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }:
    StoreItemProps) {

    const quantity = 0;


    return (
        <Card className="my-3">
            <Card.Img style={{
                width: 'auto',
                height: '240px',
                objectFit: 'cover'
            }} variant="top" src={imgUrl} />
            <Card.Body className="d-flex  align-items-center justify-content-between">

                <Card.Title className="fs-6 ">{name}</Card.Title>
                <Card.Title className="fs-6 text-muted">{formatCurrency(price)}</Card.Title>
            </Card.Body>
        </Card>
    )
}