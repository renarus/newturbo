import React from 'react'
import Cars from './Cars';
import { useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getEndadv, getVipcars, getPremium } from '../store/actions';
import clsx from "clsx";
import { LoadingPosts } from './LoadingPosts';
import { useRef } from "react";
import { Card } from './Card';
// const NUM_PER_PAGE = 6;
// const TOTAL_PAGES = 3;
// const Home = () => {

//   const triggerRef = useRef(null);
//   const onGrabData = (currentPage) => {
//       // This would be where you'll call your API
//       return new Promise((resolve) => {
//       setTimeout(() => {
//           const data = images.slice(
//           ((currentPage - 1)%TOTAL_PAGES) * NUM_PER_PAGE,
//           NUM_PER_PAGE * (currentPage%TOTAL_PAGES)
//           );
//           console.log(data);
//           resolve(data);
//       }, 3000);
//       });
//   };
//   const { data, loading } = useLazyLoad({ triggerRef, onGrabData });



  const vipcars = useSelector(state=> state.vipcars);
  const end = useSelector(state=> state.end);
  const premium = useSelector(state=> state.premium);

  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(getVipcars());
      dispatch(getEndadv());
      dispatch(getPremium());
  },[dispatch])

  
  return (
    <div className="home">
       <Cars cars={vipcars} title="VIP ELANLAR"/>
      <div className='end'>
        <Cars cars={end} title="SON ELANLAR" />
      </div>
        <Cars cars={premium} title="PREMIUM ELANLAR" />
       
    </div>
    
  );


export default Home
