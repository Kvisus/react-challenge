
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import App from "../src/App";
// const App = require('../src/App');


describe('App testing',()=> {
  it('adds appointment',()=>{
    const wrapper = shallow(<App />);
    const testingAppointment = {
      title: 'Hello',
      appointment: 'itsMe',
      date: '26.04.1986',
      time: '01.41',
    };

    const expected = {};

    expect(App.addAppointment(testingAppointment)).toEqual(App.appointments);
  })

  test('adds contact',()=> {

  })
})