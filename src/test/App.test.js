import React from 'react';
import ReactDOM from 'react-dom';

import Home from '../views/home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Home", () => {

  let component;
  let container;

  beforeEach(() => {
    container = document.createElement("div");
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });

  it("should be defined", () => {
    expect(Home).toBeDefined();
  });

  it("should render carousel", () => {
    component = ReactDOM.render(
      <Home />,
    container);
    expect(component).toBeDefined();
  });
});
