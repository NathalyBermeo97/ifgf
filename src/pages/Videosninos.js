import React from "react";
import {Grid} from "@mui/material";
import styles from '../styles/style.module.css';
import Search from "../components/Search";
import Filtroninos from "../components/Filtroninos";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Videosninos = () => {
    return (
        <body className={styles.body} >
        <Header/>
        <Navbar/>
        <div>
            <h1 className={styles.section} >
                VIDEOS
            </h1>
            <div className={styles.linea}></div>
        <Grid container={12}>
            <Grid xs={8}>
                <div className={styles.formasdona}>
                    <Search/>

                </div>

            </Grid>



            <Grid xs={4} >
                <div  className={styles.formasdona}>
                    <Filtroninos/>

                </div>

            </Grid>

        </Grid>
            <h2 className={styles.infoDona}>
                Casa de paz kids
            </h2>


            <Grid container={12}>
                <Grid xs={6} className={styles.videos}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_D98lNgrIQo"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </Grid>
                <Grid xs={6} className={styles.videos}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ClEgudNjx1Q"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </Grid>

            </Grid>
            <Grid container={12}>
                <Grid xs={6} className={styles.videos}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/U0nKheYhD9I"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </Grid>
                <Grid xs={6} className={styles.videos}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/AmwP1krioik"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </Grid>

            </Grid>


        </div>
        </body>




    )
}
export default Videosninos;