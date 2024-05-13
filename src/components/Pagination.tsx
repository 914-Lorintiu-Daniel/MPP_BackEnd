// import React, {useState} from 'react';

// interface PaginationProps<T> {
//     data: T[];
//     itemsPerPage: number;
// }

// const Pagination: React.FC<PaginationProps<string>> = ({
//     data,
//     itemsPerPage,
// }) => {
//     const [currentPage, setCurrentPage] = useState(1);

//     // Calculate total number of pages
//     const totalPages = Math.ceil(data.length / itemsPerPage);

//     // Calculate index of the first and last item on the current page
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = Math.min(startIndex + itemsPerPage, data.length);

//     // Slice the data array to get the items for the current page
//     const currentItems = data.slice(startIndex, endIndex);

//     const handleNextPage = () => {
//         setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//     };

//     const handlePrevPage = () => {
//         setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//     };

//     return (
//         <div>
//             {/* Render current page items here */}
//             <ul>
//                 {currentItems.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}
//             </ul>

//             {/* Render pagination controls */}
//             <button onClick={handlePrevPage} disabled={currentPage === 1}>
//                 Prev
//             </button>
//             <span>{`Page ${currentPage} of ${totalPages}`}</span>
//             <button
//                 onClick={handleNextPage}
//                 disabled={currentPage === totalPages}
//             >
//                 Next
//             </button>
//         </div>
//     );
// };

// export default Pagination;

// import {useState} from 'react';

// const Pagination: UsePagination = ({contentPerPage, count}) => {
//     const [page, setPage] = useState(1);
//     // number of pages in total (total items / content on each page)
//     const pageCount = Math.ceil(count / contentPerPage);
//     // index of last item of current page
//     const lastContentIndex = page * contentPerPage;
//     // index of first item of current page
//     const firstContentIndex = lastContentIndex - contentPerPage;

//     // change page based on direction either front or back
//     const changePage = (direction: boolean) => {
//         setPage((state) => {
//             // move forward
//             if (direction) {
//                 // if page is the last page, do nothing
//                 if (state === pageCount) {
//                     return state;
//                 }
//                 return state + 1;
//                 // go back
//             } else {
//                 // if page is the first page, do nothing
//                 if (state === 1) {
//                     return state;
//                 }
//                 return state - 1;
//             }
//         });
//     };

//     const setPageSAFE = (num: number) => {
//         // if number is greater than number of pages, set to last page
//         if (num > pageCount) {
//             setPage(pageCount);
//             // if number is less than 1, set page to first page
//         } else if (num < 1) {
//             setPage(1);
//         } else {
//             setPage(num);
//         }
//     };

//     return {
//         totalPages: pageCount,
//         nextPage: () => changePage(true),
//         prevPage: () => changePage(false),
//         setPage: setPageSAFE,
//         firstContentIndex,
//         lastContentIndex,
//         page,
//     };
// };

// export default Pagination;
