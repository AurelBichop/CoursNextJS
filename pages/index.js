import React, { useEffect } from "react";
import { Layout } from "../components/layout";
import axios from "axios";
import Link from "next/link"
import Head from "next/head";

const Home = ({ data }) => {
  const styles = {
    paddind: 10,
    margin: 10,
    borderBottom: "1px solid #DDD"
  }

  useEffect(() => {
    localStorage.setItem("jwt-token", "tooijtreiohfuegf");
  }, [])

  console.log(process.env.API_ROOT)
  console.log(process.env.NEXT_PUBLIC_API_ROOT)
  return (
    <>
      <Head>
        <title>Liste des Régions</title>
      </Head>
      <Layout>
        <div className="container">
          <img src="/images/dragon.png" />
          <h1>Cette page utilise getServerSideProps</h1>
          {
            data.map(region => (
              <div style={styles} key={region.code}>
                <Link href="/region/[code]" as={`/region/${region.code}`} passHref>
                  <h1>{region.nom}</h1>
                </Link>
                <p>
                  {region.code}
                </p>
              </div>
            ))
          }
        </div>
      </Layout>
    </>

  )
}

export async function getServerSideProps(context) {
  const url = process.env.API_GEO;
  const { data } = await axios.get(url + "/regions")

  console.log(process.env.API_ROOT)
  return {
    props: {
      data
    }
  }

}


export default Home;