import Start from '@/components/modal/Start';
import Menubar from '@/layouts/Menubar';
import clsxm from '@/lib/clsxm';

export default function WindowsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col w-screen h-screen'>
      <div
        className={clsxm(
          `bg-[url('https://wallpaperaccess.com/full/385739.jpg')] bg-no-repeat bg-cover`,
          'w-full h-full'
        )}
      >
        {children}
      </div>
      <Menubar />
    </div>
  );
}
