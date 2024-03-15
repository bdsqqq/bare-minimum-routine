import { db } from "../drizzle/db";
import { revalidateTag, unstable_cache } from "next/cache";

import { routine } from "@/drizzle/schema";

const possible_exercises = [
  "walking lunges",
  "push-ups",
  "rows",
  "plank shoulder taps",
];

type newRoutine = typeof routine.$inferInsert;

async function createRoutine$(formData: FormData) {
  "use server";

  const newRoutine: newRoutine = {
    circuits: [
      {
        sets: [
          {
            "walking lunges": {
              reps: 10,
            },
          },
          {
            "push-ups": {
              reps: 10,
            },
          },
        ],
      },
    ],
  };

  const routineRes = await insertRoutine$(newRoutine);

  revalidateTag("routines");
  console.log(routineRes);
}

const insertRoutine$ = async (newRoutine: newRoutine) => {
  "use server";

  return await db.insert(routine).values(newRoutine);
};

const getRoutines = unstable_cache(
  async () => {
    return await db.select().from(routine);
  },
  ["routines"],
  {
    tags: ["routines"],
  }
);

export default async function Home() {
  const result = await getRoutines();

  return (
    <>
      <main className="container">
        <h1 className="hidden">Bare minimum</h1>

        <section>
          <form action={createRoutine$}>
            <button>submit</button>
          </form>
        </section>

        <pre>{result.length}</pre>
      </main>
    </>
  );
}
