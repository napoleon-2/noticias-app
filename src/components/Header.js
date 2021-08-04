import React from 'react';

const Header = ({titulo}) => {
    
    return ( 
          
        <nav>
            <div class="nav-wrapper  light-blue darken-3 ">
                <a href="!#" className="brand-logo center">{titulo}</a>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                </ul>
                
            </div>
        </nav>  
     );
}
 
export default Header;