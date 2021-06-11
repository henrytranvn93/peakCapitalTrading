import React from 'react';

export function convertTime(timestamp) {
    let time = Math.round(timestamp/1000000);
    console.log(time);

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let milliseconds = time.getMilliseconds();

    let formattedTime = hours.toString().padStart(2, '0') + ':' + 
    minutes.toString().padStart(2, '0') + ':' + 
    seconds.toString().padStart(2, '0') + '.' + milliseconds.toString().padStart(3, '0');

    return formattedTime;
}

export default function untils() {
    return (
        <div>
            
        </div>
    )
}
