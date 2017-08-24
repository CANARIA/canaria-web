export class PosteryService {
  fetch() {
    return new Promise(resolve => {
      // TODO: 実際のAPIを叩く処理に変更する
      const posters = [
        {
          id: 1,
          title: 'なんかの絵その1',
          path:
            'http://68.media.tumblr.com/738b981e038fdb3633b81934d8ad4504/tumblr_ollvmdw3vX1u1unrlo1_1280.jpg',
          user: {
            name: 'nabeliwo',
            thumb:
              'https://pbs.twimg.com/profile_images/769650967188869120/y9AT1oDG_400x400.jpg'
          }
        },
        {
          id: 2,
          title: 'なんかの絵その2',
          path:
            'http://68.media.tumblr.com/401e9aa6ab5cf94ef2f42080cd1a359b/tumblr_ollvmdw3vX1u1unrlo4_500.jpg',
          user: {
            name: 'suzumi',
            thumb:
              'https://pbs.twimg.com/profile_images/493797738232836097/7m5qqKSw_400x400.jpeg'
          }
        },
        {
          id: 3,
          title: 'なんかの絵その3',
          path:
            'http://68.media.tumblr.com/eefe25271c3a815ae1081219d3d785b4/tumblr_ollvmdw3vX1u1unrlo5_1280.jpg',
          user: {
            name: 'hirose',
            thumb:
              'https://pbs.twimg.com/profile_images/826966099795128320/YBixI0Tf_400x400.jpg'
          }
        },
        {
          id: 4,
          title: 'なんかの絵その4',
          path:
            'http://68.media.tumblr.com/bef74d76a154b809c78bf9039b391385/tumblr_ollvkrNHPI1u1unrlo1_1280.jpg',
          user: {
            name: 'tkfric',
            thumb:
              'https://pbs.twimg.com/profile_images/491921906795180032/o6ayV47q_400x400.jpeg'
          }
        },
        {
          id: 5,
          title: 'なんかの絵その5',
          path:
            'http://68.media.tumblr.com/52c223fb626f8a3fd26bf80f3b8ee218/tumblr_ollvkrNHPI1u1unrlo2_1280.jpg',
          user: {
            name: 'arashida',
            thumb:
              'https://pbs.twimg.com/profile_images/719088001473585152/7OKWuF9q_400x400.jpg'
          }
        }
      ]

      setTimeout(() => {
        resolve(posters)
      }, 500)
    })
  }
}

export default new PosteryService()
