import { defineStoreValues, storeNames } from "../../stores";
import type { ExperimentStoreKeys } from "../../stores";

const values = defineStoreValues(storeNames.piquo);
export const _piquoRef = {
	server: {
		piquoRef: () => values.initial(),
		setPiquoRef: (_: ExperimentStoreKeys) => {},
	},
	client: () => {
		const piquoRef = ref(values.initial());
		const setPiquoRef = (key: ExperimentStoreKeys) => piquoRef.value[key] = values.changed();

		return { piquoRef: () => piquoRef.value, setPiquoRef };
	},
};
