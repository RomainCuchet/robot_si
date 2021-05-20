let is_object = false
function turn_righ() {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 20)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Reverse, 20)
}

function line_follower() {
    if (!is_object) {
        if (Kitronik_Clip_Detector.sensorDigitalDetection(Kitronik_Clip_Detector.PinSelection.P0, Kitronik_Clip_Detector.LightSelection.Light) && Kitronik_Clip_Detector.sensorDigitalDetection(Kitronik_Clip_Detector.PinSelection.P2, Kitronik_Clip_Detector.LightSelection.Light)) {
            move_forward()
        }
        
        if (Kitronik_Clip_Detector.sensorDigitalDetection(Kitronik_Clip_Detector.PinSelection.P0, Kitronik_Clip_Detector.LightSelection.Dark) && Kitronik_Clip_Detector.sensorDigitalDetection(Kitronik_Clip_Detector.PinSelection.P2, Kitronik_Clip_Detector.LightSelection.Light)) {
            turn_left()
        }
        
        if (Kitronik_Clip_Detector.sensorDigitalDetection(Kitronik_Clip_Detector.PinSelection.P0, Kitronik_Clip_Detector.LightSelection.Light) && Kitronik_Clip_Detector.sensorDigitalDetection(Kitronik_Clip_Detector.PinSelection.P2, Kitronik_Clip_Detector.LightSelection.Dark)) {
            turn_righ()
        }
        
    }
    
}

function turn_left() {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Reverse, 20)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 20)
}

function obstable_detection() {
    
    if (Kitronik_Clip_Detector.sensorDigitalDetection(Kitronik_Clip_Detector.PinSelection.P1, Kitronik_Clip_Detector.LightSelection.Objct)) {
        is_object = true
    } else {
        is_object = false
    }
    
}

function move_forward() {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 20)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 20)
}

basic.forever(function on_forever() {
    Kitronik_Clip_Detector.setSensorToDetectObjects()
    obstable_detection()
    line_follower()
})
