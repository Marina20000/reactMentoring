import React from "react";
import SearchPanel from './../../../components/textboxes/SearchPanel';

describe('searchPanel', () => {
    it('shallow searchPanel', () => {
        const searchPanel = shallow(<SearchPanel/>);
        //searchPanel.props().handleChange = jest.fn();
        const input = searchPanel.find('input');
        expect(input).toHaveLength(1);
        expect(input.hasClass('searchPanel')).toBe(true);
        expect(input.props().value).toEqual('');
        expect(input.props().type).toEqual('text');
        //const spy = jest.spyOn(searchPanel.find('input'),'onChange');     
    });
})


// constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//   }


// handleChange = event => {
//     this.setState({ value: event.target.value })
// };

// render() {
//     return (<input className={style.searchPanel}
//         type="text"
//         value={this.state.value}
//         onChange={this.handleChange}
//     />);
// }