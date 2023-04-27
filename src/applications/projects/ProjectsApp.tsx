/* eslint-disable @next/next/no-img-element */
import ProjectBody from '@/applications/projects/ProjectBody';
import AppWindow from '@/components/apps/AppWindow';
import useAppStore from '@/store/useAppStore';

export default function ProjectsApp() {
  //App Datas
  const addApp = useAppStore.useAddApp();
  addApp('app.projects', {
    name: 'Projects',
    favicon: '/images/clipboard-64px.png',
    minimize: false,
    position: { x: 0, y: 0 },
  });

  return (
    <AppWindow title='Projects' appId='app.projects'>
      <AppWindow.Body>
        <ProjectBody />
      </AppWindow.Body>
    </AppWindow>
  );
}
