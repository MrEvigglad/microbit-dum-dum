basic.forever(function () {
    basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 10) {
        maqueen.motorStop(maqueen.Motors.All)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 130)
    } else {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    }
})
