import { buildFindQuery, fetchTasks } from "@/server/db/tasks/fetchTasks";

export default defineEventHandler(async (event) => {
	const query = getQuery(event);
	const findQuery = buildFindQuery(query);
	const tasks = await fetchTasks(findQuery);

	return { tasks, findQuery };
});
