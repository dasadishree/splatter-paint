tool.fixedDistance = Math.random() * (45)+5;
var synth = new Tone.Synth().toMaster()


function onMouseMove(event) {
  synth.triggerRelease()
  synth.triggerAttack(Math.floor(Math.random() * 5000) + 200)
  var path = new Path.Circle({
    center: event.middlePoint,
    radius: Math.round(Math.random() * 25) + 5
  })
  var path2 = new Path.Rectangle({
    width:50,
    height:50,
    center: event.middlePoint
  })

  path.fillColor = {
    hue: event.count * 3,
    saturation: 1,
    brightness: 1
  }
  path2.fillColor = {
    hue: event.count * 3,
    saturation:1,
    brightness: 1
  }
}
