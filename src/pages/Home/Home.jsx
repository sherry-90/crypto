import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>
          Crypto <br /> Market Place
        </h1>
        <p>
          welcome to the world's largest crypto currency marketplace. sign up to
          explore more about crypto.
        </p>
        <form>
            <input type="text" placeholder="Search Crypto.."/>
            <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className='table-layout'>
         <p>#</p>
         <p>Coins</p>
         <p>Price</p>
         <p>24H change</p>
         <p className="market-cap">Market Cap</p>
        </div>
      </div>
    </div>
  );
}
