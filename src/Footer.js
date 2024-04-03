import './Footer.css';

const Footer = ({ length }) => {
    return (
        <div className="Footer">
            <p>{length} List {length === 1 ? "item" : "items"}</p>
        </div>
    );
}

export default Footer;