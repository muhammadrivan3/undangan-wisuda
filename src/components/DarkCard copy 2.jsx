import React, { useState } from "react";
import { motion } from "framer-motion";
import MotionSVG from "./MotionSVG";

const DarkCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 1 }}
      className="relative bg-white text-gray-800 rounded-2xl shadow-2xl max-w-md w-full  md:p-10 text-center"
    >
      <MotionSVG />
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Undangan Wisuda
      </h1>
      <div className="w-full flex justify-center mb-4">
        
      <img src="/my r.png" alt="" className="w-50 h-50" />
      </div>
      <p className="text-md md:text-lg mb-2">
        Dengan penuh rasa syukur, saya mengundang Saudara/i untuk hadir pada acara
        Wisuda saya:
      </p>

      <div className="my-6">
        <p className="text-lg font-semibold text-gray-700">Nama:</p>
        <p className="text-xl font-bold">Muhammad Rivan</p>

        <p className="text-lg font-semibold mt-4 text-gray-700">
          Tempat & Waktu:
        </p>
        <p className="text-base">[Lokasi Wisuda] - [Hari, Tanggal]</p>
        <p className="text-base">Jam: [Jam Acara]</p>
      </div>

      <p className="italic text-sm text-gray-600">
        “Terima kasih atas dukungan dan doanya.”
      </p>
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
