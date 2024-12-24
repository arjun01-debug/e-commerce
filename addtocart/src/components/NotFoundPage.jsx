import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000)
  }, [])

  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for doesn't exist.</p>
      <p>You will be redirected to the homepage.</p>
    </div>
  );
}

export default NotFoundPage;