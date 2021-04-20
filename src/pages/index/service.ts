import { RootState, Dispatch } from '@/store'
import { connect } from 'react-redux'
import { IndexBaseProp, IndexDispatch } from './view'

const mapState = (state: RootState): IndexBaseProp => {
  return {
    initData: state.global.initData
  }
}

const mapDispatch = (d: unknown): IndexDispatch => {
  const dispatch = d as Dispatch
  return {
    getInitModel: dispatch.global.getInitModel,
  }
}

export default connect(mapState, mapDispatch)
