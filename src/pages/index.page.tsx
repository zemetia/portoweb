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
          icon='/images/clipboard.png'
        />
        <AppDesktopView
          appId='app.educations'
          name='Educations'
          icon='/images/education.png'
        />
        <AppDesktopView
          appId='app.instagram'
          name='Instagram'
          icon='/images/instagram.png'
        />
        <AppDesktopView
          appId='app.projects'
          name='Youtube'
          icon='/images/youtube.png'
        />
        <AppDesktopView
          appId='app.projects'
          name='Gallery'
          icon='/images/gallery.png'
        />
      </div>
    </WindowsLayout>
  );
}
