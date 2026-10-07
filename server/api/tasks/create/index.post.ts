import { createTask } from "@/server/db/tasks/createTask";
import { createTaskSchema, validateSafeParse } from "@/_global/lib/validate";

export default defineEventHandler(async (event) => {
	const data = await readBody(event);
	const result = validateSafeParse(createTaskSchema, data);
	if (!result.success) throw createError({ statusCode: 400, statusMessage: 'Missing fields' });

	await createTask(result.output);

	return { status: 201 };
});
