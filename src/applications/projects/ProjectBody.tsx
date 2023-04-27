import { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import Experience from '@/applications/projects/components/Experience';
import Button from '@/components/buttons/Button';

export default function ProjectBody() {
  const [experience, setExperience] = useState<boolean>(false);
  const [github, setGithub] = useState<boolean>(false);
  return (
    <>
      {!experience && !github && (
        <div className='w-full h-fit flex flex-col gap-3 px-5 py-3'>
          <Button>Githubs</Button>
          <Button onClick={() => setExperience(true)}>Experience</Button>
        </div>
      )}
      {experience && (
        <div className='w-full h-fit flex flex-col bg-[#2C3333]'>
          <div className='h-10 bg-[#A5C9CA] px-3 flex items-center'>
            <button
              onClick={() => {
                setExperience(false);
                setGithub(false);
              }}
              className='text-white text-3xl flex'
            >
              <AiOutlineArrowLeft />
            </button>
          </div>
          <Experience />
        </div>
      )}
    </>
  );
}
