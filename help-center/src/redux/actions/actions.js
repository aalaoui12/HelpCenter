export const UPDATE_HITS = 'UPDATE_HITS';
export const CLEAR_HITS = 'CLEAR_HITS'

export function updateHits(hits) {
  return {type : UPDATE_HITS, hits: hits};
}
export function clearHits() {
  return {type : CLEAR_HITS};
}