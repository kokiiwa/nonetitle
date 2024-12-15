import React from 'react';
import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { Mail } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 group">
          <div className="transition-transform duration-200 group-hover:scale-110 group-hover:rotate-12">
            <Mail className="w-10 h-10 text-indigo-600" />
          </div>
          <div>
            <Title />
            <Subtitle />
          </div>
        </div>
      </div>
    </header>
  );
};