import Head from 'next/head'
import HomePage from '../components/HomePage.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
      </main>

    </div>
  )
}
