import Item from "assets/scripts/dumb-components/menu/item"
import { ExpansionPanelActions } from "@material-ui/core"

import * as React from "react";
import { shallow } from "enzyme";

import User from "./index";

it("It", () => {
    const component = shallow(<User />);
    expect(1).toBe(1);
});