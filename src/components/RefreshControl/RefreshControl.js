import PropTypes from 'prop-types';
import * as React from 'react';
import {
    RefreshControl as RefreshControlM,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import { colorVariants } from '../../styles/Colors';
import ScrollView from '../ScrollView/ScrollView';
import Text from '../Text/Text';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

/**
 * @uxpindocurl https://reactnative.dev/docs/refreshcontrol
 */
function RefreshControl(props) {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
    <SafeAreaView style={styles.container}>
        <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
            <RefreshControlM
            {...props}
            refreshing={refreshing}
            onRefresh={onRefresh}
            />
        }
        >
            <Text>Pull down to see RefreshControl indicator</Text>
        </ScrollView>
    </SafeAreaView>
);
}

RefreshControl.propTypes = {
    /** iOS
     * The title displayed under the refresh indicator.
     */
    title: PropTypes.string,
    /**
     * Progress view top offset.
     */
    number: PropTypes.number,

    /** Andriod
     * Whether the pull to refresh functionality is enabled.
     */
    enabled: PropTypes.bool,

    /** Andriod
     * Size of the refresh indicator.
     */
    size: PropTypes.oneOf(['large']),

    /**
     * Whether the view should be indicating an active refresh.
     */
    refreshing: PropTypes.bool.isRequired,

    /** Andriod
     * The colors (at least one) that will be used to draw the refresh indicator.
     */
    colors: PropTypes.oneOf(colorVariants),

    /** iOS
     * The color of the refresh indicator.
     */
    tintColor: PropTypes.oneOf(colorVariants),

    /** iOS
     * The color of the refresh indicator title.
     */
    titleColor: PropTypes.oneOf(colorVariants),

    /**
     * Called when the view starts refreshing.
     */
    onRefresh: PropTypes.func,

    /** Andriod
     * The background color of the refresh indicator.
     */
    progressBackgroundColor: PropTypes.oneOf(colorVariants),

}

RefreshControl.defaultProps = {
    refreshing: false,
}

export default RefreshControl;