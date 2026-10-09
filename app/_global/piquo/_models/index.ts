import { _piquoRef } from "./ref";
import { _piquoNano } from "./nano";

export const allStores = {
	piquoRef: _piquoRef,
	piquoNano: _piquoNano,
} as const;
export type AllStores = typeof allStores;
export type AllStoreKeys = keyof AllStores;
