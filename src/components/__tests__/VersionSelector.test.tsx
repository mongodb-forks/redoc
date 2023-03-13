/* eslint-disable import/no-internal-modules */
import * as React from 'react';
import { mount, render } from 'enzyme';
import { VersionSelector } from '../VersionSelector';
import * as versionData from './data/mockVersionData.json';

describe('VersionSelector', () => {
  it('should correctly render VersionSelector', () => {
    const wrapper = render(<VersionSelector {...versionData} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('label').text()).toBe(
      `Version Selector: v${versionData.active.apiVersion}`,
    );
    expect(wrapper.find('button').text()).toBe(versionData.resourceVersions.slice(-1)[0]);
  });

  it('should have options', async () => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      enumerable: true,
      value: new URL(window.location.href),
    });

    const wrapper = mount(<VersionSelector {...versionData} />);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('li')).toHaveLength(3);

    wrapper.find('li').at(0).simulate('click');
    expect(JSON.stringify(window.location)).toBe(
      JSON.stringify(`${versionData.rootUrl}/${versionData.resourceVersions[0]}`),
    );
  });
});
