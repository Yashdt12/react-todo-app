import './AddItem.css';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    return (
        <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="addItem" className="offscreen">Item name:</label>
            <input type="text" id="addItem" placeholder="New Item..." value={newItem} onChange={(e) => setNewItem(e.target.value)} autoFocus required />
            <button>Add</button>
        </form>
    )
};

export default AddItem;