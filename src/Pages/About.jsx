// @ts-ignore
import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Award, PhoneCall } from "lucide-react";
// @ts-ignore
const whyChooseUs = "/whychoose.jpeg"
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { HashLink } from "react-router-hash-link";
import { useLoading } from "../context/LoadingContext";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const zoomImage = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const listParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const whyChooseUsList = [
  "Over 9 years in design, supervision & real estate.",
  "Expert in BIM & AutoCAD with Saudi Code compliance.",
  "Leadership skills managing design & site teams.",
  "Delivered major projects in housing, commercial & hospitality.",
  "Strong academic base (Master’s in Real Estate Development)"
]

const AboutPage = () => {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useWindowScrollToTop()
  return (
    <section className="aboutPage pt-[60px] bg-gray-50 text-gray-800" >
      <div className="container">
        {/* ✅ العنوان الرئيسي */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // @ts-ignore
          variants={fadeScale}
          style={{ padding: '40px 0' }}
          className="text-center"
        >
          <h1
            className="text-3xl md:text-4xl font-bold"
            style={{ marginBottom: '15px' }}
          >
            About Us
          </h1>
          <p
            className="aboutPage-desc text-gray-600 max-w-2xl"
            style={{ marginLeft: 'auto', marginRight: 'auto', }}
          >
            I’m Dania Alfakhouri, a Architect with 9+ years of experience in architectural design, site supervision, and real
            estate development. Skilled in BIM (Revit), AutoCAD, and Saudi Building Code compliance.
            Proven ability to lead design teams, deliver schematic to IFC packages, and ensure QA/QC
            on high-profile projects including residential, commercial, and hospitality developments.
          </p>
        </motion.div>

        {/* ✅ Why Choose Us */}
        <div className="max-w-6xl grid md:grid-cols-2 gap-10 items-center" style={{ padding: '35px 20ox', marginLeft: 'auto', marginRight: 'auto', marginBottom: "35px" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // @ts-ignore
            variants={zoomImage}
          >
            <img
              src={whyChooseUs}
              loading='lazy'
              alt="Why Choose Us"
              className="rounded-xl shadow-lg w-full h-[220px]"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // @ts-ignore
            variants={fadeUp}
          >
            <h2 className="text-2xl font-bold" style={{ marginBottom: "20px" }}>Why Choose Us?</h2>
            <motion.ul
              variants={listParent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 flex flex-col gap-3"
            >
              {whyChooseUsList.map((item, index) => (
                <motion.li key={index} variants={listItem} className="flex items-center gap-3">
                  <CheckCircle className="text-blue-500" size={22} />
                  <span>{item}</span>
                </motion.li>
              ))
              }
            </motion.ul>
          </motion.div>
        </div>

        {/* ✅ Achievements */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // @ts-ignore
          variants={fadeUp}
          style={{ padding: '35px 0' }}
          className="Achievements bg-blue-50"
        >
          <div className="max-w-6xl text-center" style={{ margin: 'auto' }}>
            <Award className="text-blue-500" style={{ marginBottom: "15px", marginLeft: "auto", marginRight: 'auto' }} size={40} />
            <h2 className="text-2xl font-bold" style={{ marginBottom: '15px' }}>Our Achievements</h2>
            <p className="achievementsDesc text-gray-600 max-w-3xl" style={{ margin: 'auto' }}>
              Throughout the years, we’ve successfully completed hundreds of projects across different industries, earning the trust of major brands and local businesses.
            </p>
          </div>
        </motion.div>

        {/* ✅ Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // @ts-ignore
          variants={fadeUp}
          style={{ padding: '40px', margin: '0' }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold" style={{ marginBottom: "15px" }}>Want a Project Like This?</h3>
          <p className="about-cta text-gray-600" style={{ marginBottom: "20px" }}>Let’s work together to bring your vision to life. Contact us now!</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <HashLink smooth to="/#contact"
              style={{ padding: '10px 20px', marginLeft: 'auto', marginRight: 'auto' }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 shadow-lg"
            >
              <PhoneCall size={20} /> Contact Us
            </HashLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
