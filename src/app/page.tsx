"use client";

import Switch from "@/components/switch/Switch";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4 text-center">
      <h1 className="text-white text-6xl my-4">Open Check FUNCoder</h1>
      <Switch className="mt-4" />
    </div>
  );
}