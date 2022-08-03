export default function Header({totalIncome}) {
    return(
       <header>
        <h1>How much dough did you earn today?</h1>
        <div className="total-income">¥{totalIncome}</div>
       </header>
    )
}