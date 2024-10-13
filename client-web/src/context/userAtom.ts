import { User } from "pb/user_pb";
import { atom } from "recoil";

export const authrizedUserAtom = atom<User.AsObject | null>({
  default: null,
  key: "authrizedUserAtom",
});