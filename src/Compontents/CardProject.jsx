import { motion } from 'framer-motion';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


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
            <img
                loading='lazy'
                src={img}
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
