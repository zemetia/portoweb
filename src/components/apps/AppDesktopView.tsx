/* eslint-disable @next/next/no-img-element */
import Typography from '@/components/typography/Typography';

interface AppDesktopViewProps {
  icon?: string;
  name: string;
}

export default function AppDesktopView({ icon, name }: AppDesktopViewProps) {
  return (
    <div className='flex flex-col w-fit text-center mx-1 px-3 rounded-md hover:bg-[#85a0d8]/50 '>
      <img
        src={icon ?? '/favicon.ico'}
        alt='app-icon'
        width='55'
        height='55'
        className=''
      />
      <Typography color='white' variant='p4' className='text-white'>
        {name}
      </Typography>
    </div>
  );
}
