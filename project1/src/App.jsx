

// import { useEffect, useState } from 'react'
// import './App.css'

// function App() {
// /*
//   const[count,setcount]=useState(0);

//   useEffect(() => {
//     alert('i will render')
    
//   })
  
// function handleclick(){
//   (setcount(count+1))
// }
// */
// //2nd render 
// //That runs on only first render
// /*
// const[count,setcount]=useState(0);


// useEffect(() => {

//   alert('welcome to 2nd rendering')
  
// }, [])


// function handleSeond(){
//   (setcount(count+1))
// }
// */
// //3rd render variation
// /*
// const[count,setcount]=useState(0);


// function handleThird(){
//   (setcount(count+1))
// }

// useEffect(() => {
//   alert('hello user this 3rd variation .it runs very time when count is updated::')
// }, [count])

// */
// //variation no::4
// //multiple dependencies

// /*
// const[count,setcount]=useState(0);
// const[total ,settotal]=useState(1);


// function handleClick(){
//   (setcount(count+1))
// }

// function handleTotal(){
//   (settotal(total+1))

// }



// useEffect(() => {
  
// alert('hello i will run everytime when count or total is updated')
  
// }, [count,total])

// */

// //variation::5
// /*
// const[count,setcount]=useState(0);
// const[toal,settotal]=useState(10);

// function handleCont(){
//   setcount(count+1)
// }

// function handleTotal(){

// settotal(toal+1)
// }

// useEffect(() => {
// alert('The Count is updated')

//   return () => {
//     alert('The Count is Unmounted from the Ui')
//   }
// }, [count,toal])
// */

// //


// // function LoggerComponent(){
// //   const[count,setcount]=useState(0);


// // useEffect(() => {
// //   console.log('the componet rendered or count changed:',count)

  
// // });



// return (
//     <>
//      {/*
//       <div>
//       <h1>The Count</h1>
//       <button onClick={() => setcount(count + 1)}>

//         The Count Button 
//         </button>
// */}







//       {/*<button onClick={handleclick}>
//         Count Button
//       </button>
//     <br/>
//       count is::{count}
// */}

//         {/* 2nd variation code
//         <button onClick={handleSeond}>
//           Count Button
//         </button>
//         <br/>
//         count is ::{count}
//         */}


// {/* 3rd variation code 

//           <button onClick={handleThird}>
//             Show Down
//           </button>
//           <br/>
//           count is ::{count}
// */}

// {/* 4th variation code 
//   <button onClick={handleClick}>
//   Down Button count

//   </button>
//   <br/>
//   <button onClick={handleTotal}>
//     Down Button for Total yaar
//   </button>
//   <br/>

//   here the count of the number::{count}
//   <br/>
//   here the total::{total}
// */}

// {/*5th variation 

// <button onClick={handleCont}>The Count Button</button>
// <br/>
// The Count of the number::{count}
// <br/> 
// <button onClick={handleTotal}>The total Button</button>
// <br/>
// The Total of the number::{toal}
// */}


//       </div>
//     </>
//   )
// }
// }

// export default App

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true); // State to control the timer

  useEffect(() => {
    if (!isRunning) return; // Do nothing if the timer is stopped

    const interval = setInterval(() => {
      console.log('Timer running...');
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      console.log('Timer stopped...');
      clearInterval(interval); // Cleanup on unmount or dependency change
    };
  }, [isRunning]); // Dependency on `isRunning` to start/stop the timer

  const stopTimer = () => {
    setIsRunning(false); // Stop the timer
  };

  const startTimer = () => {
    setIsRunning(true); // Start the timer
  };

  return (
    <div>
      <h1>Seconds: {seconds}</h1>
      <button onClick={startTimer} disabled={isRunning}>
        Start Timer
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop Timer
      </button>
    </div>
  );
}

export default App;













