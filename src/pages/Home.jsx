import List from "../components/list/List";
import SearchBar from "../components/searchBar/SearchBar";
import styles from './home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <SearchBar />
            <List />
        </div>
    );
}

export default Home;
