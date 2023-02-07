import * as React from 'react';
import { render } from 'enzyme';
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
});
