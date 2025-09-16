import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { data } from "../data/data";
import CardProject from "../Compontents/CardProject";
import { useLoading } from "../context/LoadingContext";


const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};


const ProjectDetails = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [relatedProjects, setRelatedProjects] = useState([])
  const { setIsLoading } = useLoading();

  useEffect(() => {
    if (id) {
      window.scrollTo(0, 0)
    }
  }, [id])

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);



  // البحث عن المشروع عند تغيير ID
  useEffect(() => {
    const foundProject = data.find((item) => item.id === parseInt(id));
    let foundRelatedProjects = data.filter(project => project.category == foundProject.category)
    foundRelatedProjects = foundRelatedProjects.filter(project => project !== foundProject)
    setTimeout(() => {
      setProjectData(foundProject);
      setRelatedProjects(foundRelatedProjects)
    }, 1000); // محاكاة تحميل
  }, [id]);
  const images = projectData?.images || [];

  // أنيميشنات
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const modalAnim = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  if (!projectData) {
    return (
      <div className="text-center text-gray-600 dark:text-gray-300 mt-20">
        <p>Project not found ❌</p>
      </div>
    );
  }

  return (
    <section className="container min-h-screen" style={{ padding: '50px 0' }}>
      {/* ✅ Breadcrumbs */}
      <motion.nav
        className="project-nav text-gray-600 text-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: "15px", marginTop: '50px' }}
      >
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <span style={{ margin: '0 7px' }}>{">"}</span>
        <Link to="/projects" className="hover:text-blue-500">Projects</Link>
        <span style={{ margin: '0 7px' }}>{">"}</span>
        <span className="font-semibold">{projectData.title}</span>
      </motion.nav>

      {/* ✅ العنوان والوصف */}
      <motion.div
        className="text-center"
        style={{ marginBottom: "15px" }}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="project-name text-3xl md:text-4xl font-bold text-gray-800" style={{ marginBottom: '7px' }}>
          {projectData.title}
        </h1>
      </motion.div>

      {/* ✅ تفاصيل المشروع */}
      <motion.div
        style={{ marginTop: '30px', marginLeft: 'auto', marginRight: 'auto', paddingBottom: '20px' }}
        className="project-details max-w-4xl text-gray-700 leading-7 border-b border-gray-300"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-xl font-semibold " style={{ marginBottom: '5px' }}>About the Project:</h2>
        <div className="flex-col md:flex-row justify-between">
          <p className="project-desc text-gray-600">Location : {projectData.Location}</p>
          <p className="project-desc text-gray-600">
            {projectData.description}
          </p>
        </div>
      </motion.div>

      {/* images for project */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      >
        <h4 className="text-gray-700 text-xl font-semibold my-[15px]">Images For Project:</h4>
        <div

          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1rem] border-b border-gray-300 pb-[25px]"
        >
          {images.map((img, key) => {
            return (
              <motion.div
                // @ts-ignore
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                key={key} className="relative"
              >
                <img
                  loading='lazy'
                  src={img}
                  className='w-full h-[180px]'
                />
                <div className="absolute z-10 bottom-7 left-3" style={{ padding: '5px 10px 10px 10px', height: 'calc(100% - 190px)' }}>
                  <h4 className='font-semibold text-xl text-white'>{key + 1}</h4>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>


      {/* some Related Projects */}
      <motion.div
        style={{ paddingTop: '20px' }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h4 className="text-xl font-semibold text-gray-700" style={{ marginBottom: "15px" }}>Related Projects</h4>
        {relatedProjects.length > 3 ?
          <div className="Related-Projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem]">
            {relatedProjects.slice(0, 4).map((project, index) => (
              <CardProject key={`${project.id}`} img={project.img} title={project.title} desc={project.description} id={project.id} animation={itemVariants} />
            ))
            }
          </div> :
          <div className="Related-Projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem]">
            {relatedProjects.slice(0, 4).map((project, index) => (
              <CardProject key={`${project.id}`} img={project.img} title={project.title} desc={project.description} id={project.id} animation={itemVariants} />
            ))
            }
          </div>
        }
      </motion.div>
    </section>
  );
};

export default ProjectDetails;
