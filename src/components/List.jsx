import { render } from '@testing-library/react'
import './Card'
import Card from './Card';
export default function List({users}){
    const obj=users.map((el)=> {
        return(
            <Card user={el} />
        );
    })
    return(
        <div>{obj}</div>
    );
}