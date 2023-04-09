import { useState } from 'react';
import Draggable from 'react-draggable';

import AppDesktopView from '@/components/apps/AppDesktopView';
import AppWindow from '@/components/modal/AppWindow';
import SEO from '@/components/SEO';
import WindowsLayout from '@/layouts/WindowsLayout';
import RightClick from '@/lib/right-click';

export default function MainPage() {
  const [appOpen1, setAppOpen1] = useState<boolean>(true);
  const [appOpen2, setAppOpen2] = useState<boolean>(true);
  return (
    <WindowsLayout>
      <RightClick></RightClick>
      <SEO title='Home' description='Main Page' />
      <div className='grid grid-flow-row gap-5 h-5'>
        <AppWindow title='App Name' open={appOpen1} setOpen={setAppOpen1}>
          <AppWindow.Body>
            <div className='w-full h-10'>test</div>
          </AppWindow.Body>
        </AppWindow>
        <AppWindow title='App 2' open={appOpen2} setOpen={setAppOpen2}>
          <AppWindow.Body>
            <div className='w-full h-10'>test</div>
          </AppWindow.Body>
        </AppWindow>
        <Draggable>
          <button
            onDoubleClick={() => {
              setAppOpen1(true);
            }}
          >
            <AppDesktopView icon='' name='Projects' />
          </button>
        </Draggable>
        <AppDesktopView icon='' name='Schools' />
        <AppDesktopView icon='' name='Maps' />
        <AppDesktopView icon='' name='Maps' />
        <AppDesktopView icon='' name='Maps' />
      </div>
    </WindowsLayout>
  );
}
