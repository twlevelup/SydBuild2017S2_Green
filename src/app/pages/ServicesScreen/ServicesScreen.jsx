// import React from 'react';
// import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
// import ButtonAction from '../../../framework/util/ButtonAction';
// import './services.css';
//
// export const ServicesScreenComponent = () => {
//   return (
//     <div id='services-page'>
//       <ul className='services-menu'>
//         <li className='menu'>Food</li>
//       </ul>
//     </div>
//   );
// };
//
// export const ServicesScreenButtons = {
//   LEFT: () => ButtonAction.goToPage('/'),
//   RIGHT: () => ButtonAction.goToPage('/services'),
//   TOP: () => ButtonAction.scrollUp(),
//   BOTTOM: () => ButtonAction.scrollDown(),
//   SCREEN: () => ButtonAction.goToPage('/food-location'),
// };
//
// export default WithButtonConfigs(ServicesScreenComponent, ServicesScreenButtons);


import React from 'react';
import { Link } from 'react-router-dom';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import ButtonAction from '../../../framework/util/ButtonAction';
import './services.css';

export const ServicesScreenComponent = () => {
  return (
    <div id='services-page'>
      <ul className='services-menu'>
        <li className='menu'><Link to='/food-location'>Food</Link></li>
      </ul>
    </div>
  );
};
export const ServicesScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
  RIGHT: () => ButtonAction.goToPage('/services'),
  TOP: () => ButtonAction.scrollUp(),
  BOTTOM: () => ButtonAction.scrollDown(),
  SCREEN: () => ButtonAction.goToPage('/food-location'),
};
export default WithButtonConfigs(ServicesScreenComponent, ServicesScreenButtons);
