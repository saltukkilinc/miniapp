import React from 'react';
import down from '../../assets/icons/down.png';

interface ModalTriggerFieldProps {
  label: string;
  id: string;
  value: string;
  onClick: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  type?: string;
  isIcon?: React.ReactNode;
}

const defaultIcon = <img src={down} alt='down icon' className='absolute right-3 top-3 w-6' />;
const defaultSign = <p className='absolute right-3 top-3'>TL</p>;

const ModalTriggerField = ({
  label,
  id,
  onChange,
  value,
  placeholder = 'Seçiniz',
  type = 'text',
  readOnly = true,
  isIcon = defaultIcon,
  onClick,
}: ModalTriggerFieldProps) => {
  return (
    <div className={`w-full`} onClick={onClick}>
      <label htmlFor={id} className='block text-[#242424]'>
        {label}
      </label>
      <div className='relative mt-[9px]'>
        <input
          onChange={onChange}
          value={value}
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          readOnly={readOnly}
          className={`border-border-primary h-12 w-full rounded-[10px] border pl-4 ${
            readOnly ? 'text-black' : 'text-primary-text focus:border-secondary'
          } outline-none`}
        />
        {readOnly ? isIcon : defaultSign}
      </div>
    </div>
  );
};

export default ModalTriggerField;
