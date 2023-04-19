/* eslint-disable @next/next/no-img-element */

import AppWindow from '@/components/apps/AppWindow';
import useAppStore from '@/store/useAppStore';

export default function PortofolioApp() {
  //App Datas
  const addApp = useAppStore.useAddApp();
  addApp('app.portofolio', {
    name: 'Portofolio',
    favicon: '/images/business-64px.png',
    minimize: false,
    position: { x: 0, y: 0 },
  });

  return (
    <AppWindow
      appId='app.portofolio'
      modalContainerClassName='h-[33rem] w-[24rem]'
    >
      <AppWindow.Body>
        <div className='w-full h-full '>
          <iframe
            src='https://resume.zemetia.my.id/'
            title='Embedded Page'
            className='w-full h-full'
          />
        </div>
      </AppWindow.Body>
    </AppWindow>
  );
}
