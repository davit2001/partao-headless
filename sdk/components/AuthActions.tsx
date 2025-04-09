import { useEffect, useState } from 'react';

const AuthActions = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch('https://dev4.partao.com/rest/V1/customers/me', {
      credentials: 'include'
    })
      .then(res => {
        console.log('customer info response', res)
        if (!res.ok) throw new Error('User not logged in');
        return res.json();
      })
      .then(user => {
        console.log('✅ Logged in as', user);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log('❌ Not logged in', err.message);
        setIsLoggedIn(false);
      });
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center">
        <a className="text-4xl font-bold" href="/customer/account/login/">Sign in</a>
        <a className="text-4xl font-bold" href="/customer/account/create/">Sign Up</a>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <a className="text-4xl font-bold" href="/customer/account/logout">Log out</a>
    </div>
  );
};

export default AuthActions;