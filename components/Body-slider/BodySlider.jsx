import "./bodySlider.css";
import { CardSlider } from "./Cart";
import { useStore } from "../../src/store";
import {useEffect}  from "react";
import { useState } from "react";

export const BodySlider = () => {
    const {select, setSelect} = useStore();
    const {select2, setSelect2} = useStore();
    const {arr, setArr} = useStore();
    const {loading, setLoading} = useStore();
    const [grouping, setGrouping] = useState("airing_today")

    const SelectType = () => {
        setSelect("today")
        setSelect2("")
        setGrouping("airing_today")
    }

    const SelectType1 = () => {
        setSelect("")
        setSelect2("thisWeek")
        setGrouping("popular")
    }
  

  const loadData = async () => {
    setLoading(true);
    try {
      let resp = await fetch(`https://api.themoviedb.org/3/tv/${grouping}`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWMyYmFmZjc1MDdhMTg0NDE0OGM3YmVkYzg1MzlkZiIsInN1YiI6IjY1NTUwY2Y5NjdiNjEzNDVjZDM0NTJlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wYepxT5ar3jJQrWdMkPSrHKRuq3MxR03WkFLGeK69Qk'
          }
      });
      let jsonData = await resp.json();
      setArr(jsonData.results);
      setLoading(false);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, [grouping]);
    return(
         <div>
            <div className="contaiber-slider">
                <div className="body-choose">
                    <p>TV Series</p>
                    <div className="select">
                        <span onClick={SelectType} className={select}>
                            Today
                            <div className="bg-select"></div>
                            </span>
                        <span onClick={SelectType1} className={select2}>
                            This Week
                            <div className="bg-select"></div>
                            </span>
                    </div>
                </div>
            </div>
            <CardSlider cards={arr} />
         </div>
    )
}