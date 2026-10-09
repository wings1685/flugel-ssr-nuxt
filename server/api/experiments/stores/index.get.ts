import { piquoStore } from "@/_global/piquo";
import { rawNano } from "@/_global/stores/nano.ts";

export default defineEventHandler(async () => {
	const { piquoRef } = piquoStore('piquoRef');
	const { piquoNano } = piquoStore('piquoNano');

	return {
		piquoRefServer: piquoRef().forServer,
		rawNanoServer: rawNano.get().forServer, piquoNanoServer: piquoNano.get().forServer,
	};
});
