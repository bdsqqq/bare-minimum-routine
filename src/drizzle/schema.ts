import { sql } from "drizzle-orm";
import { text, integer, blob, sqliteTable } from "drizzle-orm/sqlite-core";

export type Set = Record<
  string,
  {
    reps?: number;
  }
>;

export type Circuit = {
  sets: Set[];
};

export const workout = sqliteTable("workout", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  timestamp: text("timestamp").default(sql`CURRENT_TIMESTAMP`),
  circuits: blob("circuits", {
    mode: "json",
  }).$type<Circuit[]>(),
});
