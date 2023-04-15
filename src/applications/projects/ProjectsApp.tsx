/* eslint-disable @next/next/no-img-element */
import AppWindow from '@/components/apps/AppWindow';

export default function ProjectsApp() {
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
