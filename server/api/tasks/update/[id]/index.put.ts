import { updateTask } from "@/server/db/tasks/updateTask";

export default defineEventHandler(async (event) => {
	const id = getRouterParam(event, 'id') ?? '';
	const data = await readBody(event);
	data.id = +id;
	await updateTask(data);

	return { status: 201 };
});
