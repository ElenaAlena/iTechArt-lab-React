import React from 'react';
import {cleanup, render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import ActionAlert from './ActionAlert';

afterEach(cleanup);

it('Alert', () => {
    //info
  const info = renderer.create(
    <ActionAlert alert={{text:'Info'}} />,
  );
  const treeInfo = info.toJSON();
  expect(treeInfo).toMatchSnapshot();

    //error    
  const error = renderer.create(
    <ActionAlert alert={{text:'Error',type:'error'}} />,
  );
  const treeError = error.toJSON();
  expect(treeError).toMatchSnapshot();  

});