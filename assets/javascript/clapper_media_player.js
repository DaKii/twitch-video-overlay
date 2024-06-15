

function setPlayer (id) {
  let playerElement = document.getElementById("friend-video-player");
  let width = playerElement.offsetWidth;
  let height = playerElement.offsetHeight;

  let player = new Clappr.Player({
    parentId: "#" + id,
    source: "https://deardiary.hopto.org/hls/stream.m3u8",
    poster: '/poster.jpg',
    width:  width.toString(),
    height: height.toString(),
    mute: "false",
    autoPlay: "false",
    exitFullscreenOnEnd: false,
    plugins: [LevelSelector, MediaControl.MainPlugin,
      MediaControl.PlayPauseButtonPlugin,
      MediaControl.VolumePlugin,
      MediaControl.FullscreenButtonPlugin,
      MediaControl.SeekBarPlugin,
      MediaControl.LevelSelectorPlugin,
    ],
    mediaControl: {
      disableBeforeVideoStarts: true,
      levelSelectorComponent: {
        layer: 1,
        section: 1,
        position: 2,
        separator: true,
        onlyShowWithClick: true,
        labels: {
          0: 'low',
          1: 'med',
          2: 'high',
          3: 'higher',
          4: 'src',
        },
        onLevelsAvailable: function (levels) { return levels.reverse() },
      }
    },
    levelSelectorConfig: {
      title: 'Quality',
      labels: {
        4: 'src',
        3: 'higher',
        2: 'high',
        1: 'med',
        0: 'low',
      },
      labelCallback: function (playbackLevel, customLabel) {
        return customLabel + playbackLevel.level.height + 'p'; // High 720p
      }
    },
  });
}