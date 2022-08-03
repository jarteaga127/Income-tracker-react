import React, {useRef} from "react";

export default function IncomeForm({income, setIncome}) {

const desc = useRef(null);
const date = useRef(null);
const price = useRef(null);

const AddIncome = e => {
    e.preventDefault();

    let d = date.current.value.split("-");

    let newD = new Date(d[0], d[1], d[2]);

    setIncome([...income, {
       "desc": desc.current.value,
"price": price.current.value,
"date": newD.getTime()

    }]);

    desc.current.value = "";
    price.current.value = null;
    date.current.value = null;

}

    return(
        <form className="income-form" onSubmit={AddIncome}>
            <div className="form-inner">
                <input type="text" name="descript" id="description" placeholder="What did you do?" ref={desc}/>
                <input type="number" name="price" id="price" placeholder="How much did you get?" ref={price} />
                <input type="date" name="date" id="date" placeholder="When did you get it?" ref={date}/>
                <input type="submit" value="add income" />
            </div>
        </form>
    )
};