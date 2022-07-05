export default interface InputProps {
  type?: 'text' | 'number' | 'email',
  value?: string | number,
  label: string,
  min?: string
  required?: boolean
  onChange: (e: any) => any
}