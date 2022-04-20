import Head from 'next/head'
import Link from 'next/link'
import Layuot from '../../components/layout'

export default function FirstPost() {
  return (
    <Layuot>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>
          <a>Back home</a>
        </Link>
      </h2>
    </Layuot>
  )
}