// we use constant variables instead of strings,
// which prevents hidden errors resulting from typos
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const BUY_ITEM = "BUY_ITEM";

// these are just pure functions that return predefined actions
export function removeFeature(item) {
  return { type: REMOVE_FEATURE, payload: item};
}

// our action creators ore more flexible than hard-coded actions,
// because we can pass parameters to tweak things when called
export function buyItem(item) {
  return {
    type: BUY_ITEM, payload: item};
}