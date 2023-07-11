import React from 'react';
import { Row, Col } from "react-bootstrap"
import storeItems from "../data/items.json"
import { StoreItem } from '../components/StoreItem';

export default function Store() {
    return (
        <React.Fragment>
            <Row xs={1} md={2} lg={3}>
                {storeItems?.map((item, index) => (
                    <Col key={index}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </React.Fragment>
    )
}
