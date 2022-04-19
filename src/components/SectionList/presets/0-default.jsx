import * as React from 'react';
import SectionList from '../SectionList';
import View from '../../View/View';

const DATA = [
    {
        title: "Main dishes",
        data: ["Pizza", "Burger", "Risotto"]
    },
    {
        title: "Sides",
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
        title: "Drinks",
        data: ["Water", "Coke", "Beer"]
    },
    {
        title: "Desserts",
        data: ["Cheese Cake", "Ice Cream"]
    }
];

export default (
<View uxpId="view1">
    <SectionList uxpId='sectionList1' sections={DATA} />
</View>
)