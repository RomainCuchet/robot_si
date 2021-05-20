def line_follower():
    if Kitronik_Clip_Detector.sensor_digital_detection(Kitronik_Clip_Detector.PinSelection.P0,
    Kitronik_Clip_Detector.LightSelection.DARK):
        pass
    if Kitronik_Clip_Detector.sensor_digital_detection(Kitronik_Clip_Detector.PinSelection.P2,
    Kitronik_Clip_Detector.LightSelection.LIGHT):
        pass
def turn_left(degree):
    pass

def on_forever():
    Kitronik_Clip_Detector.set_sensor_to_detect_objects()
basic.forever(on_forever)