import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import NavBar from './NavBar';

/**
 * @jest-environment jsdom
 */

describe('NavBar Tests', () => {
  test('Render NavBar ', () => {
    const { container } = render(<div>Hola mundo</div>);
    //expect().toBeTruthy();
    console.log(container);
  });
});
