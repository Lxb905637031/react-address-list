import { FC, useRef } from 'react'

import { formateData } from '../../../../utils'
import './style/index.less'

import Item from '../Item'
import Letter from '../Letter'

import { useScroll } from '../../hooks'

interface IProps {
  addressList: string[]
}

const alphabets: string[] = Array.from({ length: 26}, (item, index) => {
  return String.fromCharCode(65 + index)
})

const List: FC<IProps> = ({
  addressList
}) => {


  const list = (Object.entries(formateData(addressList)))
              .map(item => [item[0], item[1] as []])
              .sort((a, b) => {
                // @ts-ignore
                return a[0].charCodeAt() - b[0].charCodeAt()
              })

  const listRef = useRef<HTMLDivElement>(null)

  const {
    alphabet,
    clickAlphabet,
  } = useScroll(listRef)

  return (
    <div className="list-wrap">
      <ul className="alphabet-list">
        {
          alphabets.map((item: string) => {
            return (
              <li
                className={ alphabet === item ? 'alphabet active' : 'alphabet' }
                key={ item }
                onClick={ () => clickAlphabet(item) }
              >
                { item }
              </li>
            )
          })
        }
      </ul>
      <div 
        className="list-content"
        ref={ listRef }
      >
       {
        list.map((item, index) => {
          const [letter, arr] = item
          return (
            <div
              key={ index }
              className="list-item"
              data-letter={ letter }
            >
              <Letter
                letter={ letter as string }
                alphabet={ alphabet }
              >
                { letter }
              </Letter>
              <>
                {
                  (arr as []).map(i => {
                    return (
                      <Item
                        key={ i }
                      >
                        { i }
                      </Item>
                    )
                  })
                }
              </>
            </div>
          )
        })
       }
      </div>
    </div>
  )
}

export default List
