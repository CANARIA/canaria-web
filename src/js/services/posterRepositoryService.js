export class PosterRepositoryService {
  fetch() {
    return new Promise((resolve) => {
      // TODO: 実際のAPIを叩く処理に変更する
      const posters = [
        { path: 'http://68.media.tumblr.com/738b981e038fdb3633b81934d8ad4504/tumblr_ollvmdw3vX1u1unrlo1_1280.jpg' },
        { path: 'http://68.media.tumblr.com/401e9aa6ab5cf94ef2f42080cd1a359b/tumblr_ollvmdw3vX1u1unrlo4_500.jpg' },
        { path: 'http://68.media.tumblr.com/eefe25271c3a815ae1081219d3d785b4/tumblr_ollvmdw3vX1u1unrlo5_1280.jpg' },
        { path: 'http://68.media.tumblr.com/bef74d76a154b809c78bf9039b391385/tumblr_ollvkrNHPI1u1unrlo1_1280.jpg' },
        { path: 'http://68.media.tumblr.com/52c223fb626f8a3fd26bf80f3b8ee218/tumblr_ollvkrNHPI1u1unrlo2_1280.jpg' }
      ];

      setTimeout(() => {
        resolve(posters);
      }, 500);
    });
  }
}

export default new PosterRepositoryService();
