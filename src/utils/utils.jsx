import React from 'react';

export function convertTime(timestamp) {
    let time = new Date(Math.round(timestamp/1000000));
    
    let hours = time.getUTCHours();
    let minutes = time.getUTCMinutes();
    let seconds = time.getUTCSeconds();
    let milliseconds = time.getUTCMilliseconds();

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
