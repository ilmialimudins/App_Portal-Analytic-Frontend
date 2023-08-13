'use client';

import { useAtom } from 'jotai';
import { productsDataAtom } from '@/stores/app.atom';
import Image from 'next/image';

export default function Home() {
  // const [data] = useAtom(productsDataAtom);

  return (
    <p>Nav</p>
  );
}
    // <section className="body-font text-gray-600">
    //   <div className="container mx-auto px-5 py-24">
    //     <div className="-m-4 flex flex-wrap">
    //       {data.products.map((item: any) => {
    //         return (
    //           <div className="p-4 md:w-1/3" key={item.id}>
    //             <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
    //               <Image
    //                 src={item.images[0]}
    //                 alt="asdasdasd"
    //                 width={720}
    //                 height={400}
    //               ></Image>
    //               <div className="p-6">
    //                 <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
    //                   CATEGORY
    //                 </h2>
    //                 <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
    //                   The Catalyzer
    //                 </h1>
    //                 <p className="mb-3 leading-relaxed">
    //                   Photo booth fam kinfolk cold-pressed sriracha leggings
    //                   jianbing microdosing tousled waistcoat.
    //                 </p>
    //                 <div className="flex flex-wrap items-center ">
    //                   <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
    //                     Learn More
    //                   </a>
    //                   <span className="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
    //                     1.2K
    //                   </span>
    //                   <span className="inline-flex items-center text-sm leading-none text-gray-400">
    //                     6
    //                   </span>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </section>

// <main className="wrap flex flex min-h-screen items-center justify-between p-24">
//   {data.products.map((item: any) => {
//     return (
//       <div
//         className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//         key={item.id}
//       >
//         <div className="my-8 rounded bg-white shadow-lg shadow-gray-200 duration-300 hover:-translate-y-1 dark:bg-gray-800 dark:shadow-gray-900">
//           <a href="link" className="cursor-pointer">
//             <figure>
//               <Image
//                 src={item.images[0]}
//                 width={500}
//                 height={500}
//                 alt="Picture of the author"
//               />

//               <figcaption className="p-4">
//                 <p className="mb-4 text-lg font-bold leading-relaxed text-gray-800 dark:text-gray-300">
//                   Test
//                 </p>

//                 <small className="leading-5 text-gray-500 dark:text-gray-400">
//                   Tesadasdadsasdas
//                 </small>
//               </figcaption>
//             </figure>
//           </a>
//         </div>
//       </div>
//     );
//   })}
// </main>
