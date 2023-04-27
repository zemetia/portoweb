import Image from 'next/image';

import Typography from '@/components/Typography';
import ExperienceCardProps from '@/types/entity/experience-card-props';

export default function ExperienceCard({
  image,
  title,
  institution,
  type,
  fromDate,
  toDate,
  location,
  description,
}: ExperienceCardProps) {
  const untilDate = toDate ?? new Date();
  const diffDate = new Date(untilDate.getTime() - fromDate.getTime());

  return (
    <div className='flex flex-row p-2 gap-3  max-w-3xl rounded-lg h-[20rem]'>
      <div className='min-w-[4.5rem] max-w-[4.5rem] w-fit'>
        <div className='h-fit w-fit rounded-lg overflow-hidden mt-2'>
          <Image
            src={image ?? '/favicon.ico'}
            alt='image'
            width={100}
            height={100}
            className=''
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <Typography variant='h4' className='font-bold text-white'>
          {title}
        </Typography>
        <Typography variant='s2' className='font-normal text-gray-400'>
          {institution} · {type}
        </Typography>
        <Typography variant='s2' className='font-normal text-gray-400'>
          {fromDate.toLocaleString('default', {
            month: 'short',
            year: 'numeric',
          })}{' '}
          -{' '}
          {toDate?.toLocaleString('default', {
            month: 'short',
            year: 'numeric',
          }) ?? 'Now'}
          {' · '}
          {diffDate.getMonth() + 1} month(s)
        </Typography>
        <Typography variant='s2' className='font-normal text-gray-400'>
          {location}
        </Typography>
        <Typography variant='p' className='mt-3 text-white'>
          {description}
        </Typography>
      </div>
    </div>
  );
}
