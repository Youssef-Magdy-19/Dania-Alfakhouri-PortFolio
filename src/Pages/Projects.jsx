import React, { useEffect, useState } from 'react'
import { data } from '../data/data'
import CardProject from '../Compontents/CardProject'
import { AnimatePresence, motion } from 'framer-motion'
import useWindowScrollToTop from '../hooks/useWindowScrollToTop'
import { useLoading } from '../context/LoadingContext'


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};


const Projects = () => {
  const [filterCategory, setFilterCategory] = useState(data)
  const [category, setCategory] = useState('all')
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleFilterCategory = (category) => {
    const newData = data.filter(item => item.category === category)
    setFilterCategory(newData)
  }
  useWindowScrollToTop()
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ paddingTop: '60px' }}
      className='lasted-work'
    >
      <div className='container' style={{ padding: '50px 0' }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="title text-center"
        >
          <h1 className='text-4xl md:text-5xl font-bold' style={{ marginBottom: '15px' }}>My Projects</h1>
          <p className='text-md md:text-base text-gray-500'>Explore a selection of outstanding projects we have completed for our clients, with the option to filter by the type of project you are looking for.</p>
        </motion.div>
        
        <AnimatePresence mode='wait'>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="projects grid grid-cols-1 md:grid-cols-2 gap-[1rem] mt-7"
          >
            {filterCategory.map((project, index) => (
              <CardProject key={`${project.id} - ${category}`} img={project.img} title={project.title} desc={project.description} id={project.id} animation={itemVariants} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

export default Projects
