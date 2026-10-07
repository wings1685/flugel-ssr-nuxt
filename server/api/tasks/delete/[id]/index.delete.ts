import { deleteTask } from "@/server/db/tasks/deleteTask";
import { deleteTaskSchema, validateSafeParse } from "@/_global/lib/validate";

export default defineEventHandler(async (event) => {
	const id = getRouterParam(event, 'id') ?? '';
	const data = { id: +id };
	const result = validateSafeParse(deleteTaskSchema, data);
	if (!result.success) throw createError({ statusCode: 400, statusMessage: 'Missing fields' });

	await deleteTask(result.output);

	return { status: 201 };
});
