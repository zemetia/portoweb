/* eslint-disable unused-imports/no-unused-vars */
import { Dialog, Transition } from '@headlessui/react';
import * as React from 'react';
import { useState } from 'react';
import { AiOutlinePoweroff, AiOutlineSearch } from 'react-icons/ai';

import AppStartMenuView from '@/components/apps/AppStartMenuView';
import StaticInput from '@/components/StaticInput';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
import { ExtractProps } from '@/types/helper';

type AppWindowProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
} & Omit<ExtractProps<typeof Dialog>, 'onClose'>;

export function AppWindow({ open, setOpen, ...rest }: AppWindowProps) {
  const containerRef = React.createRef<HTMLDivElement>();
  const [search, setSearch] = useState<string>('');
  const [openApp, setOpenApp] = useState<boolean>(false);

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
          className='flex min-h-screen items-end justify-center text-center'
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
                'mb-14 min-w-[15rem] max-h-[90%] h-[30rem] w-[28rem]'
              )}
            >
              <div className=' h-[90%] rounded-lg border-b border-w p-3'>
                <div className='p-5'>
                  <StaticInput
                    id='search'
                    label=''
                    setValue={setSearch}
                    leftIcon={AiOutlineSearch}
                    className='rounded-full text-xs h-6 pl-8'
                    leftIconClassName='p-1'
                  ></StaticInput>
                </div>
                <div className='px-10 pt-3 flex flex-col'>
                  <div>
                    <div className='grid grid-cols-5'>
                      <AppStartMenuView
                        name='Projects'
                        setOpenApp={setOpenApp}
                      />
                      <AppStartMenuView
                        name='Projects'
                        setOpenApp={setOpenApp}
                      />
                      <AppStartMenuView
                        name='Projects'
                        setOpenApp={setOpenApp}
                      />
                      <AppStartMenuView
                        name='Projects'
                        setOpenApp={setOpenApp}
                      />
                      <AppStartMenuView
                        name='Projects'
                        setOpenApp={setOpenApp}
                      />
                      <AppStartMenuView
                        name='Projects'
                        setOpenApp={setOpenApp}
                      />
                      <AppStartMenuView
                        name='Projects'
                        setOpenApp={setOpenApp}
                      />
                      <AppStartMenuView
                        name='Projects'
                        setOpenApp={setOpenApp}
                      />
                      <AppStartMenuView
                        name='Projects'
                        setOpenApp={setOpenApp}
                      />
                    </div>
                  </div>
                  <div>
                    <div className='grid grid-cols-5'>
                      <AppStartMenuView
                        name='Projects'
                        setOpenApp={setOpenApp}
                      />
                      <AppStartMenuView
                        name='Projects'
                        setOpenApp={setOpenApp}
                      />
                      <AppStartMenuView
                        name='Projects'
                        setOpenApp={setOpenApp}
                      />
                      <AppStartMenuView
                        name='Projects'
                        setOpenApp={setOpenApp}
                      />
                      <AppStartMenuView
                        name='Projects'
                        setOpenApp={setOpenApp}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full py-1 px-10 flex flex-row justify-between items-center'>
                <div className='w-full py-1 flex flex-row items-center gap-2'>
                  <div className='rounded-full bg-black w-8 h-8'></div>
                  <div>
                    <Typography variant='b2' className='text-xs'>
                      Yoel Mountanus Sitorus
                    </Typography>
                  </div>
                </div>
                <div>
                  <AiOutlinePoweroff />
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default AppWindow;
