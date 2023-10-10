import React, { useState } from 'react';
import ModalSheet from '../../components/modalSheet';
import Button, { ButtonSize, ButtonType } from '../../components/button';

const Test = () => {
  const [isModalSheetOpen, setIsModalSheetOpen] = useState(false);
  return (
    <div>
      <h1 className='my-3 text-center'>Test Page</h1>
      <Button
        text='Open'
        onClick={() => setIsModalSheetOpen(!isModalSheetOpen)}
        type={ButtonType.primary}
        size={ButtonSize.large}
      />
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
