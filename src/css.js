const string = `
.skin *{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.skin *::before,.skin *::after {
  box-sizing: border-box;
}
.skin {
  position: relative;
  background: rgb(255, 230, 0);
  height: 60vh;
}
.nose {
  border: 9px solid black;
  border-color: black transparent transparent;
  border-bottom: none;
  width: 0px;
  height: 0px;
  position: absolute;
  left: 50%;
  top: 287px;
  margin-left: -9px;
  z-index: 2;
}
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
.nose {
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
.eyeLeft {
  border: 2px solid #000;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 250px;
  margin-left: -15px;
  transform: translateX(-120px);
  border-radius: 50%;
  background: #2e2e2e;
  z-index: 2;
}
.eyeLeft::before {
  content: "";
  display: block;
  border: 3px solid #000;
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  position: absolute;
  left: 9px;
  top: 0px;
}
.eyeRight {
  border: 2px solid #000;
  width: 64px;
  height: 64px;
  position: absolute;
  right: 50%;
  top: 250px;
  margin-right: -15px;
  transform: translateX(120px);
  border-radius: 50%;
  background: #2e2e2e;
  z-index: 2;
}
.eyeRight::before {
  content: "";
  display: block;
  border: 3px solid #000;
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  position: absolute;
  left: 9px;
  top: 0px;
}
.mouth {
  height: 200px;
  width: 160px;
  position: relative;
  left: 50%;
  top: 305px;
  margin-left: -80px;
  overflow: hidden;
  z-index: 2;
}
.upMouth {
  position: relative;
}
.leftLip {
  position: absolute;
  height: 38px;
  width: 80px;
  border: 3px solid #000;
  border-radius: 0 0 0 40px;
  border-top-color: transparent;
  border-left-color: transparent;
  transform: rotateZ(-30deg);
  background: rgb(255, 230, 0);
  z-index: 1;
}
.leftLip::before {
  content: "";
  display: block;
  height: 35px;
  width: 6px;
  position: absolute;
  background: rgb(255, 230, 0);
  right: -5px;
}
.rightLip {
  position: absolute;
  height: 38px;
  width: 80px;
  right: 0;
  border: 3px solid #000;
  border-radius: 0 0 40px 0;
  border-top-color: transparent;
  border-right-color: transparent;
  transform: rotate(30deg);
  background: rgb(255, 230, 0);
  z-index: 1;
}
.rightLip::after {
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
  top: 11px;
  width: 100%;
  overflow: hidden;
}
.downMouth .round1 {
  border: 3px solid #000;
  position: absolute;
  height: 350px;
  width: 130px;
  left: 50%;
  bottom: 20px;
  margin-left: -65px;
  border-radius: 100px/200px;
  background: rgb(204, 65, 67);
  overflow: hidden;
}
.downMouth .round2 {
  border: 3px solid #000;
  position: absolute;
  top: 220px;
  left: 50%;
  height: 200px;
  width: 130px;
  border-radius: 120px/100px;
  margin-left: -65px;
  background: rgb(221, 102, 106);
}
.faceLeft {
  position: absolute;
  top: 365px;
  left: 50%;
  border: 3px solid #000;
  height: 82px;
  width: 82px;
  margin-left: -41px;
  transform: translateX(-175px);
  border-radius: 50%;
  background: rgb(255, 0, 0);
  z-index: 2;
}
.faceRight {
  position: absolute;
  top: 365px;
  left: 50%;
  border: 3px solid #000;
  height: 82px;
  width: 82px;
  margin-left: -41px;
  transform: translateX(175px);
  border-radius: 50%;
  background: rgb(255, 0, 0);
  z-index: 2;
}
.ear {
  position: absolute;
  border: 4px solid #000;
  background: rgb(255, 230, 0);
  overflow: hidden;
}
.ear.left {
  top: 21px;
  height: 180px;
  width: 100px;
  left: 50%;
  margin-left: -220px;
  border-radius: 5px 125% 0px 125%;
  transform: rotate(-26deg) skewX(25deg) skewY(0deg);
  transform-origin: 100% 100%;
}
.ear.right {
  top: 97px;
  height: 100px;
  width: 180px;
  right: 50%;
  margin-right: -125px;
  border-radius: 5px 125% 4px 125%;
  transform: rotate(139deg) skewX(25deg) skewY(0deg);
  transform-origin: bottom right;
}
.ear .black1 {
  position: absolute;
  left: -10px;
  top: -48px;
  height: 100px;
  width: 100px;
  border: 5px solid black;
  background: #000;
  transform: rotate(-162deg);
}
.black2 {
  position: absolute;
  left: -47px;
  top: -4px;
  height: 100px;
  width: 100px;
  border: 5px solid black;
  background: #000;
  transform: rotate(76deg);
}
.ring {
  border: 4px solid #000;
  background: rgb(255, 230, 0);
  border-color: #000 transparent transparent transparent;
  position: absolute;
  height: 500px;
  width: 400px;
  border-radius: 290px/250px;
  left: 50%;
  margin-left: -200px;
  top: 130px;
  z-index: 1;
}
@keyframes ear_left {
  0% {
    transform: rotate(-26deg) skewX(25deg) skewY(0deg);
  }
  50% {
    transform: rotate(-22deg) skewX(25deg) skewY(0deg);
  }
  100% {
    transform: rotate(-26deg) skewX(25deg) skewY(0deg);
  }
}
@keyframes ear_right {
  0% {
    transform: rotate(139deg) skewX(25deg) skewY(0deg);
  }
  50% {
    transform: rotate(135deg) skewX(25deg) skewY(0deg);
  }
  100% {
    transform: rotate(139deg) skewX(25deg) skewY(0deg);
  }
}
.ear.left{
  animation: ear_left 2s infinite linear 0s;
}
.ear.right{
  animation: ear_right 2s infinite linear 0s;
}`
export default string