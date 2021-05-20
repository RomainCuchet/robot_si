is_object = False
def turn_righ():
    kitronik_klip_motor.motor_on(kitronik_klip_motor.Motors.MOTOR1,
        kitronik_klip_motor.MotorDirection.FORWARD,
        20)
    kitronik_klip_motor.motor_on(kitronik_klip_motor.Motors.MOTOR1,
        kitronik_klip_motor.MotorDirection.REVERSE,
        20)
def line_follower():
    if not (is_object):
        if Kitronik_Clip_Detector.sensor_digital_detection(Kitronik_Clip_Detector.PinSelection.P0,
    Kitronik_Clip_Detector.LightSelection.LIGHT) and Kitronik_Clip_Detector.sensor_digital_detection(Kitronik_Clip_Detector.PinSelection.P2,
    Kitronik_Clip_Detector.LightSelection.LIGHT):
            move_forward()
        if Kitronik_Clip_Detector.sensor_digital_detection(Kitronik_Clip_Detector.PinSelection.P0,
    Kitronik_Clip_Detector.LightSelection.DARK) and Kitronik_Clip_Detector.sensor_digital_detection(Kitronik_Clip_Detector.PinSelection.P2,
    Kitronik_Clip_Detector.LightSelection.LIGHT):
            turn_left()
        if Kitronik_Clip_Detector.sensor_digital_detection(Kitronik_Clip_Detector.PinSelection.P0,
    Kitronik_Clip_Detector.LightSelection.LIGHT) and Kitronik_Clip_Detector.sensor_digital_detection(Kitronik_Clip_Detector.PinSelection.P2,
    Kitronik_Clip_Detector.LightSelection.DARK):
            turn_righ()
def turn_left():
    kitronik_klip_motor.motor_on(kitronik_klip_motor.Motors.MOTOR1,
        kitronik_klip_motor.MotorDirection.REVERSE,
        20)
    kitronik_klip_motor.motor_on(kitronik_klip_motor.Motors.MOTOR2,
        kitronik_klip_motor.MotorDirection.FORWARD,
        20)
def obstable_detection():
    global is_object
    if Kitronik_Clip_Detector.sensor_digital_detection(Kitronik_Clip_Detector.PinSelection.P1,
    Kitronik_Clip_Detector.LightSelection.OBJCT):
        is_object = True
    else:
        is_object = False
def move_forward():
    kitronik_klip_motor.motor_on(kitronik_klip_motor.Motors.MOTOR1,
        kitronik_klip_motor.MotorDirection.FORWARD,
        20)
    kitronik_klip_motor.motor_on(kitronik_klip_motor.Motors.MOTOR1,
        kitronik_klip_motor.MotorDirection.FORWARD,
        20)

def on_forever():
    Kitronik_Clip_Detector.set_sensor_to_detect_objects()
    obstable_detection()
    line_follower()
basic.forever(on_forever)
