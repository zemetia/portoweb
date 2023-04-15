/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Draggable from 'react-draggable';

import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';
import useAppStore from '@/store/useAppStore';

interface AppDesktopViewProps {
  icon?: string;
  name: string;
  appId: string;
}

export default function AppDesktopView({
  icon,
  name,
  appId,
}: AppDesktopViewProps) {
  const [active, setActive] = useState<boolean>(false);
  const setAppStatus = useAppStore.useSetAppStatus();

  const doubleClickHandler = () => {
    setAppStatus(appId, true);
  };

  const singleClickHandler = () => {
    setActive(!active);
  };

  const blurHandler = () => {
    setActive(false);
  };

  return (
    <Draggable handle='.app'>
      <button
        className='app w-fit'
        onClick={singleClickHandler}
        onDoubleClick={doubleClickHandler}
        onDragStart={singleClickHandler}
        onBlur={blurHandler}
      >
        <div
          className={clsxm(
            'flex flex-col w-20 text-center mx-1 px-3 rounded-md hover:bg-[#85a0d8]/50',
            active ? 'bg-[#85a0d8]/75' : ''
          )}
        >
          <img
            onDragStart={(event: any) => {
              event.preventDefault();
            }}
            src={icon ?? '/favicon.ico'}
            alt='app-icon'
            width='55'
            height='55'
            className=''
          />
          <Typography
            color='white'
            variant='p4'
            className='text-white truncate'
          >
            {name}
          </Typography>
        </div>
      </button>
    </Draggable>
  );
}
