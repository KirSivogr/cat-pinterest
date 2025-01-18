import { useEffect, useState } from 'react';

export function useInfiniteScroll() {
   const [page, setPage] = useState<number>(1);

   const handleScroll = () => {
      if (
         window.innerHeight + document.documentElement.scrollTop >=
         document.documentElement.offsetHeight - 100
      ) {
         setPage(prevPage => prevPage + 1);
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return { page };
}
