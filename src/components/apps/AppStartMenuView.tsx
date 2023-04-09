/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';

interface AppStartMenuViewProps {
  icon?: string;
  name: string;
  setOpenApp: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AppStartMenuView({
  icon,
  name,
  setOpenApp,
}: AppStartMenuViewProps) {
  const singleClickHandler = () => {
    setOpenApp(true);
  };

  return (
    <button className='app w-fit' onClick={singleClickHandler}>
      <div
        className={clsxm(
          'flex flex-col w-16 text-center mx-1 px-3 rounded-md hover:bg-gray-500/50'
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
        <Typography color='black' className='text-black text-xs'>
          {name}
        </Typography>
      </div>
    </button>
  );
}
