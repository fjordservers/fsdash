import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fjordservers dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my Dash" />
        <p className="description">
         <code>Page under construction</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
