CREATE TABLE `routine` (
	`id` text PRIMARY KEY NOT NULL,
	`timestamp` text DEFAULT CURRENT_TIMESTAMP,
	`circuits` blob
);
