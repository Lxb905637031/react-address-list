import { useEffect, useState, Ref } from 'react'

const HEIGHT = 38

function useScroll(ref: Ref<HTMLDivElement>) {
  
  const [alphabet, setAlphabet] = useState<string>('')

  useEffect(() => {
    init()
  }, [alphabet])
  

  function clickAlphabet(alphabet: string) {
    const oAlphabet: HTMLDivElement | null  = document.getElementById('letter-' + alphabet) as HTMLDivElement
    // oAlphabet && oAlphabet.scrollIntoView({ 
    //   behavior: 'smooth', 
    //   block: 'start', 
    //   inline: 'nearest'
    // })
    oAlphabet && window.scrollTo({
      top: oAlphabet.offsetTop - HEIGHT,
      left: 0,
      behavior: 'smooth'
    })
    setAlphabet(alphabet)
  }

  function init() {
    window.addEventListener('scroll', () => {
      handleScroll()
    }, false)
  }

  function handleScroll() {
    // @ts-ignore
    const oListItem = ref?.current.getElementsByClassName('list-item') as HTMLDivElement[]
    // @ts-ignore
    const index = ([...oListItem]).findLastIndex(item => {
      return item.getBoundingClientRect().top < HEIGHT * 2
    })
    setAlphabet(oListItem[index].getAttribute('data-letter')!)
  }

  return {
    alphabet,
    clickAlphabet
  }
}

export {
  useScroll
}