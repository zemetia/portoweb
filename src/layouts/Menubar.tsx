import { useState } from 'react';
import { AiFillWindows } from 'react-icons/ai';

import Start from '@/components/modal/Start';

export default function Menubar() {
  const [openStart, setOpenStart] = useState<boolean>(false);

  return (
    <div className='h-11 w-full bg-[#1d2839]'>
      <Start title='test' open={openStart} setOpen={setOpenStart}>
        Halo Halo Bandungs
      </Start>

      <div className='flex justify-center py-1 h-full'>
        <div className='grid grid-flow-row h-full'>
          <button
            className='h-full w-10 text-white p-2'
            onClick={() => {
              setOpenStart(true);
            }}
          >
            <AiFillWindows className='h-full w-full' />
          </button>
        </div>
      </div>
    </div>
  );
}
