import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/style.module.css';

import Cards from "../components/Cards";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid} from "@material-ui/core";
import Carousel from "../components/Carousel"
import Header from "../components/Header";
import Headernologin from "../components/Headernologin";
import Navbar from "../components/Navbar";
import Navbarnologin from "../components/Navbarnologin";


export default function Indexnologin() {
    return (
        <body className={styles.body} >
        <Headernologin/>
        <Navbarnologin/>
        <Carousel/>

        <div className={styles.events}>

            <h1 className={styles.section}>
                Conoce nuestros eventos
            </h1>
            <div className={styles.linea}></div>

        </div>
        <Cards/>

        <div className={styles.news}>

            <h1 className={styles.section}>
                Entérate de nuestras noticias
            </h1>
            <div className={styles.linea}></div>

        </div>


        <div className="container" >

            <div className="row">
                <div className="col-sm-6">
                    <img className={styles.imageinfo} src="data:image/jpeg;base64,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"  alt="..."/>

                </div>
                <div className="col-sm-6">
                    <div className={styles.card}>
                    </div>
                </div>
            </div>
        </div>




        <div className={styles.donaciones}>
            <Grid container={12}>


                <Grid xs={6}>
                    <h1>
                        Tu donación nos ayuda a llevar este mensaje al mundo
                    </h1>

                    <div className={styles.btndonaciones}>
                        <button type="button" className="btn btn-primary">Donar aquí</button>
                    </div>


                </Grid>
                <Grid xs={6}>
                    <h1>
                        <img className={styles.imagedonaciones} src="https://wwwhatsnew.com/wp-content/uploads/2018/01/PayPal-tarjeta-de-credito.jpg"/>
                    </h1>

                </Grid>



            </Grid>


        </div>

        </body>
    )
}
