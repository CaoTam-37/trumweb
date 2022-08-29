import React from "react";
import pic1 from "../../Img/13.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { chooseNews } from "../../features/sections/newspaperSlice";

// const Work = ({ id, event, abstract }) => {
//   const dispatch = useDispatch()
//   return (
//     <>
//       <Link to='/news' onClick={()=> dispatch(chooseNews(id))}>
//         <div className='item'>
//           <div className='item-pic'>
//             <img src={pic1} alt='work' />
//           </div>
//           <div className='hover-item'>
//             <div className='hover-content'>
//               <p>{event}</p>
//               <p>{abstract}</p>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </>
//   );
// };

const Work = ({ headline, number }) => {
  const {bigHeadLine, intro} = headline
  const dispatch = useDispatch()
  return (
    <>
      <Link to='/news' onClick={()=> dispatch(chooseNews(number))}>
        <div className='item'>
          <div className='item-pic'>
            <img src={pic1} alt='work' />
          </div>
          <div className='hover-item'>
            <div className='hover-content'>
              <p>{bigHeadLine}</p>
              <p>{intro}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Work;
