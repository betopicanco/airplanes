export default function ParseDate({date}: {date: Date}) {
  // const formatedDate = new Date(date.toString()).toLocaleDateString('pt-BR')
  const formatedDate = new Date(date.toString().replaceAll('.000Z', '')).toLocaleDateString('pt-BR');
  
  return (
    <span>
      {formatedDate}
    </span>
  );
}