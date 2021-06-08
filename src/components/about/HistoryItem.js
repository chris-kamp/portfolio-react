const HistoryItem = ({org, date, items}) => {
  return (
    <div className="w-11/12 xs:w-10/12 sm:9/12 pb-2">
      <p className="grid grid-cols-2 text-xs mb-1">
        <span className="font-bold">{org}</span>
        <span className="font-bold text-right">{date}</span>
      </p>
      {items.map((item, index) => (
        <span className="text-xs inline-block" key={`org${index}`}>{item}</span>
      ))}
      
    </div>
  )
}

export default HistoryItem
