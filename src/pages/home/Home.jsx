import Header from '../../components/Header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/SideBar'
import './home.css'

const Home = () => {
  return (
    <>
        <Header/>
        <div className="home">
            <Posts/>
            <SideBar/>
        </div>
    </>
  )
}

export default Home