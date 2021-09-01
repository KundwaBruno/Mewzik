/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Layout from "../components/layout/layout";
import Nav from "../components/Navigation/nav";
import BodySection from "../components/BodySection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mewzic | Listen free music</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Nav />
        <BodySection />
      </Layout>
    </>
  );
}
