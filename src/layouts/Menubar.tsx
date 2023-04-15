import Image from 'next/image';
import { useState } from 'react';
import { AiFillWindows } from 'react-icons/ai';

import Start from '@/components/modal/Start';
import useAppStore from '@/store/useAppStore';

export default function Menubar() {
  const [openStart, setOpenStart] = useState<boolean>(false);
  const getApp = useAppStore.useGetApp();

  const runningApp = useAppStore.useRunningApp();

  return (
    <div className='h-11 w-full bg-[#1d2839]'>
      <Start title='test' open={openStart} setOpen={setOpenStart} />

      <div className='flex justify-center py-1 h-full'>
        <div className='grid grid-flow-col h-full'>
          <button
            className='h-full w-10 text-white p-2'
            onClick={() => {
              setOpenStart(true);
            }}
          >
            <AiFillWindows className='h-full w-full' />
          </button>
          {Object.entries(runningApp).map((data: [string, boolean]) => {
            if (data[1]) {
              const appData = getApp(data[0]);
              return (
                <button
                  key={data[0]}
                  className='h-full w-10 text-white p-2'
                  onClick={() => {
                    setOpenStart(true);
                  }}
                >
                  <Image
                    src={appData.favicon ?? '/favicon.ico'}
                    alt='AppIcon'
                    className='h-full w-14'
                    width={500}
                    height={500}
                  />
                </button>
              );
            } else <></>;
          })}
        </div>
      </div>
    </div>
  );
}
