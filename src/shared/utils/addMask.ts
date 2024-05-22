import { mask, unMask, unmask } from "remask";

export function addMask(value: string, maskString: string) {
  return mask(unmask(value), maskString);
}
