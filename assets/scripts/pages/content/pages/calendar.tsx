import * as React from 'react';
import Slide from '@material-ui/core/Slide';

export default function Calendar () {
    const [slide, setSlide] = React.useState(true)
    React.useEffect(() => {
        setSlide(true);
        return () => {
            setSlide(false);
        }
    });
    return (
        <Slide direction="right" in={slide} mountOnEnter unmountOnExit>
            <div>
                This is Calendar page
            </div>
        </Slide>
    )
}