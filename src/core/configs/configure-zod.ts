import { z } from "zod";

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.too_small) {
    if (issue.minimum === 1) {
      return { message: "Campo obrigatório" };
    }

    return { message: `Mínimo de ${issue.minimum} caracteres` };
  }

  if (issue.code === z.ZodIssueCode.invalid_string) {
    if (issue.validation === "email") {
      return { message: "Email inválido" };
    }
  }

  if (issue.code === z.ZodIssueCode.invalid_type) {
    if (issue.received === "undefined") {
      return { message: "Campo obrigatório" };
    }
  }

  return { message: ctx.defaultError };
};

z.setErrorMap(customErrorMap);
