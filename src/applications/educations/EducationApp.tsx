import AppWindow from '@/components/apps/AppWindow';

export default function EducationApp() {
  return (
    <AppWindow
      title='Educations'
      appId='app.educations'
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
