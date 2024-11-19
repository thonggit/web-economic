import React, { useState } from 'react';
import HomeSectionCard from '../HomeSetionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { mens_kurta } from '../../../Data/mens_kurta';

const HomeSectionCarousel = () => {
    const [activeIndex,setActiveIndex] = useState(0)
    const items = mens_kurta.slice(10,20).map((item) =>
        <HomeSectionCard product={item} />)
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
    const slidePrev = () => {setActiveIndex(activeIndex-1)
        console.log(activeIndex)
    }
    const slideNext = () => {setActiveIndex(activeIndex+1)
        console.log(activeIndex)
    }
    const syncActiveIndex=({item})=>setActiveIndex(item)
        
    
   
        
    
        




    

    return (
        <div className="  border ">
            <div className="relative p-5 ">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length - 5 &&
                    <Button
                        onClick={slideNext}
                        variant="contained"
                        sx={{
                            position: 'absolute',
                            top: '6rem',
                            right: '0rem',
                            transform: 'translateX(50%) rotate(90deg)',
                            backgroundColor: 'white',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '0.375rem',
                            '&:hover': {
                                backgroundColor: '#2563eb',
                            },
                            bgcolor: "white",

                        }}
                        aria-label="next"
                        className="z-50 bg-white"

                    >
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: 'black' }} />
                    </Button>
                }

                {activeIndex !== 0 && <Button
                    onClick={slidePrev}
                    variant="contained"
                    sx={{
                        position: 'absolute',
                        top: '6rem',
                        left: '-4rem',
                        transform: 'translateX(50%) rotate(-90deg)',
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.375rem',
                        '&:hover': {
                            backgroundColor: '#2563eb',
                        },
                        bgcolor: "white",

                    }}
                    aria-label="next"
                    className="z-50 bg-white"

                >
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: 'black' }} />
                </Button>}

            </div>
        </div>
    );
}

export default HomeSectionCarousel;