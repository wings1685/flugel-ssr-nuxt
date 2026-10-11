import { ref } from "vue";
import { defineStoreValues, storeNames } from "./";
import type { ExperimentStoreKeys } from "./";

const values = defineStoreValues(storeNames.rawRef);
export const rawRef = ref(values.initial());
export const setRawRef = (key: ExperimentStoreKeys) => rawRef.value[key] = values.changed();
