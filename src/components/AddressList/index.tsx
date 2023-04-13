import { FC } from 'react'

import Title from './compoents/Title'
import List from './compoents/List'

interface IProps {
  title: string; // 标题名称
  addressList: string[]; // 列表数据
}

const AddressList: FC<IProps> = ({
    title,
    addressList
}) => {
  return (
    <div className="address-list">
      <Title
        title={ title }
      />
      <List
        addressList={ addressList }
      />
    </div>
  )
}

export default AddressList