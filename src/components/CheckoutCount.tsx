"use client";

import { useEffect, useState } from 'react';

const CheckoutCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const addToCartButtons = document.querySelectorAll('.action.tocart');
    console.log('addToCartButtons', addToCartButtons)
    addToCartButtons.forEach((button) => {
      button.addEventListener('click', () => {
        setCount(prevState =>  prevState + 1);
      });
    });
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const handler = (event) => {
      console.log('handler', handler)
      setCount(event.detail.itemCount);
    };

    window.addEventListener('magento:cartUpdated', handler);

    return () => {
      window.removeEventListener('magento:cartUpdated', handler);
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Checkout Count {count}</h1>
      <div className="product-item-actions">
        <button className="action tocart primary">test button</button>
      </div>
    </div>
  );
};

export default CheckoutCount;