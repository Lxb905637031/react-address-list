import { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode;
  letter: string;
  alphabet: string;
}

import './style/index.less'

const Letter: FC<IProps> = ({
  children,
  letter,
  alphabet
}) => {
  return (
    <div 
      className={ alphabet === letter ? 'letter active' : 'letter'} 
      id={ 'letter-' + letter }
    >
      <span className="text">{ children }</span>
    </div>
  )
}

export default Letter
