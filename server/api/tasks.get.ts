import { buildFindQuery, fetchTasks } from "@/server/db/tasks/fetchTasks";
import { defaultFindValues } from "@/_global/lib/validate";

export default defineEventHandler(async (event) => {
	const query = getQuery(event);
	const queryInput = {
		title: query.title?.toString() ?? defaultFindValues.title ?? '',
		sort: query.sort?.toString() ?? defaultFindValues.sort,
	};

	const findQuery = buildFindQuery(queryInput);
	const tasks = await fetchTasks(findQuery);

	return { tasks, findQuery };
});
