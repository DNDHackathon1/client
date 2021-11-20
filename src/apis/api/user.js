import { defaultInstance } from '@apis/utils'

// 사용 예시
// export const getPost = async (selectChannel) => {
//   try {
//     const { data } = await defaultInstance.get(`요청주소`)
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// }

// 사용 예시
// data 필드에 data가 들어가야하면 객체 타입으로 받아온 매게변수를 두번 째 인자에 넣어줌
export const signUpPost = async (formData) => {
  try {
    await defaultInstance.post('/api/users/signup', formData)
  } catch (error) {
    console.log(error)
  }
}

// 사용 예시
// axios delete 필드는 data타입이 없기 때문에 직접 data타입을 지정해줘야 한다
// export const deletePost = async (id) => {
//   try {
//     await authInstance.delete('posts/delete', { data: id })
//   } catch (error) {
//     console.log(error)
//   }
// }
