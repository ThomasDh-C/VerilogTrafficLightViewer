import React from 'react'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import ImportFromFile from './components/ImportFromFile'
import TimeSlider from './components/TimeSlider'
import SignalCard from './components/SignalCard'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px 8px 8px 8px;
  align-content: space-between;
`

const Home = () => {
  const [vcdObj, setVCD] = React.useState({})
  const [index, setIndex] = React.useState(0)
  const [totalTimeWash, setTimeWash] = React.useState(0)
  const [totalTimeProsp, setTimeProsp] = React.useState(0)

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
          <SignalCard index={index} vcdObj={vcdObj} setTotalTime={setTimeWash} street="Washington Road" />
          <SignalCard index={index} vcdObj={vcdObj} setTotalTime={setTimeProsp} street="Prospect Avenue" />
        </Row>

        <TimeSlider vcdObj={vcdObj} index={index} setIndex={setIndex} />

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