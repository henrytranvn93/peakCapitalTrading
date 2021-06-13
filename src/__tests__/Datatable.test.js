import React from 'react';
import ReactDOM from 'react-dom';
import Datatable from '../components/Datatable';
import { render } from '@testing-library/react';

it('render Datatable without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Datatable/>, div);
})