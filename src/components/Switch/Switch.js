import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Switch as SwitchM } from 'react-native';
import { colorVariants } from '../../styles/Colors';

/**
 * @uxpindocurl https://reactnative.dev/docs/switch
 */
function Switch(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return  <SwitchM 
                {...props} 
                onValueChange={toggleSwitch}  
                value={isEnabled | props.value} 
            />
}

Switch.propTypes = {
     /**
      * If true the user won't be able to toggle the switch.
      */
     disabled: PropTypes.bool,

     /**
      * The value of the switch. If true the switch will be turned on. Default value is false.
      * @uxpinbind onChange 1
      */
     value: PropTypes.bool,

    /** iOS
     * On iOS, custom color for the background. 
     * This background color can be seen either when the switch value is false or when the switch is disabled (and the switch is translucent).
     */
     ios_backgroundColor: PropTypes.oneOf(colorVariants),

     /**
      * Color of the foreground switch grip. If this is set on iOS, the switch grip will lose its drop shadow.
      */
     thumbColor: PropTypes.oneOf(colorVariants),

     /**
      * Custom colors for the switch track.
      * iOS: When the switch value is false, the track shrinks into the border. 
      * If you want to change the color of the background exposed by the shrunken track, https://reactnative.dev/docs/switch#ios_backgroundColor.
      * object: { false: color, true: color }
      */
     trackColor: PropTypes.object,

     /**
      * Invoked when the user tries to change the value of the switch. Receives the change event as an argument. 
      * If you want to only receive the new value, use onValueChange instead.
      */
     onChange: PropTypes.func,

     /**
      * Invoked when the user tries to change the value of the switch. Receives the new value as an argument. 
      * If you want to instead receive an event, use onChange.
      */
     onValueChange: PropTypes.func,
}

export default Switch;