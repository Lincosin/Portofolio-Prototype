"use client";

function Year() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <>
            <div>{year}</div>
        </>
  )
}

export default Year;