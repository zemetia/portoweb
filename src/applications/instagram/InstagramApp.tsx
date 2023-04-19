/* eslint-disable @next/next/no-img-element */

import AppWindow from '@/components/apps/AppWindow';
import useAppStore from '@/store/useAppStore';

export default function InstagramApp() {
  //App Datas
  const addApp = useAppStore.useAddApp();
  addApp('app.instagram', {
    name: 'Instagram',
    favicon: '/images/instagram-64px.png',
    minimize: false,
    position: { x: 0, y: 0 },
  });

  return (
    <AppWindow appId='app.instagram'>
      <AppWindow.Body>
        <div className='w-full h-full'>
          <iframe
            src='https://www.instagram.com/zemetia/'
            title='Embedded Page'
            className='w-full h-full'
          />
        </div>
      </AppWindow.Body>
    </AppWindow>
  );
}
