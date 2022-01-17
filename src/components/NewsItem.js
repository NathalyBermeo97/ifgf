import { Badge, Button, Card, Col } from "react-bootstrap";
import React from "react";

export const NewsItem = ({ news, onShowModal, handleDelete  }) => {
    console.log({ news });

    return (
        <Col
            style={{
                justifyContent: "center",
                display: "flex",
            }}
        >
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src="https://thumbs.dreamstime.com/b/muestra-y-s%C3%ADmbolo-del-vector-icono-de-las-noticias-aislados-en-el-fondo-blanco-concepto-logotipo-133757450.jpg"
                />
                <Card.Body>
                    <Card.Body>
                        <Card.Title>{news.title}</Card.Title>
                        <Card.Text>{news.description}</Card.Text>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "0px 5px",
                            }}
                        >
                            <Button size="sm" onClick={() => onShowModal(news)}>
                                Editar
                            </Button>
                            <br />
                            <Button
                                size="sm"
                                variant="danger"
                                onClick={() => handleDelete(news._id)}
                            >
                                Eliminar
                            </Button>
                        </div>

                    </Card.Body>
                </Card.Body>
            </Card>
        </Col>
    );
};