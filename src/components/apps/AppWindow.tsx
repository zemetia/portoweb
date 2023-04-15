/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog } from '@headlessui/react';
import * as React from 'react';
import Draggable from 'react-draggable';
import { FiMinus, FiSquare, FiX } from 'react-icons/fi';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
import useAppStore from '@/store/useAppStore';
import { ExtractProps } from '@/types/helper';

type AppWindowProps = {
  className?: string;
  title: string;
  appId: string;
  children: React.ReactNode;
  /** Use sm:max-w-xx to adjust max-width */
  modalContainerClassName?: string;

  /** SIZE */
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  width?: number;
  height?: number;
  fixed?: boolean;
} & Omit<ExtractProps<typeof Dialog>, 'onClose'>;

export function AppWindowRoot({
  className,
  title,
  appId,
  children,
  modalContainerClassName,
  fixed_size = false,
  ...rest
}: AppWindowProps) {
  const [active, setActive] = React.useState<boolean>(false);
  const setAppStatus = useAppStore.useSetAppStatus();
  const open = useAppStore.useRunningApp()[appId];
  const setOpen = (state: boolean) => setAppStatus(appId, state);
  const ref = React.useRef(null);

  const clickHandler = () => {
    setActive(true);
  };

  const blurHandler = () => {
    setActive(false);
  };

  return (
    <div>
      {open && (
        <Draggable handle='.head-draggable-handle'>
          <div
            className={clsxm(
              'fixed top-0 left-0 w-fit h-fit z-[5]',
              active ? 'z-[6]' : '',
              className
            )}
            onClick={clickHandler}
            onBlur={blurHandler}
            ref={ref}
            {...rest}
            // Add any other styles or props as needed
          >
            <div
              className={clsxm(
                'align inline-block transform rounded-lg bg-white text-left shadow-xl sm:align-middle ',
                'px-3 pt-2 pb-4 sm:my-8 min-w-[15rem]',
                modalContainerClassName
              )}
            >
              <div className='flex flex-row justify-between items-start head-draggable-handle'>
                <div
                  onDragStart={(event: any) => {
                    event.preventDefault();
                  }}
                >
                  <Typography variant='h3' className='text-sm'>
                    {title}
                    {fixed_size}
                  </Typography>
                </div>
                <div className='flex flex-row gap-3'>
                  <button
                    type='button'
                    className='focus:ring-primary-500 rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2'
                    onClick={() => setOpen(false)}
                  >
                    <span className='sr-only'>Batal</span>
                    <FiMinus className='h-5 w-5' aria-hidden='true' />
                  </button>
                  <button
                    type='button'
                    className='focus:ring-primary-500 rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2'
                    onClick={() => setOpen(false)}
                  >
                    <span className='sr-only'>Batal</span>
                    <FiSquare className='h-5 w-5 p-[3px]' aria-hidden='true' />
                  </button>
                  <button
                    type='button'
                    className='focus:ring-primary-500 rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2'
                    onClick={() => setOpen(false)}
                  >
                    <span className='sr-only'>Batal</span>
                    <FiX className='h-5 w-5' aria-hidden='true' />
                  </button>
                </div>
              </div>
              <div className='w-full'>{children}</div>
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
}

function Body({ className, children }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsxm('mt-4 flex w-full flex-col', className)}>
      <div className='-my-2 sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
          {children}
        </div>
      </div>
    </div>
  );
}

const AppWindow = Object.assign(AppWindowRoot, { Body });
export default AppWindow;
