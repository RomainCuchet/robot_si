speed_left = 80
speed_right = 80

def on_forever():
    global speed_right, speed_left
    kitronik_klip_motor.motor_on(kitronik_klip_motor.Motors.MOTOR1,
        kitronik_klip_motor.MotorDirection.FORWARD,
        speed_left)
    kitronik_klip_motor.motor_on(kitronik_klip_motor.Motors.MOTOR2,
        kitronik_klip_motor.MotorDirection.FORWARD,
        speed_right)
    if Kitronik_Clip_Detector.sensor_digital_detection(Kitronik_Clip_Detector.PinSelection.P0,
    Kitronik_Clip_Detector.LightSelection.LIGHT) and Kitronik_Clip_Detector.sensor_digital_detection(Kitronik_Clip_Detector.PinSelection.P2,
    Kitronik_Clip_Detector.LightSelection.LIGHT):
        pass
    elif Kitronik_Clip_Detector.sensor_digital_detection(Kitronik_Clip_Detector.PinSelection.P0,
    Kitronik_Clip_Detector.LightSelection.DARK) and Kitronik_Clip_Detector.sensor_digital_detection(Kitronik_Clip_Detector.PinSelection.P2,
    Kitronik_Clip_Detector.LightSelection.LIGHT):
        if speed_right < 100:
            speed_right = speed_right + 1
        else:
            speed_left = speed_left - 1
    elif Kitronik_Clip_Detector.sensor_digital_detection(Kitronik_Clip_Detector.PinSelection.P0,
    Kitronik_Clip_Detector.LightSelection.DARK) and Kitronik_Clip_Detector.sensor_digital_detection(Kitronik_Clip_Detector.PinSelection.P2,
    Kitronik_Clip_Detector.LightSelection.LIGHT):
        pass
basic.forever(on_forever)
