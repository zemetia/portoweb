/* eslint-disable @next/next/no-img-element */
import AppWindow from '@/components/apps/AppWindow';
import useAppStore from '@/store/useAppStore';

export default function GalleryApp() {
  //App Datas
  const addApp = useAppStore.useAddApp();
  addApp('app.gallery', {
    name: 'Gallery',
    favicon: '/images/gallery-64px.png',
    minimize: false,
    position: { x: 0, y: 0 },
  });

  return (
    <AppWindow
      appId='app.gallery'
      modalContainerClassName='h-[30rem] w-[24rem]'
    >
      <AppWindow.Body>
        <div className='w-full h-full bg-black'>
          <img
            width={350}
            src='https://awsimages.detik.net.id/community/media/visual/2023/03/23/kumpulan-meme-sahur-lucu-foto-1cakcom-memecomicid.jpeg?w=1200'
            alt='meme1'
          />
          <img
            width={350}
            src='https://cdn0-production-images-kly.akamaized.net/fq7CBxJrFfIfKfalATrhhl9nHI0=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4361344/original/002554500_1679009882-0.jpg'
            alt='meme1'
          />
          <img
            width={350}
            src='https://cdn1-production-images-kly.akamaized.net/yhHQw8m_nAoZlmggCtqKnb4YLr8=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4240407/original/030331800_1669446922-3_handokotjung.jpg'
            alt='meme1'
          />
        </div>
      </AppWindow.Body>
    </AppWindow>
  );
}
