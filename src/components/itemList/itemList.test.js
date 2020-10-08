import React from "react";
import ItemList from "./itemList";
import { mount } from "enzyme";
import gotService from "../../services/gotService";

describe("Testing <ItemList/>", () => {
  const service = new gotService();
  const list = mount(
    <ItemList getData={service.getAllHouse} renderItem={({ name }) => name} />
  );
  it("Click on item list must rerender all list in 1 instance", () => {
    list.setState({
      itemList: [
        { name: "nbn", id: 1 },
        { name: "nbn", id: 2 },
      ],
    });
    list.find(".list-group-item:first-child").simulate("click");
    expect(list.find("ul")).toHaveLength(1);
  });
});
