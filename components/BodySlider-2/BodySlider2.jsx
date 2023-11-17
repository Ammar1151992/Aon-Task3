import "./bodySlider2.css";
import { useStore } from "../../src/store";
import {useEffect}  from "react";
import { useState } from 'react';

export const Slider2 = () => {
    const {loading, setLoading} = useStore();
    const {nowplay, setNowplay} = useStore();
    const [group, setGroup] = useState("now_playing");
    const {slid2, setSlid2} = useStore();
    const {menu, setMenu} = useStore();

    const API = "https://image.tmdb.org/t/p/w300/";
    let selecting =[
        {title: "Now Playing"}, 
        {title: "Popular"}, 
        {title: "Top Rate"},
        {title: "Upcoming"}, ] 

        
const Condition = (index) => {
    if(selecting[index].title === "Now Playing"){
        setGroup("now_playing")
    }else if(selecting[index].title === "Popular"){
        setGroup("popular")
    }else if(selecting[index].title === "Top Rate"){
        setGroup("top_rated")
    }else if(selecting[index].title === "Upcoming"){
        setGroup("upcoming")
    }
}

const Listed = () => {
    setMenu(!menu)
}

    // API Fetch for Now Playing videos
    const loadData = async () => {
        setLoading(true);
        try {
          let resp = await fetch(`https://api.themoviedb.org/3/movie/${group}`, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWMyYmFmZjc1MDdhMTg0NDE0OGM3YmVkYzg1MzlkZiIsInN1YiI6IjY1NTUwY2Y5NjdiNjEzNDVjZDM0NTJlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wYepxT5ar3jJQrWdMkPSrHKRuq3MxR03WkFLGeK69Qk'
              }
          });
          let jsonData = await resp.json();
          setNowplay(jsonData.results);
          setLoading(false);
    
        } catch (error) {
          console.log(error);
        }
      };
      const percentage = 90;

      useEffect(() => {
        loadData();
      }, [group]);
    return (
        <div>
            <div className="container-slider2">
            {console.log(group)}
                <div className="content-slider2">
                    <div className="slide2-parent">
                    <div className="overlay">
                    {/* here */}
                    <div className="container-ss">
                    <div className="body-choose body-choose2">
                    <p>Movie List</p>
                    <div className="parent-menu">
                    <i onClick={Listed} className={`fas fa-caret-down ${menu? "acivated": ""}`}></i>
                        <div className={menu ? "menu-active" : "notmenu-active"}>
                            <div className="menu-act">
                                 {selecting.map((select, index) => (
                                <span onClick={ () =>{
                                    setSlid2(index)
                                    Condition(index)
                                     } } className={slid2 ===index ? `selector${index}` : ""}>
                                     {select.title}
                                </span>
                            
                                     ))}
                                 </div>
                        </div>
                    </div>
                    <div className="par-select">
                    <div className="select select2">
                        {selecting.map((select, index) => (
                            <span onClick={ () =>{
                                setSlid2(index)
                                Condition(index)
                            } } className={slid2 ===index ? `selector${index}` : ""}>
                            {select.title}
                            <div className="bg-select"></div>
                            </span>
                            
                        ))}
                    </div>
                    </div>
                    </div>
                </div>
                    <div className="flex-slide2">
                        {nowplay.map((result) => (
                        <div>
                        <img src={API+result.backdrop_path} alt="" />
                        <h2>{result.title}</h2>
                        <p>{result.release_date}</p>
                        </div>
                        ))}
                    </div>
                    </div>
                        <img className='res' src="https://picsum.photos/1350/400" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}