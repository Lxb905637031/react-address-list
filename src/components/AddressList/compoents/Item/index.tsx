import { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

import './style/index.less'

const Item: FC<IProps> = ({
  children
}) => {
  return (
    <div className="address-item">
      { children }
    </div>
  )
}

export default Item

