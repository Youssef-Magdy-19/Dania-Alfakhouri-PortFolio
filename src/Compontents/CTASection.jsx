import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";


const CTASection = () => {
    const whatsappNumber = "201020666116";

    const whatsappMessage = encodeURIComponent(
       'Hello! I am interested in your storefront design services and would love to get started 👋' 
    );

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage};`
    return (
        <motion.section
            className="cta bg-blue-500 text-white rounded-2xl text-center shadow-lg max-w-4xl"
            style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '40px', padding: '30px 20px' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >
            <h2 className="text-2xl md:text-3xl font-bold" style={{ marginBottom: '15px' }}>
                Did you like this project?
            </h2>
            <p className="text-lg mb-6" style={{ marginBottom: '22px',padding:'0 10px' }}>
                If you want a similar project or have a unique idea, contact me now and let’s make it happen together.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
                <HashLink smooth to="/#contact"
                    style={{ padding: '10px 18px' }}
                    className="pd-contact-btn bg-white text-blue-500 font-semibold rounded-full shadow hover:bg-gray-100 transition"
                >
                    Contact Me
                </HashLink>
                <a
                    href={whatsappLink}
                    target="_blank"
                    style={{  padding: '10px 18px' }}
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all shadow-md inline-flex items-center gap-[.5rem]"
                >
                    <FaWhatsapp className="text-xl" />
                    Contact via WhatsApp
                </a>
            </div>
        </motion.section>
    );
};

export default CTASection;
