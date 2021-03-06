import React from "react";
import { Layout } from "../components/layout";
import axios from "axios";
import Head from "next/head";

const Departements = ({ data }) => {
    const style = {
        padding: 10,
        margin: 10,
        borderBottom: "1px solid #DDD"
    }

    return (
        <>
            <Head>
                <title>Liste des Départements</title>
            </Head>
            <Layout>
                <h1>Cette page utilise getInitialProps</h1>
                {
                    data.map(departement => (
                        <div style={style} key={departement.code}>
                            <h1>{departement.nom}</h1>
                            <div>Code de département : {departement.code}</div>
                            <div>Code de la region : {departement.codeRegion}</div>
                        </div>


                    ))
                }
            </Layout>
        </>
    )
}

Departements.getInitialProps = async (context) => {
    const url = "https://geo.api.gouv.fr/departements";
    const { data } = await axios.get(url)

    return {
        data
    }
}


export default Departements;