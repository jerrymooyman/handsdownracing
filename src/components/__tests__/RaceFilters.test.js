import React from 'react'
import renderer from 'react-test-renderer'
import RaceFilters from '../RaceFilters'

it('renders correctly', () => {
  const tree = renderer.create(<RaceFilters />).toJSON()
  expect(tree).toMatchSnapshot()
})
