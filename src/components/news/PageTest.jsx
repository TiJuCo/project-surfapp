import React, {useState} from "react";
import './News-List.css';
import {FaChevronRight} from 'react-icons/fa';
import { ArticlesData } from "./News-Data";
import { useParams } from 'react-router-dom';

const gradient = "linear-gradient(360deg, rgba(57, 73, 87, 0.9) 0%, rgba(255, 255, 255, 0) 100%)"

function PageTest() {

    // receber params
    let param = useParams();
    console.log(param)
    // filter by index 

    

    return (
        <div>
            New Page test
            {ArticlesData.filter((index) => param.index === index).map(
                (el) => console.log(el.title)
            )}

        </div>
    )
}

export default PageTest;