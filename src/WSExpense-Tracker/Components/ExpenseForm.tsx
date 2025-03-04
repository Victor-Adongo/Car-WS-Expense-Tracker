import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import categories from "../categories"


interface Props{
    onSubmit: (data: ExpenseFormData)=> void;
}

const schema= z.object ({
    description: z.string() .min(3, {message: 'Description should be at least 3 characters.'}) .max(50),
    amount: z.number( {invalid_type_error: 'Amount is required.'}) .min(0.01) .max(100_000),
    category: z.enum (categories, {
        errorMap: () => ({message: 'Category is required.'})
    }),
});

type ExpenseFormData= z.infer <typeof schema>;

const ExpenseForm = ( {onSubmit}: Props ) => {
    const {
        register, 
        handleSubmit, 
        reset,
        formState: {errors}}
        = useForm <ExpenseFormData> ({resolver:zodResolver (schema)});
  return (
    <form onSubmit= {handleSubmit (data=> {
        onSubmit(data);
        reset();
    })}>
        <div className="mb-3"><label htmlFor="Description" className="form-label">Description</label>
        <input {...register ('description')} id='Description' type="text" className="form-control" />
        {errors.description && <p className="text-danger"> {errors.description.message} </p> }
        </div>
        <div className="mb-3"><label htmlFor="Amount" className="form-label">Amount</label>
        <input {...register ('amount', {valueAsNumber: true})} id='Amount' type="number" className="form-control" />
        {errors.amount && <p className="text-danger"> {errors.amount.message} </p> }
        </div>
        <div className="mb-3"><label htmlFor="Category" className="form-label">Category</label>
        <select {...register ('category')} id="Category" className="form-select">
           <option value=""></option>
           <option value="Subaru">Subaru</option>
           <option value="Volkswagen">Volkswagen</option>
           <option value="Toyota">Toyota</option>
           <option value="BMW">BMW</option>
           <option value="Mercedes">Mercedes</option>
           <option value="Peugeot">Peugeot</option>
            </select>
            {errors.category && <p className="text-danger"> {errors.category.message} </p> }
            </div>
            <button className="btn btn-primary">Submit</button>
    </form>
  )
}

export default ExpenseForm