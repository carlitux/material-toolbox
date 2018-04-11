// @flow
import * as React from 'react';

import TabBar from './material-toolbox/tabs/Bar';
import Tab from './material-toolbox/tabs/Tab';
import Text from './material-toolbox/typography/Text';

import Highlighter from './Highlighter';

type Props = {
  title: string,
  children: React.Node,
  source: string,
  scss?: string,
};

type State = {
  tabSelected: number,
};

export default class Example extends React.PureComponent<Props, State> {
  state = {
    tabSelected: 0,
  };

  handleChange = (index: number) => {
    this.setState({ tabSelected: index });
  };

  render() {
    const { title, children, source, scss } = this.props;

    return (
      <div className="example">
        <Text textStyle="title" component="h2">
          {title}
        </Text>
        <TabBar onChange={this.handleChange} refreshAt={1800}>
          <Tab>Example</Tab>
          <Tab>Source</Tab>
        </TabBar>
        <section className={this.state.tabSelected === 0 ? '' : 'hide'}>
          {children}
        </section>
        <section className={this.state.tabSelected === 1 ? '' : 'hide'}>
          <Highlighter language="jsx">{source}</Highlighter>
          {scss && <Highlighter language="scss">{scss}</Highlighter>}
        </section>
      </div>
    );
  }
}
