import { View, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  const handleClick = () => {
    Taro.chooseMedia({
      count: 1,
      mediaType: ['image'],
      fail: (error) => console.log('value', error),
      success: (res) => console.log('res', res.tempFiles[0].tempFilePath),
    })
  }

  return (
    <View className="index">
      <Button onClick={handleClick}>上传图片</Button>
    </View>
  )
}
