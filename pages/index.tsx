import type { NextPage } from 'next'
import Link from 'next/link';


const Home: NextPage = () => {
  return (
    <div>
      <h2>hello next</h2>
      <Link href="/marketplace">
      <button>Market Place</button>
      
      </Link>
    </div>
  )
}

export default Home
