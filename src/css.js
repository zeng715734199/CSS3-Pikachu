const string = `
/* css reset */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
*::before,
*::after {
  box-sizing: border-box;
}
/* 设置皮肤 */
.skin {
  background: rgb(255, 230, 0);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper {
  position: relative;
  top: 0;
  width: 400px;
  height: 400px;
  overflow: hidden;
}
/* 来画一个鼻子 */
.nose {
  border: 9px solid black;
  border-color: black transparent transparent;
  border-bottom: none;
  width: 0px;
  height: 0px;
  position: absolute;
  left: 50%;
  top: 107px;
  margin-left: -9px;
  z-index: 2;
  transform-origin: 50% 100%;
  animation: wave 300ms infinite linear;
}
.sector {
  position: absolute;
  width: 18px;
  height: 5px;
  background: black;
  bottom: 9px;
  left: -9px;
  border-radius: 12px 12px 0 0;
}
/* 接着画一个眼睛 */
.eyes {
  border: 2px solid #000;
  min-width: 50px;
  min-height: 50px;
  position: absolute;
  top: 70px;
  border-radius: 50%;
  background: #2e2e2e;
  z-index: 2;
}
.eyes.Left {
  left: 50%;
  margin-left: -25px;
  transform: translateX(-90px);
}
.eyes.Right {
  right: 50%;
  margin-right: -25px;
  transform: translateX(90px);
}
.eyes.Left::before,
.eyes.Right::before {
  content: "";
  display: block;
  border: 3px solid #000;
  width: 23px;
  height: 23px;
  background: white;
  border-radius: 50%;
  position: absolute;
  left: 9px;
  top: 0px;
  animation:eyeMove 3s infinite;
}
/* 画嘴巴，嘴巴是由两个椭圆组成的 */
.mouth {
  height: 200px;
  width: 160px;
  position: relative;
  left: 50%;
  top: 125px;
  margin-left: -80px;
  overflow: hidden;
  z-index: 2;
}
.upMouth {
  position: relative;
}
/* 画上嘴唇 */
.lip {
  position: absolute;
  height: 38px;
  width: 80px;
  border: 3px solid #000;
  border-top-color: transparent;
  background: rgb(255, 230, 0);
  z-index: 1;
}
.lip.Left {
  border-radius: 0 0 0 40px;
  border-left-color: transparent;
  transform: rotateZ(-30deg);
}
.lip.Left::before {
  content: "";
  display: block;
  height: 35px;
  width: 6px;
  position: absolute;
  background: rgb(255, 230, 0);
  right: -5px;
}
.lip.Right {
  right: 0;
  border-radius: 0 0 40px 0;
  border-right-color: transparent;
  transform: rotate(30deg);
}
.lip.Right::after {
  content: "";
  display: block;
  height: 35px;
  width: 12px;
  position: absolute;
  background: rgb(255, 230, 0);
  left: -0.37em;
  bottom: -0.2em;
  transform: rotate(26deg);
}
.downMouth {
  position: absolute;
  height: 180px;
  top: 12px;
  width: 100%;
  overflow: hidden;
}
.downMouth .round1 {
  border: 3px solid #000;
  position: absolute;
  height: 273px;
  width: 130px;
  left: 50%;
  top: -110px;
  margin-left: -65px;
  border-radius: 100px/200px;
  background: rgb(204, 65, 67);
  overflow: hidden;
  animation: mouthMove 3s infinite;
}
.downMouth .round2 {
  border: 3px solid #000;
  position: absolute;
  top: 145px;
  left: 50%;
  height: 135px;
  width: 130px;
  border-radius: 120px/100px;
  margin-left: -65px;
  background: rgb(221, 102, 106);
}
/* 画一对脸蛋 */
.face {
  position: absolute;
  top: 140px;
  left: 50%;
  border: 3px solid #000;
  height: 64px;
  width: 64px;
  margin-left: -32px;
  border-radius: 50%;
  background: rgb(255, 0, 0);
  z-index: 2;
  animation: cheekMove 3s infinite;
}
.face.Left {
  transform: translateX(-150px);
}
.face.Right {
  transform: translateX(150px);
}

/* 添加动画 */
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@-webkit-keyframes eyeMove{
  0%,100%{
    top:2px;
    left:2px;
  }
  30%,60%,70%{
    top: 0;
    left: 15px;
  }
  40%{
    top: 0;
    left: 15px;
  }
  50%{
    top: 0;
    left: 10px;
  }
  80%,90%{
    top: 17px;
    left: 15px;
  }
}

@-webkit-keyframes cheekMove{
  0%,46%,54%,100%{
    width: 64px;
    height: 64px;
    top: 140px;
  }
  50%{
    width: 50px;
    height: 50px;
    top: 160px;
  }
}
@keyframes mouthMove {
  0%,
  46%,
  54%,
  100% {
    height: 273px;
  }
  50% {
    height: 100px;
  }
}
`;

export default string;
