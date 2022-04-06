import React from 'react';
import "./GallerySmall.css";
interface IGallerySmall {
    current: string;
    elements: string[];
    onSelect:(img:string)=>void;
}
const GallerySmall: React.FC<IGallerySmall> = ({ current, elements, onSelect }) => {
    return (
        <div className='gallery-grid'>
            {
                elements.map((element,index) => {
                    return (
                        <img
                            key={element+index}
                            className={current === element ? "selected" : ""}
                            src={process.env.REACT_APP_CARD_IMAGES_PATH+element}
                            alt="smallPreview"
                            onClick={e=>onSelect(element)}
                        />
                    )
                })
            }
        </div>
    )
}
export default GallerySmall;