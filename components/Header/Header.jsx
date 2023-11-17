import "./header.css"

export const Header = () =>{
    return (
        <div>
            <div>
                <div className="header-parent">
                    <div className="overlay">
                    <div className="container-head">
                        <div className="header-content ">
                            <h1>Welcom</h1>
                            <p>Millions of movies, TV shows and people to discover. Explore now.</p>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Search for a movie, tv show, person....."/>
                            <button>Search</button>
                        </div> 
                    </div>
                    </div>
                    <div className="container-mid">
                    <img src="https://picsum.photos/1350/400" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}