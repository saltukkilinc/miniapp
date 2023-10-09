import React, { useState } from 'react';
import ModalSheet from '../../components/modalSheet';

const Test = () => {
  const [isModalSheetOpen, setIsModalSheetOpen] = useState(false);
  return (
    <div>
      <h1 className='text-center my-3'>Test Page</h1>
      <button
        onClick={() => setIsModalSheetOpen(!isModalSheetOpen)}
        className='rounded-full border-red-500 bg-purple-400 p-4 text-white focus:border'
      >
        {isModalSheetOpen ? 'Close' : 'Open'} Modal Sheet
      </button>
      <ModalSheet
        isOpen={isModalSheetOpen}
        onClose={() => setIsModalSheetOpen(false)}
        modalSheetHeight={window.innerHeight * (710 / 820)}
      />
    </div>
  );
};

export default Test;
