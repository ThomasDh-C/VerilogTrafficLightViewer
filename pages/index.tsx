import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Row, Col } from 'antd';
import ImportFromFile from './components/ImportFromFile'

const Home = () => {
  const [vcdObj, setVCD] = React.useState({})

  return (
    <div className={styles.container}>
      <Head>
        <title>Traffic Light</title>
        <link rel="icon" href="/PUwhite.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}> VCD viewer </h1>
        <ImportFromFile setVCD={setVCD} />
        <Row>
          <Col span={6}>col-6</Col>
          <Col span={18}>col-18</Col>
        </Row>
      </main>

      <footer className={styles.footer}>
        <a>
          ELE206 Fall 2020
          <img src="/PU.svg" alt="Princeton Logo" className={styles.logo} />
        </a>
      </footer>
    </div >
  )
}

export default Home; 