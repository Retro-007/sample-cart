import { Button, ButtonGroup, Card } from "react-bootstrap"
import { formatCurrency } from '../utilities/formatCurrency';
import { BiPlus, BiMinus, BiTrash } from 'react-icons/bi';
import { useShoppingCart } from "../context/ShoppingCartContext";
type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }:
    StoreItemProps) {

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()


    const quantity = getItemQuantity(id);


    return (
        <Card className="my-3">
            <Card.Img style={{
                width: 'auto',
                height: '240px',
                objectFit: 'cover'
            }} variant="top" src={imgUrl} />
            <Card.Body >

                <Card.Title className="d-flex fs-6  align-items-center justify-content-between">
                    <span className="fs-6"> {name}</span>
                    <span className="fs-6  text-muted"> {formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">

                    {quantity > 0 ?
                        <div style={{ gap: '.5rem' }} className="d-flex flex-column align-items-center">
                            <div className="d-flex flex-row justify-content-center align=-items-center" style={{ gap: '.5rem' }}>
                                <ButtonGroup aria-label="Basic example">
                                    <Button className="" onClick={() => increaseCartQuantity(id)} variant="primary"><BiPlus /></Button>
                                    <Button className="" variant="primary">{quantity}</Button>
                                    <Button className="" onClick={() => decreaseCartQuantity(id)} variant="primary"><BiMinus /></Button>
                                </ButtonGroup>
                            </div>
                            <Button variant="danger" onClick={() => removeFromCart(id)}><BiTrash /></Button>
                        </div>
                        :
                        <Button className="w-100" onClick={() => increaseCartQuantity(id)}>+ Add to Cart</Button>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}