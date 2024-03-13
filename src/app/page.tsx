"use client";
import { drawer } from "@/components/drawer";

export default function Home() {
  return (
    <>
      <main className="container">
        <h1>Bare minimum</h1>

        <button
          onClick={() => {
            drawer({ content: <div>Drawer content</div> });
          }}
        >
          Open Drawer
        </button>
      </main>
    </>
  );
}
