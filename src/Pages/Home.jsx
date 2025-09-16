import Servies from '../Compontents/Servies'
import { useEffect } from 'react'
import SomeProjects from '../Compontents/SomeProjects'
import Contact from '../Compontents/Contact'
import useWindowScrollToTop from '../hooks/useWindowScrollToTop'
import { useLoading } from '../context/LoadingContext'

const Home = () => {
const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useWindowScrollToTop()
  return (
    <div style={{paddingTop:'60px'}}>
      <SomeProjects />
      <Servies />
      <Contact />
    </div>
  )
}

export default Home
