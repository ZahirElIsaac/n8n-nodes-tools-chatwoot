export const MAX_RESULTS = 100000;

export const LIMIT_RESULTS = `={{ $parameter["returnAll"] ? ${MAX_RESULTS} : $parameter["limit"] }}`;
