import React, { useState } from 'react';
import ModalSheet from '../../components/modalSheet';

const Test = () => {
  const [isModalSheetOpen, setIsModalSheetOpen] = useState(false);
  return (
    <div>
      <h1 className='my-3 text-center'>Test Page</h1>
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
        title='Krediler'
      >
        <p>Test Children</p>
      </ModalSheet>
    </div>
  );
};

export default Test;
