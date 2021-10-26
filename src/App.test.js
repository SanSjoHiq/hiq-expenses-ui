import React from 'react'
import {render, cleanup} from '@testing-library/react'
import { Expenses } from './pages/Expenses'

 afterEach(cleanup)
 
 test('should generate a snapshot for app component', () => {
    const { asFragment } = render(<Expenses />)
    
    expect(asFragment(<Expenses />)).toMatchSnapshot()
   });