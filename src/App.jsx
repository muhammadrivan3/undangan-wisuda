import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DarkCard from './components/DarkCard';

function App() {

  return (
    <div className="min-h-screen flex flect-col items-center justify-center bg-black p-5">
      <DarkCard/>
    </div>
  );
}

export default App;
