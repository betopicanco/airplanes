export default interface InputProps {
  type?: 'text' | 'number' | 'email',
  value?: string | number,
  label: string,
  onChange: (e: any) => any
}