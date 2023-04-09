import * as React from 'react';
import { IconType } from 'react-icons';
import { FiCheck } from 'react-icons/fi';

import clsxm from '@/lib/clsxm';

type StaticInputProps = {
  id: string;
  label: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  showValid?: boolean;
  className?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & React.ComponentPropsWithRef<'input'>;

const StaticInput = ({
  id,
  label,
  setValue,
  placeholder,
  showValid = false,
  type = 'text',
  className,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  leftIconClassName,
  rightIconClassName,
}: StaticInputProps) => {
  return (
    <div className='mt-1'>
      <label htmlFor={id} className='block'>
        {label}
      </label>
      <div className='relative'>
        <input
          type={type}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
          }}
          className={clsxm(
            'rounded-md',
            showValid && 'border-green-500',
            'px-4 py-2 border block w-full',
            className
          )}
          placeholder={placeholder}
        />
        {LeftIcon && (
          <div className='absolute top-1/2 left-0 translate-x-1/2 -translate-y-1/2'>
            <LeftIcon
              className={clsxm('text-lg md:text-xl', leftIconClassName)}
            />
          </div>
        )}
        {RightIcon && (
          <div className='absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2'>
            <RightIcon
              className={clsxm('text-lg md:text-xl', rightIconClassName)}
            />
          </div>
        )}
        {showValid && (
          <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
            <FiCheck className='h-5 w-5 text-green-500' aria-hidden='true' />
          </div>
        )}
      </div>
    </div>
  );
};

export default StaticInput;
