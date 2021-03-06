import React from 'react'
import PropTypes from 'prop-types'
import ListContainer from '../containers/ListContainer'
import View from '../ui/View'
import Title from '../ui/Title'
import Divider from '../ui/Divider'
import Header from '../ui/Header'
import Icon from '../ui/Icon'

function ListsView(props) {
  const { lists, handleListClick } = props
  return (
    <View>
      <Header left={
        <Icon name="format_align_left" />
      }
      />
      <Title>Lists</Title>
      <Divider verticalMargin={15} stroke={0} />
      <ListContainer
        lists={lists}
        handleListClick={handleListClick}
      />
    </View>
  )
}

ListsView.propTypes = {
  lists: PropTypes.array.isRequired,
  handleListClick: PropTypes.func.isRequired,
}

export default ListsView
