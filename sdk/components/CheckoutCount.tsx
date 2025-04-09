import { useCallback, useEffect, useState } from 'react';

const CheckoutCount = () => {
  const [count, setCount] = useState(0);

  const onTestButtonClick = useCallback(() =>  {
    console.log('onTestButtonClick')
    window.dispatchEvent(new CustomEvent('cartUpdated', {
      detail: { itemCount: count + 1 }
    }));
  }, [count]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const handler = (event) => {
      console.log('handler', handler)
      setCount(event.detail.itemCount);
    };

    window.addEventListener('cartUpdated', handler);

    return () => {
      window.removeEventListener('cartUpdated', handler);
    }
  }, []);

  useEffect(() => {
    const fetchCartItems = async () => {
      const tokenResponse = await fetch('https://dev4.partao.com/rest/V1/integration/customer/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: 'davith@partao.com',
          password: 'Test1234!'
        })
      })

      if (!tokenResponse.ok) {
        throw new Error('Failed to fetch token');
      }

      const token = await tokenResponse.json();

      const itemsResponse = await fetch('https://dev4.partao.com/rest/V1/carts/mine/items', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      const items = await itemsResponse.json();
      console.log('items', items)
    }
    fetchCartItems()
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Checkout Count {count}</h1>
      <div className="product-item-actions">
        <button className="test-button" onClick={onTestButtonClick}>test button</button>
      </div>
    </div>
  );
};

export default CheckoutCount;