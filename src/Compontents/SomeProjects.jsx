import { data } from '../data/data'
import CardProject from './CardProject'


const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};



const SomeProjects = () => {
    return (
        <section className='someWorks container flex flex-col w-full' style={{ padding: '100px 10px 50px 10px'}}>
            <h2 className='font-semibold text-3xl md:text-4xl'>Shaping Tomorrow's Projects Together</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-[1.5rem] " style={{marginTop:"30px"}}>
                {data.slice(0,6).map((item, index) => (
                    <CardProject key={index} img={item.img} title={item.title} desc={item.description} id={item.id} animation={itemVariants} />
                ))}
            </div>
        </section>
    )
}

export default SomeProjects
