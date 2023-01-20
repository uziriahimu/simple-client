import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleData = () => {
    const { text } = useLoaderData()
    return (
        <div>
            <div className=' max-w-screen-xl mx-auto mt-10 '>
                <div className="overflow-x-auto w-full ">
                    <table className="table w-1/2 mx-auto">
                        <thead>
                            <tr>
                                <th className='bg-slate-500 text-white text-center'>Text</th>

                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td className='bg-slate-200 text-black text-center'>{text}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default SingleData;