export interface IInputError {}

export interface IInput {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  error?: any;
}
