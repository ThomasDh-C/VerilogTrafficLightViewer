import React from 'react'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import ImportFromFile from './components/ImportFromFile'
import TrafficLight from './components/TrafficLight'
import { Button } from 'antd';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px 8px 8px 8px;
  align-content: space-between;
`

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
          <TrafficLight value="1" />
          <TrafficLight value="010" />

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