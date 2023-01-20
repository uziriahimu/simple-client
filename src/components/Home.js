import React from 'react';

const Home = () => {

    const handlesubmit = event => {
        event.preventDefault()
        const form = event.target
        const text = form.text.value
        console.log(text)

        const taskdata = {
            text
        }

        fetch('http://localhost:5000/textdata', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(taskdata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    // toast.info('review placed successfully')
                    form.reset();

                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div className=' border rounded-lg p-5  bg-gray-100 lg:w-1/3 mx-auto mt-40 '>
            <form onSubmit={handlesubmit} className="card-body  bg-slate-300 rounded">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Text</span>
                    </label>
                    <input type="text" name='text' placeholder="Type Here" className="input input-bordered" />
                </div>

                <div className="form-control mt-6">
                    <input className="btn bg-purple-400 border-none" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default Home;