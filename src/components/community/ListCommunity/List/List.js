import React, { useState } from 'react'
import '../../../consultation/ListClinic/List/styles.css'
import { useNavigate } from 'react-router-dom';
import {communityList} from '../../../../constants/Data'

export const AppList = ({ item: { coverSrc, NamaKomunitas, established }, }) => {
  const navigate = useNavigate();

  return (
    <div className='listItem-wrap' onClick={() => {if(NamaKomunitas === "Penggemar Kodok 1"){navigate('/community/detailcommunity');}}}>
    <img src={communityList.coverSrc} alt='' />
    <header>
      <h5>{NamaKomunitas}</h5>
    </header>
    <footer>
        <p style={{color: '#4F692F', fontSize:12, fontWeight:'bold'}}>{communityList.established}</p>
    </footer>
  </div>
  )
}
