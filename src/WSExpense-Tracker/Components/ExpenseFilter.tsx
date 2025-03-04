


interface Props {
    onSelectCategory: (category:string)=> void;
}

const ExpenseFilter = ({onSelectCategory}: Props ) => {
  return (
    <select className="form-select" onChange= {(event)=> onSelectCategory (event.target.value) }>
        <option value="">All Categories</option>
        <option value="Subaru">Subaru</option>
        <option value="Volkswagen">Volkswagen</option>
        <option value="Toyota">Toyota</option>
        <option value="BMW">BMW</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Peugeot">Peugeot</option>
    </select>
  )
}

export default ExpenseFilter