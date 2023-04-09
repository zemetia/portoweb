import { Dialog, Transition } from '@headlessui/react';
import * as React from 'react';
import Draggable from 'react-draggable';
import { FiMinus, FiSquare, FiX } from 'react-icons/fi';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
import { ExtractProps } from '@/types/helper';

type AppWindowProps = {
  className?: string;
  title: string;
  children: React.ReactNode;
  /** Use sm:max-w-xx to adjust max-width */
  modalContainerClassName?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
} & Omit<ExtractProps<typeof Dialog>, 'onClose'>;

export function AppWindowRoot({
  className,
  title,
  children,
  modalContainerClassName,
  open,
  setOpen,
  ...rest
}: AppWindowProps) {
  const containerRef = React.createRef<HTMLDivElement>();

  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog
        as='div'
        className={clsxm('fixed inset-0 z-40 overflow-y-auto ', className)}
        {...rest}
        onClose={setOpen}
        initialFocus={containerRef}
      >
        <div
          className='flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0 '
          ref={containerRef}
        >
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:h-screen sm:align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>

          <Draggable handle='.head-draggable-handle'>
            <div
              className={clsxm(
                'align inline-block transform rounded-lg bg-white text-left shadow-xl transition-all sm:align-middle ',
                'px-3 pt-2 pb-4 sm:my-8 min-w-[15rem]',
                modalContainerClassName
              )}
            >
              <div className='flex flex-row justify-between items-start head-draggable-handle'>
                <div>
                  <Typography variant='h3' className='text-sm'>
                    {title}
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
          </Draggable>
        </div>
      </Dialog>
    </Transition.Root>
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
