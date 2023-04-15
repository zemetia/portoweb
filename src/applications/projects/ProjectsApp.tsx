/* eslint-disable @next/next/no-img-element */
import AppWindow from '@/components/apps/AppWindow';
import useAppStore from '@/store/useAppStore';

export default function ProjectsApp() {
  //App Datas
  const addApp = useAppStore.useAddApp();
  addApp('app.projects', {
    name: 'Projects',
    favicon: '/images/folder/icons8-file-folder-48.png',
  });

  return (
    <AppWindow title='Projects' appId='app.projects'>
      <AppWindow.Body>
        <div className='w-full h-fit'>
          <img
            width={350}
            src='https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/02/22/FS5jDwxXoAIWTJo-653301377.jpg'
            alt='capybara'
          />
        </div>
      </AppWindow.Body>
    </AppWindow>
  );
}
