import React from "react";
import { motion } from "framer-motion";
import MotionSVG from "./MotionSVG";
import { FaWhatsapp } from "react-icons/fa";
import "@fontsource/cinzel"; // Judul klasik elegan
import "@fontsource/inter"; // Konten modern clean

const DarkCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative bg-neutral-900 text-white rounded-xl shadow-yellow-600 shadow-lg max-w-md w-full px-6 py-8 p-5 md:p-10 text-center border border-neutral-800"
    >
      <MotionSVG />

      <div className="relative  z-50 w-full h-full">
        <h1 className="text-3xl md:text-4xl font-['Cinzel'] font-semibold mb-4 text-[#f1f1f1]">
          Undangan Wisuda
        </h1>

        <div className="flex justify-center mb-4">
          <img
            src="/my r.png"
            alt="Foto"
            className="w-28 h-28 rounded-full object-cover border border-neutral-700 bg-black"
          />
        </div>

        <p className="text-sm md:text-base font-['Inter'] text-neutral-300 mb-6">
          Dengan penuh rasa syukur, saya mengundang teman-teman, bapak-bapak, ibuk-ibuk, semua yang ada disni... untuk hadir pada
          acara Wisuda saya:
        </p>

        <div className="text-left font-['Inter'] text-neutral-200 space-y-3 mb-6">
          <div>
            <p className="text-sm text-neutral-400">Nama:</p>
            <p className="text-base font-medium">Muhammad Rivan</p>
          </div>
          <div>
            <p className="text-sm text-neutral-400">Tempat & Waktu:</p>
            <p className="text-sm">
              [UPI Convention Center] - [Selasa, 20 Mei 2025]
            </p>
            <p className="text-sm">Jam: [11.00 WIB - 14.00 WIB]</p>
          </div>
        </div>

        <p className="italic text-xs text-neutral-500 mb-4">
          “Terima kasih atas dukungan dan doanya.”
        </p>

        <p className="italic text-xs text-neutral-500 mb-4">
          Info lebih lanjut
        </p>
        <div className="flex justify-center z-20">
          <motion.a
            href="https://wa.me/6283186239530"
            target="_blank"
            whileHover={{
              scale: 1.04,
              borderColor: "#FFD700",
              borderWidth: "2px",
            }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2 bg-white text-black rounded-full font-medium text-sm shadow hover:bg-neutral-100 transition flex items-center gap-2 border border-transparent"
          >
            <FaWhatsapp className="text-green-500" size={25} />
            Chat WhatsApp
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default DarkCard;
