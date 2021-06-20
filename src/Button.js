export function Button({children, changePage, disabled}){
    // disabled = ((children === "Prev" && currentPage === 1) || (children === "Next" && (offset + limit) > 1118)) ? true : false;
    return <button disabled={disabled} onClick={changePage}>{children}</button>
}