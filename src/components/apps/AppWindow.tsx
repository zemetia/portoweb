/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import * as React from 'react';
import Draggable, { DraggableEvent } from 'react-draggable';
import { FiMinus, FiSquare, FiX } from 'react-icons/fi';
import { shallow } from 'zustand/shallow';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
import useAppStore from '@/store/useAppStore';
import { ExtractProps } from '@/types/helper';

type AppWindowProps = {
  className?: string;
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
  appId,
  children,
  modalContainerClassName,
  fixed_size = false,
  ...rest
}: AppWindowProps) {
  const [active, setActive] = React.useState<boolean>(false);
  const [maximize, setMaximize] = React.useState<boolean>(false);
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  const updatePosition = (
    event: DraggableEvent,
    dragElement: { x: number; y: number }
  ) => {
    setX(dragElement.x);
    setY(dragElement.y);
  };

  const setMinimize = useAppStore.useSetMinimize();

  const setAppStatus = useAppStore.useSetAppStatus();
  const getApp = useAppStore.useGetApp();
  const appData = getApp(appId);
  const { minimize } = useAppStore(
    (state) => ({ minimize: state.apps[appId].minimize }),
    shallow
  );

  const open = useAppStore.useRunningApp()[appId];
  const setOpen = (state: boolean) => setAppStatus(appId, state);

  const clickHandler = () => {
    setActive(true);
    if (maximize) setMaximize(false);
  };

  const blurHandler = () => {
    setActive(false);
  };

  return (
    <div>
      {open && (
        <Draggable
          handle='.head-draggable-handle'
          onStop={updatePosition}
          position={
            maximize
              ? { x: 0, y: 0 }
              : minimize
              ? { x: 0, y: -50 }
              : { x: x, y: y }
          }
          disabled={minimize}
        >
          <div
            className={clsxm(
              'fixed top-0 left-0 w-fit h-fit z-[5]',
              active && 'z-[6]',
              maximize && 'w-full h-full z-10',
              className
            )}
            onClick={clickHandler}
            onBlur={blurHandler}
            ref={(input) => {
              input?.focus();
            }}
            tabIndex={0}
            {...rest}
            // Add any other styles or props as needed
          >
            <div
              className={clsxm(
                'align inline-block transform rounded-lg bg-white text-left shadow-xl sm:align-middle ',
                'px-3 pt-2 pb-4 min-w-[15rem]',
                maximize && 'w-full h-full',
                modalContainerClassName
              )}
            >
              <div className='flex flex-row justify-between items-start head-draggable-handle'>
                <div
                  onDragStart={(event: any) => {
                    event.preventDefault();
                  }}
                  className='flex flex-row gap-2'
                >
                  <Image
                    src={appData.favicon ?? '/favicon.ico'}
                    width={20}
                    height={20}
                    alt='AppIcon'
                  />
                  <Typography variant='h3' className='text-sm'>
                    {appData.name}

                    {fixed_size}
                  </Typography>
                </div>
                <div className='flex flex-row gap-3'>
                  <button
                    type='button'
                    className='focus:ring-primary-500 rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2'
                    onClick={() => {
                      setMaximize(false);
                      setMinimize(appId, true);
                    }}
                  >
                    <span className='sr-only'>Minimize</span>
                    <FiMinus className='h-5 w-5' aria-hidden='true' />
                  </button>
                  <button
                    type='button'
                    className='focus:ring-primary-500 rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2'
                    onClick={() => setMaximize(!maximize)}
                  >
                    <span className='sr-only'>Maximize</span>
                    <FiSquare className='h-5 w-5 p-[3px]' aria-hidden='true' />
                  </button>
                  <button
                    type='button'
                    className='focus:ring-primary-500 rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2'
                    onClick={() => setOpen(false)}
                  >
                    <span className='sr-only'>Close</span>
                    <FiX className='h-5 w-5' aria-hidden='true' />
                  </button>
                </div>
              </div>
              <div className={clsxm('w-full', minimize && 'hidden')}>
                {children}
              </div>
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
