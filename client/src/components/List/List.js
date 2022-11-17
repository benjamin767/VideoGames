
function List({def, options, handler}) {
	return (
	<select name="types" className="types" onChange={handler}>
    	<option value='default'>{def}</option>
    	{options && options.map((option,i) => <option key={i} value={option}>{option}</option>)}
    </select>
	);
}
export default List;