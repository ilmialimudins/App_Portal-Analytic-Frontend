'use client';
import { useProductsData } from '@/services/product/hooks';
import { countData } from '@/stores/dashboard.atom';
import { useAtom } from 'jotai';
import React from 'react';

export default function Page(){
  const [count, setCount] = useAtom(countData);

  // const testQuery = useProductsData();

  // if (testQuery.isLoading) {
  //   return 'Loading..';
  // }
  return (
    <div>
      Page {count} &nbsp;
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

