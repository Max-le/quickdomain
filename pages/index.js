import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>⚡️ QuickDomain </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Get domains from the comfort of your Terminal." />
        <p className="description">
          Simple paste <code>npx quickdomain</code>
        </p>
        <a href="https://nodejs.org/en/download/" >

        <small>(You'll need NPM installed)</small>

        </a>
        
      </main>

      <Footer />



    </div>
  )
}
