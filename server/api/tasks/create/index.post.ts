import { createTask } from "@/server/db/tasks/createTask";

export default defineEventHandler(async (event) => {
	const data = await readBody(event);
	await createTask(data);

	return { status: 201 };
});
