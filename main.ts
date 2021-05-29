let speed_left = 80
let speed_right = 80
basic.forever(function () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, speed_left)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, speed_right)
    if (Kitronik_Clip_Detector.sensorDigitalDetection(Kitronik_Clip_Detector.PinSelection.P0, Kitronik_Clip_Detector.LightSelection.Light) && Kitronik_Clip_Detector.sensorDigitalDetection(Kitronik_Clip_Detector.PinSelection.P2, Kitronik_Clip_Detector.LightSelection.Light)) {
    	
    } else if (Kitronik_Clip_Detector.sensorDigitalDetection(Kitronik_Clip_Detector.PinSelection.P0, Kitronik_Clip_Detector.LightSelection.Dark) && Kitronik_Clip_Detector.sensorDigitalDetection(Kitronik_Clip_Detector.PinSelection.P2, Kitronik_Clip_Detector.LightSelection.Light)) {
        if (speed_right < 100) {
            speed_right = speed_right + 1
        } else {
            speed_left = speed_left - 1
        }
    } else if (Kitronik_Clip_Detector.sensorDigitalDetection(Kitronik_Clip_Detector.PinSelection.P0, Kitronik_Clip_Detector.LightSelection.Light) && Kitronik_Clip_Detector.sensorDigitalDetection(Kitronik_Clip_Detector.PinSelection.P2, Kitronik_Clip_Detector.LightSelection.Dark)) {
        if (speed_left < 100) {
            speed_left = speed_left + 1
        } else {
            speed_right = speed_right - 1
        }
    }
})
