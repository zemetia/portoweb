import EducationApp from '@/applications/educations/EducationApp';
import GalleryApp from '@/applications/gallery/GalleryApp';
import PortofolioApp from '@/applications/portofolio/PortofolioApp';
import ProjectsApp from '@/applications/projects/ProjectsApp';

export default function Applications() {
  return (
    <>
      <EducationApp />
      <ProjectsApp />
      <PortofolioApp />
      <GalleryApp />
    </>
  );
}
