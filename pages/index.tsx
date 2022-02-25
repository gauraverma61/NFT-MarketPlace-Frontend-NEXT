import type { NextPage } from 'next'
import Link from 'next/link';


const Home: NextPage = () => {
  return (
    <div>
      <h1>Marketplace</h1>
      <Link href="/marketplace">
      <button>Market Place</button>
      </Link>
      <i className="fas fa-search"></i>
      <i className="fa fa-car"></i>
    </div>
  )
}

export default Home
