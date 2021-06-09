const HistoryItem = ({org, date, items}) => {
  return (
    <div className="w-11/12 mb-2 xs:w-10/12">
      <p className="grid grid-cols-2 mb-1 text-xs xs:text-sm sm:text-lg">
        <span className="font-bold">{org}</span>
        <span className="font-bold text-right">{date}</span>
      </p>
      {items.map((item, index) => (
        <span className="inline-block text-xs font-light xs:text-sm sm:text-lg" key={`org${index}`}>{item}</span>
      ))}
      
    </div>
  )
}

export default HistoryItem
