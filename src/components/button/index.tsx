import React from 'react';

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
  free = 'freeStyle'
}

export enum ButtonSize {
  small = 'small',
  large = 'large',
}

interface ButtonProps {
  type: ButtonType;
  onClick: () => void;
  text: string;
  size: ButtonSize;
  disabled?: boolean;
  maxWidth?: string;
}

const Button = ({
  text,
  type,
  onClick,
  disabled = false,
  maxWidth,
  size = ButtonSize.large,
}: ButtonProps) => {

  const getButtonClasses = () => {
    let buttonClasses, sizeClasses, widthClasses;
    sizeClasses = size === ButtonSize.large ? 'h-12 rounded-[16px]' : 'h-9 rounded-[10px]';
    widthClasses = maxWidth ? maxWidth : size === ButtonSize.large ? 'max-w-none' : 'max-w-[154px]';

    switch (type) {
      case ButtonType.primary:
        buttonClasses = 'text-white bg-[#701ADF] hover:bg-[#B67DFF] disabled:bg-[#D3D3D3]';
        break;
      case ButtonType.secondary:
        buttonClasses = 'border-[1px] border-[#701ADF] text-[#701ADF] text-[18px]';
        break;
      case ButtonType.free:
        buttonClasses = 'border-none text-[#701ADF]'
      default:
        break;
    }

    buttonClasses = `${buttonClasses} ${widthClasses} ${sizeClasses}`;
    return buttonClasses;
  };

  return (
    <button
      disabled={disabled}
      className={`flex items-center justify-center ${getButtonClasses()} w-full text-base font-medium`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
