import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Table from '../Components/Table';
import HardCodedTable from '../Components/HardCodedTable';
import Venue from '../Components/Venue';
import FunctionPropTable from '../Components/FunctionPropTable';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

    storiesOf('Table', module).add('A table component with no props', () => (
        <Table />
    ))

    storiesOf('HardCodedTable', module).add('A table component that takes the size and time as a prop', () => (
        <HardCodedTable time='12:00' size='2 x 2' />
    ))

    storiesOf('Venue', module).add('A venue component that takes tables and displays them in a list', () => {
        let t1 = <HardCodedTable time='12:00' size='2 x 2' />;
        let t2 = <HardCodedTable time='13:00' size='3 x 3' />;
        let props = {
            tables: [t1, t2]
        }

        return(<Venue {...props} />)
    })

storiesOf('FunctionPropTable', module).add('An example of a table component that can be passed a function', () => {
    let props = {
        function: () => {
            console.log('clicked!')
            this.time = '22:22'
        }
    }

    return(<FunctionPropTable onClick={this.onClick} {...props} />)
})
