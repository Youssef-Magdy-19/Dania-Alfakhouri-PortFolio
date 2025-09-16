import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {

  const whatsappNumber = "+966566164484"; 

  const whatsappMessage = encodeURIComponent(
    'مرحبًا أستاذة دانية 👋، اطلعت على معرض أعمالك وأرغب في مناقشة إمكانية التعاون معك. هل يمكن أن تخبريني بمزيد من التفاصيل حول خدماتك '// محتوى الرسالة حسب اللغة
  );

  const whatsappLink =`https://wa.me/${whatsappNumber}?text=${whatsappMessage};`

  return (
    <section className="contact bg-gray-50 " id="contact" style={{padding:'30px 0 '}}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{margin:'auto', padding:'0 15px'}}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 " style={{marginBottom:"15px"}}>
          Contact Us
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto" style={{margin:'auto' }}>
         Have a project or idea and need professional execution? Reach out to me directly on WhatsApp and I’ll get back to you quickly.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          style={{marginTop:'30px' , padding:'10px 18px'}}
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all shadow-md inline-flex items-center gap-[.5rem]"
        >
            <FaWhatsapp className="text-xl" />
            Contact via WhatsApp
        </a>
      </motion.div>
    </section>
  );
};

export default ContactSection;
