function changeimage(){
    game1 = document.getElementById("game1")
    game2 = document.getElementById("game2")

    images = ['https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png',
    'https://image.api.playstation.com/vulcan/ap/rnd/202111/2001/9Vdas199J3tqxTIBWGijbpjW.png?w=440',
'https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png',
'https://image.api.playstation.com/vulcan/ap/rnd/202106/2322/c16gs6a7lbAYzPf7ZTikbH1c.png',
'https://image.api.playstation.com/cdn/EP4040/CUSA03364_00/y03CmB2TcDiq8h0BThxNeQCWcgvo4kxR.png',
'https://image.api.playstation.com/cdn/EP0006/CUSA00049_00/ICcPzCS2XUjvKTCFJ6VIXpZrqF99NUSG.png',
'https://image.api.playstation.com/cdn/EP4062/CUSA06638_00/0fSaYhFhEVP183JLTwVec7qkzmaHNMS2.png',
'https://image.api.playstation.com/cdn/UP0001/CUSA04459_00/qBxvfDJJ9dbavai6xsWOcWaxRDGRb7h0.png',
'https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/C784xeOFo2wViCf4m5bxgoeH.png',
'https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png',
'https://image.api.playstation.com/vulcan/ap/rnd/202009/0323/7Cwm55w1Sf7UgZwARdoi6eQC.png',
'https://image.api.playstation.com/vulcan/ap/rnd/202203/1409/oltI7Zc96usbdvhVVXcV1EAi.png',
'https://image.api.playstation.com/cdn/EP1004/CUSA03551_00/Gu40LOkXyjMm7qGhoZxHZfK5Adp4xpiM.png',
'https://image.api.playstation.com/vulcan/img/rnd/202105/1714/WHeOu95nW2SZQy6H5IKgE2Bg.png']

    random1 = Math.floor(Math.random() * images.length);
    random2 = Math.floor(Math.random() * images.length);

    game1.src = images[random1]
    game2.src = images[random2]


}