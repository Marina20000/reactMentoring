import React from "react";
import SearchPanel from './../../../components/textboxes/SearchPanel';

describe('searchPanel', () => {
    it('shallow searchPanel', () => {
        const searchPanel = shallow(<SearchPanel/>);
        const input = searchPanel.find('input');
        expect(input).toHaveLength(1);
        expect(input.hasClass('searchPanel')).toBe(true);
        expect(input.props().type).toEqual('text');
    });
})
