import NewArrivals from '../components/NewArrivals'
import Section1 from '../components/Section1'
import TopSelling from '../components/TopSelling'
import OurHappyCustomer from '../components/OurHappyCustomer'

function Home() {
  return (
    <div>
       <Section1 />
       <NewArrivals/>
       <TopSelling/>
       <OurHappyCustomer/>
    </div>
  )
}

export default Home