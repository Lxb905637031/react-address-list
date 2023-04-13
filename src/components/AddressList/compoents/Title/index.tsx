import { FC } from 'react'
import './style/index.less'

interface IProps {
  title: string
}

const Title: FC<IProps> = ({ title }) => {
  return (
    <div className="address-title">
      { title }
    </div>
  )
}

export default Title