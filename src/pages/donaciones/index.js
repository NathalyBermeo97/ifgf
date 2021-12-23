import React from "react";
import { Grid } from "@mui/material";
import styles from "../../styles/style.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import {Button} from "react-bootstrap";
const Donaciones = () => {
  return (
    <body className={styles.body}>
      <Navbar />

      <div className={styles.events}>
        <h1 className={styles.section}>DONACIONES</h1>
        <div className={styles.linea}></div>
      </div>

      <Grid container={12}>
        <Grid xs={8}>
          <div className={styles.formasdona}></div>
        </Grid>

        <Grid xs={4}>
          <div className={styles.formasdona}></div>
        </Grid>
      </Grid>
      <h2 className={styles.formasdona}>
        Puedes colaborar con la iglesia con los siguientes tipos de donaciones
      </h2>

      <section>
        <div className={styles.container}>
          <div className="row">
            <div className="col-12 col-sm-4">
              <img
                src="https://assets.change.org/photos/2/vq/dw/gmVqDwsBWiCaqot-800x450-noPad.jpg?1530696440"
                className={styles.imageDonacionestres}
                alt="..."
              />
              <div className={styles.titledona}>
                <h5 className="card-title">Donación económica</h5>
                <p className="card-text"></p>
                <Link
                    href="../donaciones/Donacioneconomica"
                    className="btn btn-primary"
                >
                  <Button variant="primary">
                    Ver más
                  </Button>

                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <img
                src="https://i1.wp.com/elmundoboston.com/wp-content/uploads/2020/04/alimentos.jpeg?fit=1800%2C1200&ssl=1"
                className={styles.imageDonacionestres}
                alt="..."
              />
              <div className={styles.titledona}>
                <h5 className="card-title">Donación de alimentos</h5>
                <p className="card-text"></p>
                <Link
                    href="../donaciones/Donacionalimentos"
                    className="btn btn-primary"
                >
                  <Button variant="primary">
                    Ver más
                  </Button>

                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <img
                src="https://www.caritas.org.mx/wp-content/uploads/2020/05/moda-sostenible-cuida-al-planeta-y-ayuda-a-otros-con-tu-ropa-1024x768.jpg"
                className={styles.imageDonacionestres}
                alt="..."
              />
              <div className={styles.titledona}>
                <h5 className="card-title">Donación de ropa</h5>
                <p className="card-text"></p>
                <Link
                  href="../donaciones/Donacionropa"
                  className="btn btn-primary"
                >
                  <Button variant="primary">
                    Ver más
                  </Button>

                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </body>
  );
};
export default Donaciones;
