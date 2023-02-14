import "./List.css";

function List({def, options, handler, name}) {
	return (
	<select name={name} onChange={handler} className="select-css ">
    	<option value='default'>{def}</option>
    	{options && options.map((option,i) => <option key={i} value={option}>{option}</option>)}
    </select>
	);
}
export default List;