import IconsProps from "./IconsProps";

export default function AirplaneIcon({ style }: IconsProps) {
  return (
    <svg 
      className={style} 
      viewBox="0 0 24 24"
      stroke="currentColor" 
      fill="none" strokeLinecap="round" strokeLinejoin="round">  
      <path stroke="none" d="M0 0h24v24H0z"/>  
      <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2-4l-2 -4h3l2 2h4l-2 -7h3z" />
    </svg>
  );
}