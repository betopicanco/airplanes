import HeadingProps from "./HeadingProps";

export default function H1({ children }: HeadingProps) {
  return (
    <h1 className={` text-3xl text-blue-800 font-bold `}>
      { children }
    </h1>
  )
}