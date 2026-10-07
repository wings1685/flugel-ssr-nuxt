import { updateTask } from "@/server/db/tasks/updateTask";
import { taskSchema, validateSafeParse } from "@/_global/lib/validate";

export default defineEventHandler(async (event) => {
	const id = getRouterParam(event, 'id') ?? '';
	const data = await readBody(event);
	const input = {
		...data,
		id: +id,
	};
	const result = validateSafeParse(taskSchema, input);
	if (!result.success) throw createError({ statusCode: 400, statusMessage: 'Missing fields' });

	await updateTask(result.output);

	return { status: 201 };
});
