import React from 'react';
import back from '../../assets/icons/back.png';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <div className='justify-center fixed top-0 flex h-[58px] w-full flex-col pl-6'>
      <div className='flex items-center justify-start gap-3'>
        <img src={back} alt='header back icon' className='w-9' onClick={() => navigate(-1)} />
        <h2 className='text-primary-text text-[18px] font-medium leading-7'>{title}</h2>
      </div>
    </div>
  );
};

export default Header;
