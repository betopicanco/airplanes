export default interface InputProps {
  type?: 'text' | 'number' | 'email' | 'date',
  value?: string | number | Date,
  label: string,
  min?: string
  onChange: (e: any) => any
}