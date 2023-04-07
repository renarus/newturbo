import React from 'react'
import {addWishList,deleteWishList} from '../store/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

const Box = ({cars}) => {
    useEffect(() => {
        localStorage.setItem('wishList', JSON.stringify(wishList));
    });

    const dispatch = useDispatch();
    const wishList = useSelector(state => state.wishList);

    const inWishList =
    wishList.filter(m => m.id === cars.id).length > 0 ? true : false;

const onHandleClick = cars => {
    inWishList
        ? dispatch(deleteWishList(cars.id))
        : dispatch(addWishList(cars))
};

  return (
    <div className='col-10 col-md-5 col-lg-3 carboxs'>
       <div className='carbox'>
          <div className='top'>
            <div className='img'>
              <img src={cars.img} alt="err"/>
            </div>
            <div className='extra'>
                <p onClick={() => onHandleClick(cars)}>
                  {inWishList ?  <AiFillHeart/>  :<AiOutlineHeart/>}
                </p>
            </div>
          </div>
          <div className='text'>
            <p className='price'>{cars.price} $</p>
            <p className='name'>{cars.name}</p>
            <p className='attributes'>{cars.attributes}</p>
            <p className='datetime'>{cars.datetime}</p>
          </div>
        </div>
    </div>
  )
}

export default Box