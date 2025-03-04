import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
    return (
        <div className={styles.searchBox}>
            <label htmlFor="search">
                Find contacts by name
                <input
                    type="text"
                    id="sarch"
                    value={value}
                    onChange={onChange}
                    placeholder="Search contacts..."
                >
                </input>
            </label>
        </div>
    );
};

export default SearchBox;