import { deleteTask } from "@/server/db/tasks/deleteTask";

export default defineEventHandler(async (event) => {
	const id = getRouterParam(event, 'id') ?? '';
	const data = { id: +id };
	await deleteTask(data);

	return setResponseStatus(event, 204);
});
