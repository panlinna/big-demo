import React from 'react';
import IconButton from './IconButton';
import Drawer from 'material-ui/Drawer';

import Search from './Search';

class Header extends React.Component {

  render () {
    let styles={
      backgroundColor:'lightblue',height:'200px',color:'#fff',textAlign:'center',lineHeight:'200px'
    }
      return(
        <div style={styles}>
          <IconButton>
          </IconButton>
        </div>
      )
    }
  }

export default Header;
