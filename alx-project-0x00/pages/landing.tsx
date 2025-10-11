import Card from "@/components/Card"
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
    </div>
  )
}

import React from 'react';
import Button from '../components/Button';

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center gap-4">
      <h1 className="text-3xl font-bold mb-6">Landing Page</h1>
      
      {/* Small Buttons */}
      <div className="flex gap-3">
        <Button title="Small Rounded-sm" styles="text-sm rounded-sm px-2 py-1" />
        <Button title="Small Rounded-md" styles="text-sm rounded-md px-2 py-1" />
        <Button title="Small Rounded-full" styles="text-sm rounded-full px-2 py-1" />
      </div>

      {/* Medium Buttons */}
      <div className="flex gap-3">
        <Button title="Medium Rounded-sm" styles="text-base rounded-sm px-3 py-2" />
        <Button title="Medium Rounded-md" styles="text-base rounded-md px-3 py-2" />
        <Button title="Medium Rounded-full" styles="text-base rounded-full px-3 py-2" />
      </div>

      {/* Large Buttons */}
      <div className="flex gap-3">
        <Button title="Large Rounded-sm" styles="text-lg rounded-sm px-5 py-3" />
        <Button title="Large Rounded-md" styles="text-lg rounded-md px-5 py-3" />
        <Button title="Large Rounded-full" styles="text-lg rounded-full px-5 py-3" />
      </div>
    </main>
  );
};


export default Landing
