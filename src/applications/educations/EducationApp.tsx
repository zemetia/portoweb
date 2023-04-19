import AppWindow from '@/components/apps/AppWindow';
import useAppStore from '@/store/useAppStore';

export default function EducationApp() {
  //App Datas
  const addApp = useAppStore.useAddApp();
  addApp('app.educations', {
    name: 'Education',
    favicon: '/images/education-64px.png',
    minimize: false,
    position: { x: 0, y: 0 },
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
