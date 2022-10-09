import React from 'react'

export default function Fetchtime() {
    let today = new Date();
    let day = today.getDay();
    let month = today.getMonth();
    let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
    let monthlist = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let date = today.getDate();

    return (
        <>
         <div className="todo__content__date">
                <h2 id="displayDateTime">{daylist[day]},{date} {monthlist[month]}</h2>
    </div>
        </>
    )
}
