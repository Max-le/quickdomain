import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Get domains from the confort of your Terminal." />
        <p className="description">
          <code>npx quickdomain</code>
        </p>
      </main>

      <Footer />



    </div>
  )
}
