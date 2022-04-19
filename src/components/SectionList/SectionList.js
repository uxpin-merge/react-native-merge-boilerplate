import PropTypes from 'prop-types';
import * as React from 'react';
import { SectionList as SectionListM, StyleSheet, StatusBar } from 'react-native';
import Text from '../Text/Text';
import View from '../View/View';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    }
});

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

/**
 * @uxpindocurl https://reactnative.dev/docs/sectionlist
 */
function SectionList(props) {
    return (
        {props.sections.map((data, index) => (
            <SectionListM 
            {...props}
            keyExtractor={(data, index) => data + index}
            renderItem={({ item }) => <Item title={item}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
            )}/>} />
        ))}
    )
}

SectionList.propTypes = {
    /**
     * A marker property for telling the list to re-render (since it implements PureComponent). 
     * If any of your renderItem, Header, Footer, etc. functions depend on anything outside of the data prop, stick it here and treat it immutably.
     */
    extraData: PropTypes.any,

    /**
     * Set this true while waiting for new data from a refresh.
     */
    refreshing: PropTypes.bool,

    /**
     * This may improve scroll performance for large lists.
     */
    removeClippedSubviews: PropTypes.bool,

    /**
     * Reverses the direction of scroll. Uses scale transforms of -1.
     */
    inverted: PropTypes.bool,

    /**
     * Makes section headers stick to the top of the screen until the next one pushes it off. Only enabled by default on iOS because that is the platform standard there.
     * false Android
     * true iOS
     */
    stickySectionHeadersEnabled: PropTypes.bool,

    /**
     * How far from the end (in units of visible length of the list) 
     * the bottom edge of the list must be from the end of the content to trigger the onEndReached callback. 
     * Thus a value of 0.5 will trigger onEndReached when the end of the content is within half the visible length of the list.
     */
    onEndReachedThreshold: PropTypes.number,

    /**
     * How many items to render in the initial batch. This should be enough to fill the screen but not much more. 
     * Note these items will never be unmounted as part of the windowed rendering in order to improve perceived performance of scroll-to-top actions.
     */
    initialNumToRender: PropTypes.number,

    /**
     * Rendered in between each item, but not at the top or bottom. By default, highlighted, section, and [leading/trailing][Item/Section] props are provided. 
     * renderItem provides separators.highlight/unhighlight which will update the highlighted prop, but you can also add custom props with separators.updateProps.
     */
    ItemSeparatorComponent: PropTypes.element,

    /**
     * Rendered when the list is empty. Can be a React Component (e.g. SomeComponent), or a React element (e.g. <SomeComponent />).
     */
    ListEmptyComponent: PropTypes.element,

    /**
     * Rendered at the very end of the list. Can be a React Component (e.g. SomeComponent), or a React element (e.g. <SomeComponent />).
     */
    ListFooterComponent: PropTypes.element,

    /**
     * Rendered at the very beginning of the list. Can be a React Component (e.g. SomeComponent), or a React element (e.g. <SomeComponent />).
     */
    ListHeaderComponent: PropTypes.element,

    /**
     * Used to extract a unique key for a given item at the specified index. Key is used for caching and as the React key to track item re-ordering. 
     * The default extractor checks item.key, then falls back to using the index, like React does. 
     * Note that this sets keys for each item, but each overall section still needs its own key.
     */
    keyExtractor: PropTypes.func,

    /**
     * Called once when the scroll position gets within onEndReachedThreshold of the rendered content.
     * (info: { distanceFromEnd: number }) => void
     */
    onEndReached: PropTypes.func,

    /**
     * Default renderer for every item in every section. Can be over-ridden on a per-section basis. Should return a React element.
     * The render function will be passed an object with the following keys:
     * 'item' (object) - the item object as specified in this section's data key
     * 'index' (number) - Item's index within the section.
     * 'section' (object) - The full section object as specified in sections.
     * 'separators' (object) - An object with the following keys:
     * 'highlight' (function) - () => void
     * 'unhighlight' (function) - () => void
     * 'updateProps' (function) - (select, newProps) => void
     *    select' (enum) - possible values are 'leading', 'trailing'
     *    'newProps' (object)
     */
    renderItem: PropTypes.func,
    /**
     * Called when the viewability of rows changes, as defined by the viewabilityConfig prop.
     */

    onViewableItemsChanged: PropTypes.func,

    /**
     * Rendered at the bottom of each section.
     */
    renderSectionFooter: PropTypes.func,

    /**
     * Rendered at the top of each section. These stick to the top of the ScrollView by default on iOS. See stickySectionHeadersEnabled.
     */
    renderSectionHeader: PropTypes.func,

    /**
     * If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. 
     * Make sure to also set the refreshing prop correctly. To offset the RefreshControl from the top (e.g. by 100 pts), use progressViewOffset={100}.
     */
    OnRefresh: PropTypes.func,

    /**
     * Rendered at the top and bottom of each section (note this is different from ItemSeparatorComponent which is only rendered between items). 
     * These are intended to separate sections from the headers above and below and typically have the same 
     * highlight response as ItemSeparatorComponent. Also receives highlighted, [leading/trailing][Item/Section], and any custom props from separators.updateProps.
     */
    SectionSeparatorComponent: PropTypes.func,

    /**
     * The actual data to render, akin to the data prop in FlatList.
     */
    Sections: PropTypes.array,

}

SectionList.defaultProps = {
    initialNumToRender: 10,
    onEndReachedThreshold: 2
}

export default SectionList;