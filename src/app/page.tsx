"use client";
import { drawer } from "@/components/drawer";

const possible_exercises = [
  "walking lunges",
  "push-ups",
  "rows",
  "plank shoulder taps",
];

export default function Home() {
  return (
    <>
      <main className="container">
        <h1 className="hidden">Bare minimum</h1>

        <section className="flex justify-center">
          <button className="h-min">
            <span className="text-8xl leading-none">01</span>
          </button>
        </section>

        <section>
          <button
            onClick={() => {
              drawer({ content: <div>drawer content</div> });
            }}
          >
            +
          </button>
        </section>
      </main>
    </>
  );
}
