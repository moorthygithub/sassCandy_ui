"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ServicesData } from "../../data/route";
import SingleService from "./SingleService";

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };
  return (
    <section className="dark:bg-darkmode bg-[url('/images/plan/price-plan-background-icons.svg')] bg-cover bg-center bg-no-repeat overflow-hidden">
      <div
        ref={ref}
        className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4"
      >
        <motion.div {...TopAnimation} className="mb-17">
          <p className="text-black/50 dark:text-white/50 text-lg lg:text-start text-center">
            Services We Provide
          </p>
          <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 justify-between items-center mt-5">
            <h2 className="font-semibold md:text-6xl sm:text-40 text-3xl text-black dark:text-white lg:text-start text-center">
              Innovative Apps for <br /> Your Business Needs
            </h2>
            <Link
              to="/services"
              className="py-1.125 px-2.188 bg-primary rounded-lg hover:bg-orange-600 duration-300 text-white font-semibold"
            >
              All Services
            </Link>
          </div>
        </motion.div>
        <div className="grid grid-cols-12 gap-6">
          {ServicesData.slice(0, 3).map((item, index) => (
            <SingleService key={index} service={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
