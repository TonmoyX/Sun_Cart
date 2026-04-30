import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaEdit } from 'react-icons/fa';

const UpdateUserModal = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;

        await authClient.updateUser({
            name: name,
            image: image
            // })
        })
    }
    return (
        <div>
            <button className="btn bg-gradient-to-r from-pink-400 to-purple-500 text-white" onClick={() => document.getElementById('my_modal_5').showModal()}><FaEdit /> Update Profile</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
            <form onSubmit={onSubmit}>
                        <fieldset className="fieldset bg-base-200 border-base-300 mx-auto mb-15 rounded-box w-xs border p-4">

                            <label className="label" >Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />

                            <label className="label">Image URL</label>
                            <input type="text" name='image' className="input" placeholder="Image URL" />

                            {/* <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" /> */}

                        </fieldset>
                        <div className="modal-action">
                                <button  onClick={() => document.getElementById('my_modal_5').close()} type='submit' className="btn btn-primary">Submit</button>
                        </div>
            </form>
                    </div>
                </dialog>
        </div>
    );
};

export default UpdateUserModal;