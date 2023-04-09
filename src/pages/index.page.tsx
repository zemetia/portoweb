import { useState } from 'react';

import AppDesktopView from '@/components/apps/AppDesktopView';
import AppWindow from '@/components/modal/AppWindow';
import SEO from '@/components/SEO';
import WindowsLayout from '@/layouts/WindowsLayout';
import RightClick from '@/lib/right-click';

export default function MainPage() {
  const [appOpen1, setAppOpen1] = useState<boolean>(false);
  const [appOpen2, setAppOpen2] = useState<boolean>(false);
  return (
    <WindowsLayout>
      <RightClick></RightClick>
      <SEO title='Home' description='Main Page' />
      <div className='grid grid-flow-row gap-5 h-5'>
        <AppWindow title='Projects' open={appOpen1} setOpen={setAppOpen1}>
          <AppWindow.Body>
            <div className='w-full h-10'>test</div>
          </AppWindow.Body>
        </AppWindow>
        <AppWindow title='Educations' open={appOpen2} setOpen={setAppOpen2}>
          <AppWindow.Body>
            <div className='w-full h-10'>test</div>
          </AppWindow.Body>
        </AppWindow>

        <AppDesktopView setOpenApp={setAppOpen1} name='Projects' />
        <AppDesktopView setOpenApp={setAppOpen2} name='Educations' />
        <AppDesktopView setOpenApp={setAppOpen1} name='Maps' />
        <AppDesktopView setOpenApp={setAppOpen1} name='Maps' />
        <AppDesktopView setOpenApp={setAppOpen2} name='Maps' />
      </div>
    </WindowsLayout>
  );
}
