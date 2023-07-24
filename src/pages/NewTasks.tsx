import { useEffect } from "react";
import Header from "../components/Header";
import {
    Datepicker,
    Input,
    initTE,
} from "tw-elements";
import './newtask.css'


function NewTasks() {

    useEffect(() => {
        initTE({ Datepicker, Input });

        const datepickerDisablePast = document.getElementById('datepicker-disable-past');
        new Datepicker(datepickerDisablePast, {
            disablePast: true
        });
    }, []);
    return (
        <>
            <Header />
            {/**The Form */}
            <div className="flex justify-center items-center mt-8">
                <form className="flex flex-col justify-center items-center min-w-max max-w-lg">
                    <label htmlFor="username" className="block flex-1">
                        <span className="text-gray-700">Title</span>
                        <input id="title" name="title" type="text" className="block m-2 mb-4 rounded-md p-2 w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Title: "></input>
                    </label>

                    <label htmlFor="description" className="block flex-1">
                        <span className="text-gray-700">Description</span>
                        <textarea id="description" name="description" className="block m-2 mb-4 rounded-md p-2 w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Description: "></textarea>
                    </label>

                    <label htmlFor="due" className="block flex-1">
                        <span className="text-gray-700">Due Date</span>
                        <div
                            className="relative mb-3"
                            id="datepicker-disable-past"
                            data-te-input-wrapper-init>
                            <input
                                type="text"
                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                placeholder="Select a date"
                                id="due"
                                name="due" />
                            <label
                                htmlFor="floatingInput"
                                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Select a date</label
                            >
                        </div>
                    </label>

                    <fieldset className="mt-4">
                        <legend>Select a status:</legend>

                        <div>
                            <input type="radio" id="incomplete" name="status" value="incomplete"/>
                            <label htmlFor="incomplete">Incomplete</label>
                        </div>

                        <div>
                            <input type="radio" id="inprogress" name="status" value="inprogress" />
                            <label htmlFor="inprogress">In Progress</label>
                        </div>

                        <div>
                            <input type="radio" id="done" name="status" value="done" />
                            <label htmlFor="done">Done</label>
                        </div>
                    </fieldset>


                    <button
                        type="submit"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="block flex-1 rounded bg-stone-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-stone-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-stone-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-stone-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}

export default NewTasks;