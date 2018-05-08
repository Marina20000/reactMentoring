import React, {PureComponent} from 'react';
import Inscription from './../../../components/captions/Inscription';

describe('Inscription', () => {
    it('test Inscription with shallowRendering', () => {
        const className =  'inscription' ;
        const inscription = shallow (<Inscription className = 'inscription' inscription = 'Hello!'/>)
        expect (inscription.exists()).toBe(true)
        expect (inscription.props().children).toEqual('Hello!');
        expect (inscription.props().className).toEqual('inscription');
    })
})
