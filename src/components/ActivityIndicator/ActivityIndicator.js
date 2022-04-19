import PropTypes from 'prop-types';
import * as React from 'React';
import { ActivityIndicator as ActivityIndicatorM } from 'react-native';
import { colorVariants } from '../../styles/Colors';

function ActivityIndicator(props) {
    return <ActivityIndicatorM {...props} />
}

ActivityIndicator.propTypes = {
    /**
     * Size of the indicator.
     */
    size: PropTypes.oneOf(['small', 'larege']),

    /**
     * Whether to show the indicator (true) or hide it (false).
     */
    animating: PropTypes.bool,

    /** iOS
     * Whether the indicator should hide when not animating.
     */
    hidesWhenStopped: PropTypes.bool,

    /**
     * The foreground color of the spinner.
     */
    color: PropTypes.oneOf(colorVariants),

    
}

ActivityIndicator.defaultProps = {
    animating: true,
    hidesWhenStopped: false,
    color: 'forestgreen'
}

export default ActivityIndicator;