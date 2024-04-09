import { View, Text, Image } from 'react-native'
import React from 'react'

export default function EmptyList({message}) {
  return (
    <View className="flex justify-center items-center my-5 space-y-3">

        <Text className="font-bold text-gray-400">{message|| 'data not found'}</Text>
    </View>
  )
}