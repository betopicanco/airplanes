import Header from "./header";

export default function LayoutDefault({ children }: { children: JSX.Element }) {
  return (
    <div className={` text-blue-900 `}>
      <Header />

      { children }
    </div>
  );
}