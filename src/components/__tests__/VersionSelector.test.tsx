/* eslint-disable import/no-internal-modules */
/* tslint:disable:no-implicit-dependencies */

import * as React from 'react';
import { render, mount } from 'enzyme';
// import '@testing-library/jest-dom'
// import userEvent from '@testing-library/user-event';
// import { render, screen } from '@testing-library/react'
import { VersionSelector } from '../VersionSelector';
import { versionData } from '../Redoc/Redoc';

describe('VersionSelector', () => {
  it('should correctly render VersionSelector', () => {
    const wrapper = render(<VersionSelector {...versionData} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('label').text()).toBe(
      `Version Selector: v${versionData.active.api_version}`,
    );
    expect(wrapper.find('button').text()).toBe(versionData.resource_versions.slice(-1)[0]);
  });

  it('should render li options', () => {
    const wrapper = mount(<VersionSelector {...versionData} />);
    expect(wrapper.find('li[role="option"]')).toHaveLength(0);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('li[role="option"]')).toHaveLength(versionData.resource_versions.length);
  });

  it('should accessibly navigate li options', () => {
    const wrapper = mount(<VersionSelector {...versionData} />);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('li[role="option"]')).toHaveLength(versionData.resource_versions.length);
    wrapper
      .find('ul')
      .simulate('keyPress', { key: 'Tab', keyCode: 9, which: 9, charCode: 9, code: 9 });
    wrapper.find('ul').simulate('keyPress', {
      key: 'Enter',
      keyCode: 13,
      which: 13,
      charCode: 13,
      code: 13,
    });
    // expect(wrapper.find('li[role="option"]')).;
    expect(wrapper.find('button').text()).toBe(versionData.resource_versions[1]);
  });
});
