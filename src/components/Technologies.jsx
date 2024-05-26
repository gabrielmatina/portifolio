// import ReactTooltip from 'react-tooltip';
import { motion } from "framer-motion";
import { FaPython } from "react-icons/fa";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrHadoop } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiApachespark } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";
import { SiLooker } from "react-icons/si";
import { FaFileExcel } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";
import { AiOutlineOpenAI } from "react-icons/ai";
import { FaAws } from "react-icons/fa";
import { GiGemini } from "react-icons/gi";







const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tecnologias
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="Python"
          title="Python"
        >
          <FaPython className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="Pandas"
          title="Pandas"
        >
          <SiPandas className="text-7xl text-indigo-800" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="NumPy"
          title="NumPy"
        >
          <SiNumpy className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="Tensorflow"
          title="Tensorflow"
        >
          <SiTensorflow className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="PyTorch"
          title="PyTorch"
        >
          <SiPytorch className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="MySQL"
          title="MySQL"
        >
          <GrMysql className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="PostegreSQL"
          title="PostegreSQL"
        >
          <BiLogoPostgresql className="text-7xl text-blue-900" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="MongoDB"
          title="MongoDB"
        >
          <SiMongodb className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="Hadoop"
          title="Hadoop"
        >
          <GrHadoop className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="Apache Spark"
          title="Apache Spark"
        >
          <SiApachespark className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="GitHub"
          title="GitHub"
        >
          <FaGithub className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="Microsoft Power BI"
          title="Microsoft Power BI"
        >
          <SiPowerbi className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="Looker Studio"
          title="Looker Studio"
        >
          <SiLooker className="text-7xl text-sky-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="Microsoft Excel"
          title="Microsoft Excel"
        >
          <FaFileExcel className="text-7xl text-green-800" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="Microsoft Azure"
          title="Microsoft Azure"
        >
          <SiMicrosoftazure className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="ChatGPT"
          title="ChatGPT"
        >
          <AiOutlineOpenAI className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="AWS"
          title="AWS"
        >
          <FaAws className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          aria-label="Gemini"
          title="Gemini"
        >
          <GiGemini className="text-7xl" />
        </motion.div>
      </motion.div>

    </div>
  );
};

export default Technologies;
