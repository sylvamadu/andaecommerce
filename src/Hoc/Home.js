import React from 'react';
import BottomBreadCrumb from './BottomBreadCrumb';
import Main from './Main';
import TopBreadCrumb from './TopBreadCrumb';


function Home() {
  
  return (
    <>

    <div className='container home'>
      <TopBreadCrumb />
      <BottomBreadCrumb />
      <Main />
    </div>
    </>
    
  )
}

export default Home