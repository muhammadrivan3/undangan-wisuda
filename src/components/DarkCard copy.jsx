import React, { useState } from "react";
import { motion } from "framer-motion";
import MotionSVG from "./MotionSVG";

const DarkCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 1 }}
      className="relative bg-white text-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-10 text-center"
    >
      <motion.div
        className="absolute inset-0 z-50 w-full h-full"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
      >
        <img
          src="/lineart.svg"
          alt="Line Art"
          className="w-full h-full"
        />
      </motion.div>
       {/* SVG Vintage Border with Motion */}
      {/* <motion.svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      > */}
        {/* Vintage Border with Curves and Flourishes */}
        {/* <motion.path
          fill="transparent"
          stroke="rgba(100, 100, 100, 0.8)"
          strokeWidth="3"
          d="M30,30 C80,10 150,10 200,30 C250,50 300,150 350,200 C400,250 450,350 470,400 C480,430 450,480 420,470 C400,460 350,400 300,350 C250,300 200,250 150,230 C100,210 50,160 30,130 C10,100 10,60 30,30"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.svg> */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Undangan Wisuda
      </h1>
      <p className="text-md md:text-lg mb-2">
        Dengan penuh rasa syukur, saya mengundang Anda untuk hadir pada acara
        Wisuda saya:
      </p>

      <div className="my-6">
        <p className="text-lg font-semibold text-gray-700">Nama:</p>
        <p className="text-xl font-bold">[Nama Kamu]</p>

        <p className="text-lg font-semibold mt-4 text-gray-700">
          Tempat & Waktu:
        </p>
        <p className="text-base">[Lokasi Wisuda] - [Hari, Tanggal]</p>
        <p className="text-base">Jam: [Jam Acara]</p>
      </div>

      <p className="italic text-sm text-gray-600">
        “Terima kasih atas dukungan dan doanya.”
      </p>
    <MotionSVG />
      <div className="mt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-gradient-to-r from-gray-900 to-black text-white rounded-full shadow-lg hover:shadow-2xl"
        >
          Simpan Tanggal
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DarkCard;
