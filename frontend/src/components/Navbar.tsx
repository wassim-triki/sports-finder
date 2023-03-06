import React from 'react';
import { Container } from '../layouts/Container';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="w-full bg-slate-800 text-white p-4">
      <Container className="flex justify-between items-center">
        <Link to="/">
          <div className="bg-red-400s text-xl font-normal">
            <p>
              Play<span className="text-accent-400 font-bold">Finder</span>
            </p>
          </div>
        </Link>

        <div className="flex gap-4 items-center">
          <Link to={'/login'}>Login</Link>
          <Link
            className="border-2
           border-accent-400 px-2 py-1 rounded-sm text-accent-400 hover:text-slate-800 hover:bg-accent-400 transition-all"
            to={'/register'}
          >
            Register
          </Link>
        </div>
      </Container>
    </nav>
  );
};
