import { ReactNode } from 'react';

interface FormInputProps {
  children: ReactNode;
}

export function FormInputBox({ children }: FormInputProps) {
  return { children };
}
