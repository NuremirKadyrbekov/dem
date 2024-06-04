import React, { useState } from "react";
import Css from "./Home.module.css";
import { Drama } from "../../data/data";
import Search from "antd/es/input/Search";
import BookImg from '../../img/1.png'
import { Skeleton } from 'primereact/skeleton';
         

function Home() {
  const [limit, setLimit] = useState(5);
  const [value, setValue] = useState("");

  let content;

  const SearchFunction = Drama.filter((item) => {
    return item.Name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
  });

  const LimitedSearch = SearchFunction.slice(0, limit);
  return (
    <div className={Css.main}>
      <div className={Css.SearchBlock}>
        <div className={Css.SearchForm}>
          <Search
            placeholder="input search text"
            onInput={(event) => setValue(event.target.value)}
            enterButton
          />
        </div>
      </div>
      <div className={Css.ContainerBooks}>
        {/* {content} */}
        {LimitedSearch.map((item, id) => {
          return (
            <>
              <div className={Css.Card}>
                <div className={Css.CardImage}>
                    <img src={BookImg} alt="" className={Css.ImageBook} />

                    {/* <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton> */}
                </div>
                <div className={Css.category}>{item.Year}</div>
                <div className={Css.heading}>
                  {" "}
                 {item.Name}
                  <div className={Css.author}>
                    {" "}
                    Count <span className={Css.name}>{item.Count}</span> 
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <button onClick={() => setLimit(limit + 10)}>More</button>
      </div>
    </div>
  );
}

export default Home;
