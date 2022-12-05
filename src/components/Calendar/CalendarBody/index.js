 import React from 'react';
 import Month from './Month'

 import './style.css'



 
 const CalendarBody = (props) => {

    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
   

    return (
        <div className='calendarBody'>
        <p>DECEMBER 2022</p>
         <table>
            <thead>
               <tr>
                    {weekDays.map(d => <td className='weeksName'>{d}</td>)}
               </tr>
            </thead>
            <Month month='12'/>
       </table>
         
       </div>
    );
 }
 
 export default CalendarBody;
 