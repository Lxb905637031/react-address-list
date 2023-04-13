# 模拟手机通讯录列表

react hooks + typescript

## 参数
1. title: 展示顶部的标题
2. addressList: 数据项，数组类型，每一项都为字符串类型

## 效果
1. 点击侧边字母自动跳转到对应目标项
2. 滚动列表与侧边字母实现联动

## 坑
1. document.documentElement.scrollTo在某些浏览器上不适用 (替换为window.scrollTo)
2. 一加内置浏览器scroll事件不适用 (未解决)

## 展示
_-2023-04-04-13.20.22.gif