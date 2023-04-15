import Applications from '@/applications/Applications';
import AppDesktopView from '@/components/apps/AppDesktopView';
import SEO from '@/components/SEO';
import WindowsLayout from '@/layouts/WindowsLayout';
import RightClick from '@/lib/right-click';

export default function MainPage() {
  return (
    <WindowsLayout>
      <RightClick />
      <Applications />
      <SEO title='Home' description='Main Page' />
      <div className='grid grid-flow-row gap-5 h-5'>
        <AppDesktopView
          appId='app.projects'
          name='Projects'
          icon='/images/folder/icons8-file-folder-48.png'
        />
        <AppDesktopView appId='app.educations' name='Educations' />
        <AppDesktopView appId='app.projects' name='Maps' />
        <AppDesktopView appId='app.projects' name='Maps' />
        <AppDesktopView appId='app.projects' name='Maps' />
      </div>
    </WindowsLayout>
  );
}
