import AppWindow from '@/components/apps/AppWindow';
import useAppStore from '@/store/useAppStore';

export default function EducationApp() {
  //App Datas
  const addApp = useAppStore.useAddApp();
  addApp('app.educations', {
    name: 'Education',
    favicon: '/images/folder/icons8-file-folder-48.png',
  });

  return (
    <AppWindow
      appId='app.educations'
      title='Education'
      minWidth={10}
      fixed_size={true}
      width={0}
      height={0}
    >
      <AppWindow.Body>
        <div className='w-full h-10'>test</div>
      </AppWindow.Body>
    </AppWindow>
  );
}
