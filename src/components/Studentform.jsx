import { useState } from "react";

export default function Studentform() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        course: "",
        batch: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // f= (name:"", email:"", age:"", course:"", batch:"") => {
    //     return {
    //         name,
    //         email,
    //         age,
    //         course,
    //         batch
    //     };
    // };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to an API)
        console.log("Form submitted:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="Sihle"
                value={formData.name}
                onChange={handleChange}
                placeholder="Sihle"
                className="border rounded-lg px-3 py-2 flex-1"

            />

            <input
                type="number"
                name="25"
                value={formData.age}
                onChange={handleChange}
                placeholder="25 Age"
                className="border rounded-lg px-3 py-2 w-24"
            />
            <input
                type="text"
                name="mern"
                value={formData.course}
                onChange={handleChange}
                placeholder="mern"
                className="border rounded-lg px-3 py-2 flex-1"
            />
            <input
                type="text"
                name="batch"
                value={formData.batch}
                onChange={handleChange}
                placeholder="Batch"
                className="border rounded-lg px-3 py-2 flex-1"
            />
            <button type="submit" className="bg-600 text-white rounded-lg px-4 hover:bg-blue-700">Submit</button>
        </form>
    );
}