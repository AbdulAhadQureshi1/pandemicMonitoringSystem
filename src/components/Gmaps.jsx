import React, {useContext} from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { ThemeContext } from './themeContext.jsx';

export default function Map() {

    const darkMode = useContext(ThemeContext);

    function themeColorSwitch() {
        return darkMode ? 'dark-enabled' : 'light-enabled'
    }

    return (
        <div className={`vacc-centers stats flex ${themeColorSwitch()}`}>
            <div>
                <h1 className='font'>Nearest Vaccination Centers</h1>
                <p className='font'>Get directions to your nearest vaccination centers now and get vaccinated!</p>
            </div>
            <iframe className='gmap' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d110947.1715178724!2d73.02470537179269!3d33.68033277615043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1svaccination%20centers!5e0!3m2!1sen!2s!4v1669912802284!5m2!1sen!2s" loading='lazy'></iframe>    
        </div>
)
}
