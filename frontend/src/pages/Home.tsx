import React from 'react';
import { Feed } from '../components/Feed';
import { Sidebar } from '../components/Sidebar';
import { Container } from '../layouts/Container';

export const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8">
      <Sidebar />
      <Feed />
    </div>
  );
};
