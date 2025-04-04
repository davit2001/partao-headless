"use client";

import { useEffect, useState } from 'react';

const CheckoutCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const handler = (event) => {
      console.log('handler', handler)
      setCount(event.detail.itemCount);
    };

    window.addEventListener('magento:checkout:count', handler);

    return () => {
      window.removeEventListener('magento:checkout:count', handler);
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Checkout Count {count}</h1>
    </div>
  );
};

export default CheckoutCount;