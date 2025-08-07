import { useState, useMemo } from "react";
// import "./Memo.css"

const Memo = () => {
    const [count, setCount] = useState(0);


    const doubleCount = useMemo(() => {
        console.log("Calculating double count of number");
        return count * 2;
    }, [count]);


    return (
        <div>
            <h2 className="count-header">Use Memo</h2>
            <p className="count-number">Count: {count}</p>
            <p className="double-count">Double Count: {doubleCount}</p>

            <button className="count-btn" onClick={() => setCount(count + 1)}>Increase Count</button>
        </div>
    );
}

export default Memo;











// const FilterMemo = () => {
//     const [search, setSearch] = useState("");

//     const students = ["Alice", "Bob", "Charlie", "David", "Eva"];

//     // Filters the list only when search changes
//     const filteredStudents = useMemo(() => {
//         console.log("Student filter");
//         return students.filter(name =>
//             name.toLowerCase().includes(search.toLowerCase())
//         );
//     }, [search]);

//     return (
//         <div className="memo-section">
//             <h2 className="memo-header">List Filtering</h2>
//             <input
//                 type="text"
//                 className="memo-input"
//                 placeholder="Search student"
//                 value={search}
//                 onChange={(event) => setSearch(event.target.value)}
//             />

//             <ul className="memo-ul">
//                 {filteredStudents.map((name, index) => (
//                     <li key={index} className="memo-li">{name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default FilterMemo;