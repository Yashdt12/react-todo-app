import './Content.css';
import ItemList from './ItemList.js';

const Content = ({ items, handleCheck, handleDelete }) => {

    return (
        <main className="Content">
            {items.length > 0 ? (
                <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
            ) : (
                <p className="message">List is empty</p>
            )}
        </main>
    );
}

export default Content;