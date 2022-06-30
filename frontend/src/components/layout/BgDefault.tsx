interface BgDefaultProps {
  children: JSX.Element
}

export default function BgDefault({ children }: BgDefaultProps) {
  return (
    <div className={' min-h-screen bg-blue-300 '}>
      { children }
    </div>
  );
}