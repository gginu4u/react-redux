import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

describe('Manage Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''},
      authors: [],
      actions: {saveCourse: () => {return Promise.resolve(); }}
    };
    const wrapper = mount(<ManageCoursePage {...props}/>);
    // gives an error if connected ManageCoursePage component is used
    // and it is not wrapped in a Provider component and hence is not connected to the store

    // 1) We can wrap our test target component in a Provider
    // const wrapper = mount(<Provider store={store}><ManageCoursePage /></Provider>);

    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
