function line_follower() {
    if (Kitronik_Clip_Detector.sensorDigitalDetection(Kitronik_Clip_Detector.PinSelection.P0, Kitronik_Clip_Detector.LightSelection.Dark)) {
        
    }
    
    if (Kitronik_Clip_Detector.sensorDigitalDetection(Kitronik_Clip_Detector.PinSelection.P2, Kitronik_Clip_Detector.LightSelection.Light)) {
        
    }
    
}

function turn_left(degree: any) {
    
}

basic.forever(function on_forever() {
    Kitronik_Clip_Detector.setSensorToDetectObjects()
})
