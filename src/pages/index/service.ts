import { RootState, Dispatch } from '@/store'
import { connect } from 'react-redux'

import {
  RequesPayloadInfo,
  ResponseInfo
} from '@/type/api/global'


/** 基础订阅道具 */
export interface IndexBaseProp {
  initData?: ResponseInfo

}

/** 基础订阅方法 */
export interface IndexDispatch {
  getInitModel: (payload: RequesPayloadInfo) => Promise<void | ResponseInfo>
}


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
