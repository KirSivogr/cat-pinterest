import { useEffect, useState } from 'react';

export function useInfiniteScroll() {
   const [page, setPage] = useState<number>(1);

   const handleScroll = () => {
      if (
         window.innerHeight + document.documentElement.scrollTop >=
         document.documentElement.offsetHeight - 200
      ) {
         setPage(prevPage => prevPage + 1);
      }
   };

   useEffect(() => {
      handleScroll(); // Проверка условия сразу после монтирования

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return { page };
}
