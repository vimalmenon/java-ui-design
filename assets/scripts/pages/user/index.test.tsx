import "jsdom-global/register";
import * as React from "react";
import { shallow } from "enzyme";

import User from "./index";


describe("Page component :", () => {
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("It", () => {
        //const component = shallow(<User />);
        //console.log(component.debug());
        expect(1).toBe(1);
    });
    
});
