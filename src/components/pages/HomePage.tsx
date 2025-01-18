import { CatsGallery } from '@components/cats-gallery/CatsGallery';
import { Header } from '@components/header/Header';

export const HomePage = () => {
   return (
      <>
         <Header />
         <CatsGallery />
      </>
   );
};
