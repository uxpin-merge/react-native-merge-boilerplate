import PropTypes from 'prop-types';
import * as React from 'react';
import { SafeAreaView, StyleSheet, VirtualizedList as VirtualizedListM } from 'react-native';
import StatusBar from '../StatusBar/StatusBar';
import Text from '../Text/Text';
import View from '../View/View';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    item: {
        backgroundColor: '#f9c2ff',
        height: 150,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
    },
    title: {
        fontSize: 32,
    },
});

const DATA = [];

const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index+1}`
});

const getItemCount = (data) => 50;

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const VirtualizedList = (props) => {
    return (
    <SafeAreaView style={styles.container}>
        <VirtualizedListM
        {...props}
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
        />
    </SafeAreaView>
    );
}

VirtualizedList.protoType = {

    /**
     * Set this true while waiting for new data from a refresh.
     */
    refreshing: PropTypes.bool,

    persistentScrollbar: PropTypes.bool,
    /**
     * A unique identifier for this list. If there are multiple VirtualizedLists at the same level of nesting within another VirtualizedList, this key is necessary for virtualization to work properly.
     */
    listKey: PropTypes.string,

    /**
     * Reverses the direction of scroll. Uses scale transforms of -1.
     */
    inverted: PropTypes.bool,

    /**
     * debug will turn on extra logging and visual overlays to aid with debugging both usage and implementation, but with a significant perf hit.
     */
    debug: PropTypes.bool,

    /**
     * If true, renders items next to each other horizontally instead of stacked vertically.
     */
    horizontal: PropTypes.bool,

    /**
     * A custom refresh control element. When set, it overrides the default <RefreshControl> component built internally. 
     * The onRefresh and refreshing props are also ignored. Only works for vertical VirtualizedList.
     */
    refreshControl: PropTypes.element,

    /**
     * Set this when offset is needed for the loading indicator to show correctly.
     */
    progressViewOffset: PropTypes.number,

    /**
     * How far from the end (in units of visible length of the list) the bottom edge of the list must be from the end of the content to trigger the onEndReached callback. 
     * Thus a value of 0.5 will trigger onEndReached when the end of the content is within half the visible length of the list.
     */
    onEndReachedThreshold: PropTypes.number,

    /**
     * The maximum number of items to render in each incremental render batch. 
     * The more rendered at once, the better the fill rate, but responsiveness may suffer because rendering content may interfere with responding to button taps or other interactions.
     */
    maxToRenderPerBatch: PropTypes.number,

    /**
     * How many items to render in the initial batch. This should be enough to fill the screen but not much more. 
     * Note these items will never be unmounted as part of the windowed rendering in order to improve perceived performance of scroll-to-top actions.
     */
    initialNumToRender: PropTypes.number,

    /**
     * Instead of starting at the top with the first item, start at initialScrollIndex. 
     * This disables the "scroll to top" optimization that keeps the first 
     * initialNumToRender items always rendered and immediately renders the items starting at this initial index. Requires getItemLayout to be implemented.
     */
    initialScrollIndex: PropTypes.number,

    /**
     * Amount of time between low-pri item render batches, e.g. for rendering items quite a ways off screen. 
     * Similar fill rate/responsiveness tradeoff as maxToRenderPerBatch.
     */
    updateCellsBatchingPeriod: PropTypes.number,

    /**
     * Determines the maximum number of items rendered outside of the visible area, in units of visible lengths. 
     * So if your list fills the screen, then windowSize={21} (the default) will render the visible screen area plus up to 10 screens above and 10 below the viewport. 
     * Reducing this number will reduce memory consumption and may improve performance, but will increase the chance that fast scrolling may reveal momentary blank areas of unrendered content.
     */
    windowSize: PropTypes.number,
    
    /**
     * The default accessor functions assume this is an array of objects with shape 
     * {key: string} but you can override getItem, getItemCount, and keyExtractor to handle any type of index-based data.
     */
    data: PropTypes.any.isRequired,

    /**
     * A marker property for telling the list to re-render (since it implements PureComponent). 
     * If any of your renderItem, Header, Footer, etc. functions depend on anything outside of the data prop, stick it here and treat it immutably.
     */
    extraData: PropTypes.any,

    /**
     * A generic accessor for extracting an item from any sort of data blob.
     * (data: any, index: number) => object;
     */
    getItem: PropTypes.func.isRequired,

    /**
     * Determines how many items are in the data blob.
     * (data: any) => number;
     */
    getItemCount: PropTypes.func.isRequired,

    /**
     * Takes an item from data and renders it into the list
     * (info: any) => ?React.Element<any>
     */
    renderItem: PropTypes.func.isRequired,

    /**
     * If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
     * () => void
     */
    onRefresh: PropTypes.func,

    /**
     * Each cell is rendered using this element. Can be a React Component Class, or a render function. Defaults to using View.
     */
    CellRendererComponent: PropTypes.func,

    /**
     * Rendered in between each item, but not at the top or bottom. 
     * By default, highlighted and leadingItem props are provided. 
     * renderItem provides separators.highlight/unhighlight which will update the highlighted prop, 
     * but you can also add custom props with separators.updateProps.
     */
    ItemSeparatorComponent: PropTypes.func,

    /**
     * Rendered when the list is empty. Can be a React Component (e.g. SomeComponent), or a React element (e.g. <SomeComponent />).
     */
    ListEmptyComponent: PropTypes.element,

    /**
     * Each data item is rendered using this element. Can be a React Component Class, or a render function.
     */
    ListItemComponent: PropTypes.func,

    /**
     *  (
     *     data: any,
     *     index: number,
     *   ) => {length: number, offset: number, index: number}
     * 
     */
    getItemLayout: PropTypes.func,

    /**
     * Used to extract a unique key for a given item at the specified index. 
     * Key is used for caching and as the react key to track item re-ordering. 
     * The default extractor checks item.key, then item.id, and then falls back to using the index, like React does.
     */
    keyExtractor: PropTypes.func,

    /**
     * Called once when the scroll position gets within onEndReachedThreshold of the rendered content.
     * (info: {distanceFromEnd: number}) => void
     * @uxpinignoreprop
     */
    onEndReached: PropTypes.func,

    /**
     * Used to handle failures when scrolling to an index that has not been measured yet. 
     * Recommended action is to either compute your own offset and scrollTo it, or scroll as far as possible and then try again after more items have been rendered.
     * (info: {
     *  index: number,
     *   highestMeasuredFrameIndex: number,
     *  averageItemLength: number,
     * }) => void
     */
    onScrollToIndexFailed: PropTypes.func,

    /**
     * Rendered at the bottom of all the items. Can be a React Component (e.g. SomeComponent), or a React element (e.g. <SomeComponent />).
     */
    ListFooterComponent: PropTypes.element,

    /**
     * Rendered at the top of all the items. Can be a React Component (e.g. SomeComponent), or a React element (e.g. <SomeComponent />).
     */
    ListHeaderComponent: PropTypes.element,

    /**
     * Styling for internal View for ListHeaderComponent.
     */
    ListHeaderComponentStyle: PropTypes.object,

    /**
     * Called when the viewability of rows changes, as defined by the viewabilityConfig prop.
     * (callback: { changed: array of ViewTokens, viewableItems: array of ViewTokens }) => void
     * @uxpinignoreprop
     */
    onViewableItemsChanged: PropTypes.func,

    /**
     * Render a custom scroll component, e.g. with a differently styled RefreshControl.
     * (props: object) => element;
     */
    renderScrollComponent: PropTypes.func,

}

export default VirtualizedList;