import React from "react";
import Nav from './Nav';
import { render } from "@testing-library/react";

    test('Home , Signin and Register Texts exists', () => {
        const { getByText } = render(    
            <Nav />   
        );
        expect(getByText(/Home/i));
        
      });