import ExpenseList from "./WSExpense-Tracker/Components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./WSExpense-Tracker/Components/ExpenseFilter";
import ExpenseForm from "./WSExpense-Tracker/Components/ExpenseForm";


function App() {
  const [selectedCategory, setSelectedCategory]= useState ('')
  const [expenses, setExpenses] = useState ([
    { id: 1, description: 'Imprezza',amount: 300, category: 'Subaru'},
    { id: 2, description: 'Passat',amount: 320, category: 'Volkswagen'},
    { id: 3, description: 'W204',amount: 400, category: 'Mercedes'},
    { id: 4, description: 'Prado',amount: 260, category: 'Toyota'},
    { id: 5, description: '5231',amount: 350, category: 'BMW'}
  ])
  const visibleExpenses= selectedCategory? expenses.filter((e)=> e.category===selectedCategory): expenses;
 
  return (
<div>
  <div className="mb-5">
    <ExpenseForm onSubmit= {expense=> setExpenses([...expenses, {...expense, id: expenses.length+1}])} />
  </div>
  <div className="mb-3">
  <ExpenseFilter onSelectCategory= {category=> setSelectedCategory(category) }/>
  </div>
  <ExpenseList expenses={visibleExpenses} onDelete={(id)=> setExpenses(expenses.filter (e => e.id !==id))} />
</div>

  );
}

export default App
