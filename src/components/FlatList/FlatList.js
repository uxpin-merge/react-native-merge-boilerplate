import * as React from 'react';
import PropTypes from 'prop-types';
import { FlatList as FlatListM, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import View from '../View/View';
import Text from '../Text/Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

/**
 * @uxpindocurl https://reactnative.dev/docs/flatlist
 */
function FlatList(props) {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

    return (
      <SafeAreaView style={styles.container}> 
        <FlatListM
          {...props}
          renderItem={renderItem}
          getItemLayout={(item, index) => { return {length: 33, index, offset: 33 * index} }}
        />
      </SafeAreaView>
    )
}

FlatList.propTypes = {
    /**
     * If true, renders items next to each other horizontally instead of stacked vertically.
     */
    horizontal: PropTypes.bool,

    /**
      * Reverses the direction of scroll. Uses scale transforms of -1.
      */
    inverted: PropTypes.bool,

    /**
     *  Set this true while waiting for new data from a refresh.
     */
    refreshing: PropTypes.bool,

    /**
     * This may improve scroll performance for large lists. On Android the default value is true.
     */
    removeClippedSubviews: PropTypes.bool,

    /**
     * For simplicity, data is a plain array. If you want to use something else, like an immutable list, use the underlying VirtualizedList directly.
     */
    data: PropTypes.array,
    
    /**
     * Rendered in between each item, but not at the top or bottom. By default, highlighted and leadingItem props are provided. 
     * renderItem provides separators.highlight/unhighlight which will update the highlighted prop, 
     * but you can also add custom props with separators.updateProps.
     */
    ItemSeparatorComponent: PropTypes.elementType,
    
    /**
     * Rendered when the list is empty. Can be a React Component (e.g. SomeComponent), or a React element (e.g. <SomeComponent />).
     */
    ListEmptyComponent: PropTypes.func,

    /**
     * Rendered at the bottom of all the items. Can be a React Component (e.g. SomeComponent), or a React element (e.g. <SomeComponent />).
     */
    ListFooterComponent: PropTypes.func,

    /**
     * Styling for internal View for ListFooterComponent.
     */
    ListFooterComponentStyle: PropTypes.object,

    /**
     * Rendered at the top of all the items. Can be a React Component (e.g. SomeComponent), or a React element (e.g. <SomeComponent />).
     */
    ListHeaderComponent: PropTypes.func,

    /**
     * Styling for internal View for ListHeaderComponent.
     */
    ListHeaderComponentStyle: PropTypes.object,
    
    /**
     * Optional custom style for multi-item rows generated when numColumns > 1.
     */
    columnWrapperStyle: PropTypes.object,

    /**
     * A marker property for telling the list to re-render (since it implements PureComponent). 
     * If any of your renderItem, Header, Footer, etc. functions depend on anything outside of the data prop, 
     * stick it here and treat it immutably.
     */
    extraData: PropTypes.any,

    /**
     * Takes an item from data and renders it into the list.
     * Provides additional metadata like index if you need it, as well as a more generic separators.updateProps function
     * which let you set whatever props you want to change the rendering of either the leading separator or trailing separator 
     * in case the more common highlight and unhighlight (which set the highlighted: boolean prop) are insufficient for your use case.
     */
    renderItem: PropTypes.func,

    /**
     *  getItemLayout is an optional optimization that allows skipping the measurement of dynamic content 
     * if you know the size (height or width) of items ahead of time. getItemLayout is efficient if you have fixed size items,
     * Adding getItemLayout can be a great performance boost for lists of several hundred items. Remember to include separator length 
     * (height or width) in your offset calculation if you specify ItemSeparatorComponent.
     */ 
    getItemLayout: PropTypes.func,

    /**
     * How many items to render in the initial batch. This should be enough to fill the screen but not much more. 
     * Note these items will never be unmounted as part of the windowed rendering in order to improve 
     * perceived performance of scroll-to-top actions.
     */
    initialNumToRender: PropTypes.number,

    /**
     * Instead of starting at the top with the first item, start at initialScrollIndex. 
     * This disables the "scroll to top" optimization that keeps the first initialNumToRender 
     * items always rendered and immediately renders the items starting at this initial index. 
     * Requires getItemLayout to be implemented.
     */
    initialScrollIndex: PropTypes.number,

     /**
      * Used to extract a unique key for a given item at the specified index. 
      * Key is used for caching and as the react key to track item re-ordering. 
      * The default extractor checks item.key, then item.id, and then falls back to using the index, like React does.
      */
    keyExtractor: PropTypes.func,

    /**
     * Multiple columns can only be rendered with horizontal={false} and will zig-zag like a flexWrap layout. 
     * Items should all be the same height - masonry layouts are not supported.
     */
    numColumns: PropTypes.number,

     /**
      * Called once when the scroll position gets within onEndReachedThreshold of the rendered content.
      */
    onEndReached: PropTypes.func,

    /**
     * How far from the end (in units of visible length of the list) the bottom edge of the list must be from the end 
     * of the content to trigger the onEndReached callback. Thus a value of 0.5 will trigger onEndReached 
     * when the end of the content is within half the visible length of the list.
     */
    onEndReachedThreshold: PropTypes.number,

    /**
     * If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
     */
    onRefresh: PropTypes.func,

    /**
     * Called when the viewability of rows changes, as defined by the viewabilityConfig prop.
     */
    onViewableItemsChanged: PropTypes.func,

    /**
     * Set this when offset is needed for the loading indicator to show correctly.
     */
    progressViewOffset: PropTypes.number,
}

FlatList.defaultProps = {
  refreshing: false,
}

export default FlatList;