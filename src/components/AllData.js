import React, { useEffect, useState } from 'react';
import Details from './Details';

const AllData = () => {

    const [datas, setDatas] = useState([])
    // const { _id } = useLoaderData()

    useEffect(() => {
        fetch('http://localhost:5000/textdata')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])

    return (
        <div>
            <div className=' max-w-screen-xl mx-auto'>
                <div className="overflow-x-auto w-full mt-8">
                    <table className="table w-full">
                        <thead >
                            <tr >
                                <th> Id</th>
                                <th>Text</th>

                            </tr>

                        </thead>
                        <tbody >
                            {
                                datas.map(texts => <Details
                                    key={texts._id}
                                    texts={texts}
                                ></Details>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllData;