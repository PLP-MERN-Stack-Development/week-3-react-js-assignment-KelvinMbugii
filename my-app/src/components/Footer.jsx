import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 text-center text-gray-500 p-4">
      © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
    </footer>
  );
}