import './App.css';
// import AppRouter from './router';

function App() {
    return <>{/* <AppRouter /> */}</>;
}

export default App;

// function App() {
//     // const [listItems] = useState(0);
//     // const itemss = ['I1', 'I2,', 'I3', 'I4'];
//     const [items, setItems] = useState<string[]>([]);
//     // const newItem = ['new'];
//     // const setNewItem = useState('');
//     const [newItem, setNewItem] = useState('');

//     // const addItem = () => {
//     //     if (newItem.trim() !== '') {
//     //         setItems([...items, newItem.trim()]);
//     //         setNewItem('');
//     //     }
//     // };

//     const [selectedItem, setSelectedItem] = useState<string | null>(null);
//     // const [editedItem, saveItem] = useState<string | null>(null);

//     const addItem2 = () => {
//         if (newItem.trim() !== '') {
//             if (selectedItem) {
//                 // Editing selected item
//                 const updatedItems = items.map((item, index) =>
//                     index === items.indexOf(selectedItem)
//                         ? newItem.trim()
//                         : item,
//                 );
//                 setItems(updatedItems);
//                 setSelectedItem(null);
//             } else {
//                 // Adding new item
//                 setItems([...items, newItem.trim()]);
//             }
//             setNewItem('');
//         }
//     };

//     return (
//         <>
//             {/* <div>
//                 <a href='https://vitejs.dev' target='_blank'>
//                     <img src={viteLogo} className='logo' alt='Vite logo' />
//                 </a>
//                 <a href='https://react.dev' target='_blank'>
//                     <img
//                         src={reactLogo}
//                         className='logo react'
//                         alt='React logo'
//                     />
//                 </a>
//             </div> */}
//             <h1>Quickshift Automotive</h1>

//             <div>
//                 <input
//                     style={{
//                         padding: '10px',
//                         fontSize: '16px',
//                         border: '1px solid #ccc',
//                         borderRadius: '4px',
//                         width: '300px',
//                         backgroundColor: 'black',
//                         borderBlockColor: 'gray',
//                     }}
//                     type='text'
//                     value={newItem}
//                     onChange={(e) => setNewItem(e.target.value)}
//                     placeholder='Enter new item'
//                 />
//                 <div className='card'>
//                     <button onClick={addItem2}>Add Item to list</button>
//                     {/* <p>
//                     Edit <code>src/App.tsx</code> and save to test HMR
//                 </p> */}
//                 </div>
//                 <div>
//                     <br />
//                     <ol className='pad1'>
//                         {items.map((item, index) => (
//                             <li
//                                 style={{
//                                     padding: '10px',
//                                     wordSpacing: '10px',
//                                 }}
//                                 key={index}
//                             >
//                                 {selectedItem === item ? ( // Render edit input if selected
//                                     <>
//                                         <input
//                                             style={{
//                                                 wordSpacing: '10px',
//                                             }}
//                                             type='text'
//                                             value={newItem}
//                                             onChange={(e) =>
//                                                 setNewItem(e.target.value)
//                                             }
//                                         />
//                                         {selectedItem !== null && ( // Show save button only when editing
//                                             <button
//                                                 style={{
//                                                     marginLeft: '40px',
//                                                     marginRight: '10px',
//                                                 }}
//                                                 onClick={() => {
//                                                     addItem2(); // Trigger update again to save changes
//                                                     setSelectedItem(null); // Hide edit mode
//                                                 }}
//                                             >
//                                                 Save
//                                             </button>
//                                         )}
//                                     </>
//                                 ) : (
//                                     item
//                                 )}
//                                 {selectedItem !== item && ( // Render edit button if not selected
//                                     <button
//                                         style={{
//                                             borderSpacing: '20px',
//                                             paddingLeft: '10px',
//                                             marginLeft: '40px',
//                                             marginRight: '10px',
//                                         }}
//                                         onClick={() => setSelectedItem(item)}
//                                     >
//                                         {' '}
//                                         Edit
//                                     </button>
//                                 )}
//                                 <button
//                                     onClick={() => {
//                                         const confirmed = window.confirm(
//                                             `Delete ${item}?`,
//                                         );
//                                         if (confirmed) {
//                                             setItems(
//                                                 items.filter((i) => i !== item),
//                                             );
//                                         }
//                                     }}
//                                 >
//                                     Delete
//                                 </button>
//                             </li>
//                         ))}
//                     </ol>
//                 </div>
//                 {/* <h3>List of Items</h3>
//                 <ol>
//                     {items.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ol> */}
//             </div>
//             {/* <p className='read-the-docs'>
//                 Click on the Vite and React logos to learn more
//             </p> */}
//         </>
//     );
// }

// // function HW() {
// //     <>
// //         <div>Hello world</div>
// //     </>;
// // }

// export default App;
// // export default HW;
