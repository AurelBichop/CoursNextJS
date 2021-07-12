import React from "react";
import { Layout } from "../components/layout";
import Link from "next/link"
import axios from "axios";
import Head from "next/head";

const PostLink = ({ titre }) => (
    <li>
        <Link href="/blog/[titre]" as={`/blog/${titre}`}>
            <a>{titre}</a>
        </Link>
    </li>
);

const Blog = ({ posts }) => {
    const styles = {
        main: {
            padding: 20,
            margin: 20,
            borderBottom: "1px solid #DDD"
        },
        img: {
            heigth: 200,
            width: 300,
        }
    }

    return (
        <>
            <Head>
                <title>Liste des Blog</title>
            </Head>
            <Layout>
                <h1>Cette page utilise getStaticProps</h1>
                {posts.map((post) => (
                    <div style={styles.main} key={post.id}>
                        <h1>{post.title}</h1>
                        <Link href="/blog/[id]" as={`/blog/${post.id}`} passHref>
                            <div>
                                <img src={post.pictures[0]} style={styles.img} />
                            </div>
                        </Link>
                    </div>
                ))
                }
            </Layout >
        </>
    )
}

export const getStaticProps = async (context) => {
    const url = "https://aqueous-meadow-07678.herokuapp.com"
    const { data } = await axios.get(`${url}/api/posts`);
    const posts = data.data;

    return {
        props: {
            posts,
        },
    };
};

export default Blog;