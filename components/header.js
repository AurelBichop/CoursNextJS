import React from "react";
import Link from "next/link"
import { useRouter } from "next/router";
import styles from "./header.module.css"

export const Header = () => {
    const router = useRouter()

    return (
        <div className={styles.header}>
            <Link href="/" passHref>
                <span className={router.pathname === "/" ? styles.active : styles.link}>Home</span>
            </Link>
            <Link href="/blog" passHref>
                <span className={router.pathname === "/blog" ? styles.active : styles.link}>Blog</span>
            </Link>
            <Link href="/profile" passHref>
                <span className={router.pathname === "/profile" ? styles.active : styles.link}>Profile</span>
            </Link>
            <Link href="/blog/item" passHref>
                <span className={router.pathname === "/blog/item" ? styles.active : styles.link}>Items</span>
            </Link>
            <Link href="/blog/categories" passHref>
                <span className={router.pathname === "/blog/categories" ? styles.active : styles.link}>Catégories</span>
            </Link>
            <Link href="/departements" passHref>
                <span className={router.pathname === "/departements" ? styles.active : styles.link}>Départements</span>
            </Link>
        </div>
    )
}

