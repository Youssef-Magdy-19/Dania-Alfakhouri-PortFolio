import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const CardProject = ({ img, title, desc, id, animation }) => {
    const navigate = useNavigate()

    return (
        <motion.div
            variants={animation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            onClick={() => navigate('/projects/' + id)}
            className='card flex flex-col relative w-full gap-[.5rem] shadow-md cursor-pointer'
        >
            <LazyLoadImage
                loading="lazy"
                src={img}
                alt={title}
                // effect='blur'
                className='w-full h-[180px]'
                onClick={() => navigate('/projects/' + id)}
            />
            <div className="absolute z-10 bottom-7 left-3" style={{ padding: '5px 10px 10px 10px', height: 'calc(100% - 190px)' }}>
                <h4 className='font-semibold text-xl text-white'>{title}</h4>
            </div>
        </motion.div>
    )
}

export default CardProject
