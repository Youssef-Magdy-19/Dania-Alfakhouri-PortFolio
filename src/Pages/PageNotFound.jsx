import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <section className='flex items-center justify-center min-h-screen'>
            <div className='flex flex-col gap-[2rem]'>
                <p className='text-4xl md:5xl font-semibold'>Page Not Found</p>
                <Link to='/'
                    className='flex items-center justify-center gap-[1rem] border border-gray-300 rounded'
                    style={{ padding: '8px 20px' }}
                >
                    <ArrowRight className='w-5 h-5' style={{ marginTop: '2.5px' }} />
                </Link>
            </div>
        </section>
    )
}
export default PageNotFound