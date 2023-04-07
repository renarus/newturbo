import Box from './Box';
import { useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';

const WishList = () => {
    const wishList = useSelector(state => state.wishList);
    useEffect(() => {
        localStorage.setItem('wishList', JSON.stringify(wishList));
    });
    return (
        <div className='container'>
            <div className='wishlist'>
                <div className='wish'>
                <div className='title'>
                    <h1>SEÇİLMİŞ ELANLAR</h1>
            </div> 
            {wishList.length === 0 ? (
                <div>
                <div className='back'></div>
                <h1>Bəyəndiyiniz elanları ürək işarəsinə klik edərək seçilmişlərə əlavə edin.</h1>
                </div>
            ) : (
                <div>
                    <div className="row">
                        {wishList.map(list => (
                                <Box key={list.id} cars={list} category="wishlist" />
                        ))}
                    </div>
                </div>
            )}
            </div>
            </div>
        </div>
    );
};

export default WishList;