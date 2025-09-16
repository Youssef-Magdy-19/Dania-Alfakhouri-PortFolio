import { motion } from "framer-motion";

const Services = () => {
  const services = [
    "Architectural Design & Visualization (Residential, Commercial, Hospitality).",
    "Site Supervision & QA/QC for quality execution.",
    "Real Estate Consulting with feasibility & investment studies.",
    "BIM & AutoCAD Documentation (Schematic, Detailed, IFC).",
    "Client Liaison & Coordination for smooth communication.",
  ];

  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  return (
    <section className="container py-12 ">
      <div className="mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold mb-6"
          // @ts-ignore
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          OUR SERVICES
        </motion.h2>

        {/* Services List */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="w-[5px] md:w-[4px] bg-blue-400 mr-[10px]"></div>
              <p className="text-lg font-semibold m-0 p-0 service-desc">{service}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
