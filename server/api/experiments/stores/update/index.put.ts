import { piquoStore } from "@/_global/piquo";
import { setRawNano } from "@/_global/stores/nano.ts";
import type { StoreName } from "@/_global/stores";

export default defineEventHandler(async (event) => {
	const data = await readBody(event);
	const key = data.key as StoreName;
	if (key === 'piquo') {
		const { setPiquoRef } = piquoStore('piquoRef');
		setPiquoRef('forServer');
	} else if (key === 'rawNano') {
		setRawNano('forServer');
	} else if (key === 'piquoNano') {
		const { setPiquoNano } = piquoStore('piquoNano');
		setPiquoNano('forServer');
	}

	return setResponseStatus(event, 204);
});
