import React, { useEffect, useState } from "react";
import { useVideos } from "../../hooks/useVideos";
import {
  Col,
  Row,
  Container,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import styles from "../../styles/events.module.css";
import { ListOfVideos } from "../../components/ListOfVideos";



const HomeVideos = ({}) => {
  const { videos } = useVideos();
  const [keyword, setKeyword] = useState("");
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    const filteredVideos = videos.filter((ni) =>
      ni.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredVideos(filteredVideos);
  }, [keyword, videos]);

  return (
    <>
      <Container>
      <div className={styles.news}>
        <h1 className={styles.section}>Videos</h1>
        <div className={styles.linea}></div>
      </div>
        <div className={styles.info}>
          <p>
            En esta sección puede visualizar videos referentes a la Iglesia IFGF
          </p>
        </div>
        <InputGroup className="mb-3" style={{ padding: "15px" }}>
          <FormControl
            placeholder="Buscar vídeo"
            aria-label="search_new"
            aria-describedby="basic-addon1"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </InputGroup>
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px 0px",
            }}
          >
            <ListOfVideos videos={filteredVideos} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default HomeVideos;
