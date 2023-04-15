import { useEffect } from 'react';

import EducationApp from '@/applications/educations/EducationApp';
import ProjectsApp from '@/applications/projects/ProjectsApp';
import useAppStore from '@/store/useAppStore';

export default function Applications() {
  const setRunningApp = useAppStore.useSetRunningApp();
  useEffect(
    () => setRunningApp(['app.educations', 'app.projects']),
    [setRunningApp]
  );

  return (
    <>
      <EducationApp />
      <ProjectsApp />
    </>
  );
}
