import React from "react";
import './style.css';
import { Card } from "../card";

export const CardList = props =>(
    <div className="card-list">
        {props.users.map(el => (
        <Card key={el.id} user={el}/>
    ))}
    </div>
);