import List from "../components/list/List";
import SearchBar from "../components/searchBar/SearchBar"
const Home=()=>{
    return(
        <div className="container">
            <SearchBar/>
            <List/>

        </div>
    )
}

export default Home;