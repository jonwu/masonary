import * as React from 'react';
import { View, ScrollView, LayoutChangeEvent, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';


const FOOTER_ID = '__footer__';

export type UnitCoords = {
  position: 'absolute';
  top: number;
  left: number;
  width: number;
  height: number;
};

type ListComputerProps<Item> = {
  columns: number;
  gutterSize: number;
  scrollBufferMultiplier: number;
  getItemId: (a: Item) => string;
  getItemHeight: (item: Item, columnWidth: number) => number;
  getFooterHeight: (columns: number, columnWidth: number, gutterSize: number) => number;
};

function getMinColumn(columns: Array<number>): [number, number] {
  return columns.reduce(
    (acc, height, column) => {
      if (height < acc[0]) {
        return [height, column];
      }
      return acc;
    },
    [columns[0], 0]
  );
}

class ListComputer<Item> {
  _coordsMap: {
    [itemId: string]: UnitCoords;
  } = {};
  _columnHeights: Array<number> = [];
  _columnWidth: number = 0;
  _totalHeight: number = 0;
  columns: number;
  gutterSize: number;
  scrollBufferMultiplier: number;
  getItemId: (a: Item) => string;
  getItemHeight: (item: Item, columnWidth: number) => number;
  getFooterHeight: (columns: number, columnWidth: number, gutterSize: number) => number;

  constructor({
    columns,
    gutterSize,
    scrollBufferMultiplier,
    getItemId,
    getItemHeight,
    getFooterHeight,
  }: ListComputerProps<Item>) {
    this.columns = columns;
    this.gutterSize = gutterSize;
    this.scrollBufferMultiplier = scrollBufferMultiplier;
    this.getItemId = getItemId;
    this.getItemHeight = getItemHeight;
    this.getFooterHeight = getFooterHeight;
  }

  computeFullCoords(data: Array<Item>, scrollY: number, scrollerHeight: number, scrollerWidth: number): Array<Item> {
    const { columns, getItemId, getItemHeight, gutterSize, scrollBufferMultiplier, getFooterHeight } = this;
    const coordsMap = {};
    const columnHeights = new Array(columns).fill(0);
    const columnWidth = (scrollerWidth - gutterSize * (columns + 1)) / columns;
    const visibleItems: Array<Item> = [];
    const bufferTop = scrollY - scrollBufferMultiplier * scrollerHeight;
    const bufferBottom = scrollY + scrollerHeight + scrollBufferMultiplier * scrollerHeight;

    data.forEach((item, i) => {
      const id = getItemId(item);

      if (id == null) {
        return;
      }

      const [columnHeight, columnIndex] = getMinColumn(columnHeights);
      const height = getItemHeight(item, columnWidth);
      const top = columnHeight + gutterSize;
      const coords = {
        position: 'absolute',
        left: columnWidth * columnIndex + gutterSize * (columnIndex + 1),
        width: columnWidth,
        top,
        height,
      };
      if (top > bufferTop - height && top < bufferBottom) {
        visibleItems.push(item);
      }
      coordsMap[id] = coords;
      columnHeights[columnIndex] = top + height;
    });

    this._columnWidth = columnWidth;
    this._coordsMap = coordsMap;
    this._columnHeights = columnHeights.map(height => height + gutterSize);
    const footerHeight = getFooterHeight(columns, columnWidth, gutterSize);
    let _totalHeight = this.getTotalColumnHeight();
    if (footerHeight > 0) {
      coordsMap[FOOTER_ID] = {
        position: 'absolute',
        left: gutterSize,
        width: scrollerWidth - gutterSize * 2,
        top: _totalHeight,
        height: footerHeight,
      };
      _totalHeight += footerHeight + gutterSize;
    }
    this._totalHeight = _totalHeight;
    return visibleItems;
  }

  computeVisibleItems(data: Array<Item>, scrollY: number, scrollerHeight: number): Array<Item> {
    const { getItemId, _coordsMap, scrollBufferMultiplier } = this;
    const visibleItems = [];
    const bufferTop = scrollY - scrollBufferMultiplier * scrollerHeight;
    const bufferBottom = scrollY + scrollerHeight + scrollBufferMultiplier * scrollerHeight;

    console.log(scrollY, bufferTop, bufferBottom)
    data.forEach((item, i) => {
      const id = getItemId(item);
      if (id == null || _coordsMap[id] == null) {
        return;
      }
      const { top, height } = _coordsMap[id];
      if (top > bufferTop - height && top < bufferBottom) {
        visibleItems.push(item);
      }
    });

    return visibleItems;
  }

  getCoords(id: string) {
    return this._coordsMap[id];
  }

  getTotalColumnHeight() {
    return this._columnHeights.reduce((acc, height) => Math.max(acc, height), 0);
  }
}

const ScrollBuffer = ({ height }: { height: number }) => <View style={{ height }} />;

type Item = any;
type MasonryListProps<Item> = {
  columns: number;
  gutterSize?: number;
  data: Array<Item>;
  getItemId: (a: Item) => string;
  getItemHeight: (item: Item, columnWidth: number) => number;
  renderItem: (item: Item, coords: UnitCoords, index: number) => React.ReactNode;
  renderFooter: () => React.ReactNode;
  getFooterHeight: (columns: number, columnWidth: number, gutterSize: number) => number;
  scrollBufferMultiplier?: number;
};


const MasonryList = ({ scrollBufferMultiplier = 0, columns = 2, gutterSize = 12, data, getItemHeight, getItemId, getFooterHeight, renderFooter }: MasonryListProps<Item>) => {
  const scrollRef = React.useRef(null);
  const [items, setItems] = React.useState([]);
  const [totalHeight, setTotalHeight] = React.useState(0);
  const [computer] = React.useState(new ListComputer({ columns, gutterSize, scrollBufferMultiplier, getItemId, getItemHeight, getFooterHeight }))
  const footerCoords = computer.getCoords(FOOTER_ID);
  React.useEffect(() => {

  }, [])


  const handleLayout = (event: LayoutChangeEvent) => {
    const { nativeEvent } = event;
    const containerHeight = nativeEvent.layout.height;
    const containerWidth = nativeEvent.layout.width;
    const items = computer.computeFullCoords(data, 0, containerHeight, containerWidth);
    setItems(items);
    setTotalHeight(computer._totalHeight);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { nativeEvent } = event;
    const containerHeight = nativeEvent.layoutMeasurement.height;
    const scrollTop = nativeEvent.contentOffset.y
    const items = computer.computeVisibleItems(data, scrollTop, containerHeight);
    setItems(items);
  };

  return <ScrollView
    ref={scrollRef}
    onLayout={handleLayout}
    onScroll={handleScroll}
    scrollEventThrottle={16}
  >
    <ScrollBuffer height={totalHeight} />
    {items.map((item) => {
      const id = getItemId(item);
      const coords = computer.getCoords(id);
      return coords != null ? <View key={id} style={[coords, { backgroundColor: item.backgroundColor }]} /> : null;
    })}
    {footerCoords && <View style={footerCoords}>{renderFooter()}</View>}
  </ScrollView>;
};
export default MasonryList;
