import { Dialog, Transition } from '@headlessui/react';
import * as React from 'react';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
import { ExtractProps } from '@/types/helper';

type AppWindowProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
} & Omit<ExtractProps<typeof Dialog>, 'onClose'>;

export function AppWindow({ open, setOpen, ...rest }: AppWindowProps) {
  const containerRef = React.createRef<HTMLDivElement>();

  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-40 overflow-y-auto '
        {...rest}
        onClose={setOpen}
        initialFocus={containerRef}
      >
        <Transition.Child
          as={React.Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-10 transition-opacity' />
        </Transition.Child>
        <div
          className='flex min-h-screen items-end justify-center px-4 pt-4 text-center'
          ref={containerRef}
        >
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div
              className={clsxm(
                'align inline-block transform rounded-lg bg-white text-left shadow-xl transition-all',
                'my-14 min-w-[15rem] max-h-[90%] h-[30rem] w-[28rem]'
              )}
            >
              <div className=' h-[90%] rounded-lg border-b border-w'>aa</div>
              <div className='w-full py-1 px-10 flex flex-row justify-between items-center'>
                <div className='w-full py-1 px-3 flex flex-row items-center gap-2'>
                  <div className='rounded-full bg-black w-8 h-8'></div>
                  <div>
                    <Typography variant='b2' className='text-xs'>
                      Yoel Mountanus Sitorus
                    </Typography>
                  </div>
                </div>
                <div> a</div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default AppWindow;
