const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li key={item.id}>
            <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
            />
            <input
                type="text"
                value={item.content}
                onChange={() => handleCheck(item.id)}
                style={item.checked ? {textDecoration: 'line-through'} : {}}
            />
            <button
                className="deleteBtn"
                onClick={() => handleDelete(item.id)}
            >Delete</button>
        </li>
    )
};

export default LineItem;