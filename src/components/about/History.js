import CardSection from "./CardSection"
import HistoryItem from "./HistoryItem"

const historyItems = {
  coder: {
    org: "CODER ACADEMY",
    date: "FEB 2021 - PRESENT",
    items: ["DIPLOMA OF INFORMATION TECHNOLOGY"]
  },
  col: {
    org: "COLLEGE OF LAW",
    date: "2017",
    items: ["GRADUATE DIPLOMA OF LEGAL PRACTICE"]
  },
  uq: {
    org: "UNIVERSITY OF QUEENSLAND",
    date: "2010 - 2016",
    items: ["BACHELOR OF LAWS (Hons. 1st class)", "BACHELOR OF ARTS (Majoring in Japanese)"]
  },
  hg: {
    org: "HOPGOODGANIM LAWYERS",
    date: "FEB 2017 - PRESENT",
    items: ["ASSOCIATE (Banking & Finance)"]
  }
}

const History = () => {
  return (
    <>
      <CardSection posStart={true} heading="EDUCATION">
        <HistoryItem org={historyItems.coder.org} date={historyItems.coder.date} items={historyItems.coder.items}/>
        <HistoryItem org={historyItems.col.org} date={historyItems.col.date} items={historyItems.col.items}/>
        <HistoryItem org={historyItems.uq.org} date={historyItems.uq.date} items={historyItems.uq.items}/>

      </CardSection>

      <CardSection posStart={false} heading="EMPLOYMENT">
        <HistoryItem org={historyItems.hg.org} date={historyItems.hg.date} items={historyItems.hg.items}/>
      </CardSection>
    </>
  )
}

export default History
