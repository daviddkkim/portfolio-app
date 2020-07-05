import * as React from "react";
import './header.css';
import {
    BrowserRouter as Router,
    withRouter,
    Link
  } from "react-router-dom"


function onHeaderItem(item: string) {
    console.log(item)
}

function Header( header : {title:string, navigation: string[], sticky: boolean}) {
    return (
            <div className= {`header${header.sticky ? ' sticky' : ''}`} >
                <Link to="/david" className = "title" onClick = {() => onHeaderItem(header.title)}>{header.title}</Link>
                <div className = "navList">
                {header.navigation.map(item => (
                    <Link to={"/" + item.toLowerCase()} className= "horizontal" key={item} onClick = {() => onHeaderItem(item)}> {item} </Link>
                ))}
                </div>
            </div>
    )
  }

  
  export default Header;

  