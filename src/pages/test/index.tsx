import React, { useState } from 'react';
import ModalSheet from '../../components/modalSheet';
import Button, { ButtonSize, ButtonType } from '../../components/button';
import ModalTriggerField from '../../components/modalTriggerField';
import Header from '../../components/header';
import Layout from '../../components/layout';

const Test = () => {
  const [isModalSheetOpen, setIsModalSheetOpen] = useState(false);
  const [val, setVal] = useState('');
  return (
    <Layout>
      <div>
        <Header title='İhtiyaç Kredisi' />
        <h1 className='my-3 text-center'>Test Page</h1>
        <Button
          text='Open'
          onClick={() => setIsModalSheetOpen(!isModalSheetOpen)}
          type={ButtonType.primary}
          size={ButtonSize.large}
        />

        <ModalTriggerField
          label='Kredi Türü'
          id='creditType'
          value={val}
          onClick={() => console.log('')}
          // onChange={(e) => setVal(e.target.value)}
          // readOnly={false}
          // type='number'
          // placeholder='Giriniz'
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
    </Layout>
  );
};

export default Test;
