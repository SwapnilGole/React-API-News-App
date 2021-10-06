// import React, { Component } from 'react'
import React from 'react'

const NewsItem =(props)=>{
        let {title,description,imgUrl,newsurl,author,date,source} = props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imgUrl?"https://images.moneycontrol.com/static-mcnews/2021/02/Tata-Safari-4-770x433.jpg?impolicy=website&width=770&height=431":imgUrl} className="card-img-top" alt="..." style={{width:"100%",height:"200px"}}/>
                    <div className="card-body">
                        <div style={{    display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        right: "0",
                        top: "0"}}>
                            <span className=" badge rounded-pill bg-danger">
                            {source}</span>
                        </div>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}{description.length === 88 ? "...":" "}</p>
                        <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>
                        <p className="card-title">By {author ?  author :"unknown"} at {new Date(date).toGMTString()}</p>
                    </div>
                    </div>
                </div>
        )
}

export default NewsItem
