 

### Basic Configuration

#### The video source

Use `src` property to set the video source of your player. It must be the only three types below.

+ String; It can be relative path of your video file or some cdn url.

``` html
<vue-core-video-player src="https://media.vued.vanthink.cn/sparkle_your_name_am720p.mp4"></vue-core-video-player>
```
+ Array; It means you set different resolution of the same video source; Our default resolution is `720p`;

And you must set two keys (`resolution`, `src`) of your array item.

``` js
const videoSource = [
  {
    src: 'https://media.vued.vanthink.cn/sparkle_your_name_am360p.mp4',
    resolution: '360p',
  }, {
    src: 'https://media.vued.vanthink.cn/sparkle_your_name_am720p.mp4',
    resolution: '720p',
  }, {
    src: 'https://media.vued.vanthink.cn/y2mate.com%20-%20sparkle_your_name_amv_K_7To_y9IAM_1080p.mp4',
    resolution: '1080p'
  }
]
```
If you want to play different file type in different browser. You can add `type` property in an array;

``` bash
const videoSource = [
  {
    src: 'https://media.vued.vanthink.cn/sparkle_your_name_am720p.webm',
    type: 'video/webm',
  }, {
    src: 'https://media.vued.vanthink.cn/sparkle_your_name_am720p.mp4',
    type: 'video/mp4',
  }
]
```

[caniuse-video-format](https://caniuse.com/#search=video%20format) show which browser supports the specify video file.


#### Controls

`controls` is set for player bottom dashboard. 

+ String; 

  + 'fixed' indicates the bottom dashboard is still visible to users. 
  + 'auto' indicates the bottom dashboard will hide when there is no interaction between user and player.

+ Boolean;
  + `false` indicates that player will hide the bottom dashboard
  + `true`  indicates that player will show the bottom dashboard and work like the `'auto'` value above;


#### Autoplay

If you set `autoplay`, the player will try to play video. Different browser has different policies to handle auto play action. If player failed, it will show the play button for user to touch.

#### Video Playback control

And it keep the same attributes of [HTML Video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video).

| Props        | Type         | Example  | Description  |
| ------------- |:-------------:|:----- |:--------------|
| volume     | number | `0.5` | the volume of video (0-1) |
| muted     | boolean | `true` | if set `true`, the video will be muted  |
| cover     | string | `'./cover.png'` | it will show the cover of the video; If you set `autoplay`, the player auto play successfully, the `cover` property will not work.  |
| title     | string | `'your title'` | it will show the title of video for better SEO  |
| logo     | string | `'./logo.png'` | it will show the your logo of the player  |
| loop     | boolean | `true` | it will automatically seek back to the start upon reaching the end of the video  |
| [preload](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)   | string | `'metadata'`  | `'none'` means not preload video source; `'metadata'` indicates that only video metadata (e.g. length) is fetched  |
