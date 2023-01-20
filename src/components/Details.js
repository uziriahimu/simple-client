import React from 'react';
import { Link } from 'react-router-dom';

const Details = ({ texts }) => {
    console.log(texts);
    const { text, _id } = texts;
    return (

        <tr>
            <td>{_id}</td>
            <td>{text}</td>
            <td>
                <Link to={`/textdata/${_id}`}> <button className='btn btn-primay'>Details</button> </Link>
            </td>


        </tr >

    );
};

export default Details;