import { create, remove, toggle, update } from "./todoSlice";

export const actions = {
  todo: {
    create: create,
    remove: remove,
    toggle: toggle,
    update: update,
  },
};
