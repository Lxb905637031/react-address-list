import { pinyin } from 'pinyin-pro'

function formateData(data: any[]) {
  return data.reduce((prev: any, cur: any) => {
    const key = pinyin(cur.toUpperCase()).toLocaleUpperCase()[0]
    if (prev[key]) {
      prev[key].push(cur)
      prev[key] = prev[key].sort((a: any, b: any) => a.localeCompare(b, 'zh'))
    } else {
      prev[key] = [cur]
    }

    return prev
  }, {})
}



export {
  formateData
}