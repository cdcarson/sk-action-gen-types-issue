import type { Action, Actions } from '@sveltejs/kit';

export type SignInFormData = {
  email: string;
  password: string;
  remember: boolean;
};

// src/routes/sign-in/+page.server.ts
type SuccessOutput = { message: string; redirect: string };
type TypedForm = {
  data: Record<string, unknown>;
  errors: Record<string, string>;
};

type Output = {
  success?: {message: string; redirect: string},
  form?: TypedForm
}

export const actions: Actions = {
  default: async (event): Promise<Output> => {
    try {
      // sign the user in succesfully
      // and return SuccessOutput (ignoring the non-progressive case)
      return {success: { message: 'Yay', redirect: '/' }};
    } catch (error) {
      // assume it's a TypedForm, from above
      return {form: error  as TypedForm};
    }
  }
};
