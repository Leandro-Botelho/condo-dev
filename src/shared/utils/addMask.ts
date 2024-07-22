import { mask, unMask } from "remask";

export function addMask(value: string, maskString: string) {
  const maskValue = unMask(value);

  return mask(maskValue, maskString);
}
