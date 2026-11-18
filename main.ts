controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Ready) {
        man1.vy = -115
    }
})
let projectile: Sprite = null
let man1: Sprite = null
let Ready = false
Ready = false
game.showLongText("Make a One Button Game", DialogLayout.Full)
game.showLongText("You are only allowed the A Button", DialogLayout.Full)
game.showLongText("Make it fun, make it creative!", DialogLayout.Full)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999111111111119999999999999999999999999999999999999991111999999999999999999999999999999999999999999111111111111
    99999999999999999999999999999999999999999999999999991ddddddddd19999999999999999999999999991111199999991dd11999999999999999999999999999999999999999991dddddddddd1
    99999999999999999999999999999911111999999999999999991ddddddddd19999999999999999999999999991ddd199999991ddd1999999999999999999991111999999999999999991dddddddddd1
    9999999999999999999999999999911ddd1199999999999999991d11dddddd19999999999999999999999999111ddd111999911ddd1199999999999999999911dd1199999999999999991dd1d1ddddd1
    999999999999999999999999999911ddddd199999999999999991ddddddd1d199999999111999999111111191ddddddd199991ddddd19999999999999999111dddd199999999999999991dddddd11dd1
    99999911119999999999999999991dddddd199911199999999991ddddddddd1999999911d19999991ddddd191ddddddd199911ddddd119999999999999991dddddd199911119999999991dddddddddd1
    9999991dd19999999999999999991ddd1d119991d199999999991ddddddddd199999991dd19999991ddddd191ddddddd199911ddddd119999999999999991ddd1d119991dd19999999991dddd1ddddd1
    1111111dd19111111991111111111dddddd19111d111999999991ddddddd1d111111111dd19999991ddddd111d11dddd19111ddddddd11111991111111111dddddd19911dd11999999991ddddddd1dd1
    d11dddddd191d1dd1991ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd199999911dd1dd11ddddddd191dddddddddd1dd1991ddddddddddddd1d1111dddd1191111111dddddd11ddd
    dddd1dddd191dddd19911d1dd1ddddddddd111ddddd111dd1dd11ddddddddd11dddd1d1dd11111111dddddd11dd1dddd191ddddddddddddd1991dd1ddd1dddddddd1111dddd1191d11dd1ddddddddddd
    ddddddddd111dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11ddddddddddddddd191ddddddddddd1d1111dddddddddddddddd11dddddd111ddddddddddddddddd
    d11d1dddd1ddddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd1111ddddddd1ddd11dd1ddddddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddddddddd
    ddddddddd1ddddddd1dddddddddddddddddddd1dddddd11ddddddddddddddddddddddddddddd1ddd1ddddddddddddddd1d1ddddddddddddddd1dddddddddddddddddddddddddd1dddddddddddddddddd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc
    11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc
    11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbb3bbbbebbcccccccccccccccccbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbb2bbeb5bb3bbbbcccbbbbbbbbebbbbbbbbbcbbbbbcecccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbb2bbbb5bbbbcbbbbb3bbbb5bbbbbb3bbcbbbbbb5b3bbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccb
    bbbbbbbbbbbbbbbbccbbbb2bbbbbbbbebb8bbccb3bbbbb2bbbbbbbb3ccccccccccccccccccccccccccc3cccccc3cbbbbbbbbbbbccc3cccbbbbbbbb3bbbbbbbebcbbbbbbbb3bbbbbbecbbbbbb3bbbbbbb
    bbbbbbbbbbbbbb3bbcbbbb2bbbbbbbb7bbbbbbcb5bbbbb2bbb33bbb5bbbbbbbbbbbb3bbbebbbebbcbbb5bbebbb5bcccccccccccbbb2bbbbbcbb3bb2bbb3bbb7bcbbbb3bbb2bbbbbb2cbbbbbb23bbeb3b
    bbbbbbbbbb3bbb7bbbcbbbbbbbbbbbbbbbbbbbbcbbbbbb2bbb75bbbbbbbb5bbbb3bb2bbb5bbb5bbcbbbbbb2bebbbbbbcbbbbbbbbbbbbbbb3cbb5bbbeeb5bbbbbcbbbb2bbbbbbbbebbcbbbbbbb5bb2b8b
    bbbbbbbbbb2bbbbbbbcbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbcebbb32bb2bbbbbbbbbbcbbbbebbb5bbbbbbcbbbb3bbbebbb3bb5bcbbbbbeebbbbbbbcbbbbbbbbbbbbb5bbbcbbbbbbbbbbebb
    bbbbbbebbb2bbbbbbbcbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbc7bbb5bbbbbbebbbbbbbcbbbb5bbbbbbbbbbbcbbb7bbb5bbb7bbbbbcbbbb22bbbbbbbbcbbbbbbbbbbbbbbbbcbbbbb22bbb8bb
    bbb3bb5bbbbbbbbbbbcbbbbbbbbbbbbbbb33bbbbbcbbbbbbbbbbbbbbbbbcbbbbbbbbbbb7bbbbbbbbcbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbcbbb22bbbbbbbbbcbbbbbbbbbbbbbbbccbbbb22bbbbbb
    bbb8bb5bbbbbbbbbbbbccbbbbbb33bbbbb33bbbbbcbbbbbbbbbbbbb3bbbbcbbbbbbbbbbbbbbb3bbbcbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbcbbb22bbbbbbbbbcbbbbbbbbbbbbbbbbcbbbb22bbb33b
    bbb8bb5bbbbbbbbbbbbbcbbbbbb33bbbbb55bbbbbbcbbbbbbbbbbbb5bbbbcbbbbbbbbbbbbbbb7bbbbcbbbbbbbbbbbbbbbcbbbbbbbbbbbbbebbbbcbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbccbbb22bbb33b
    bbb8bbbbbbbbbbbbbbbbcbbbbbb22bbbbb55bbbbbbcbbbbb3bbbbbb5bbbbcbbbbbb8bbbbbbbb7bbbbcbbbbbbbbbbbbbbbcbbbbbbbbbbbbb8bbbbbcbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbccbbbbbbb88b
    bbbbbbbbbb3bbbbbbbbbcbbbbbb22bbbbb55bbbbbbccbbbb8bbbbbb5bbbbbcbbbbb8bbbbbbbb7bbbbbcbbbbbbbeebbbbbbcbbbbbbbbbbbb8bbbbbcbbbbbbbbbbb3bccbbbbbbbbbbbbbbbbcbbbbbbb88b
    bbbbbbbbbb7bbbbbbbbbcbbbbbb22bbbbbbbbbbbbbbcbbbb8bbbbbbbbbbbbcbbbbb8bbbbbbbbbbbbbbbcbbbbbbeebbbbbbbccbbbbbbbbbbbbbbbbcbbbbbbbbbbb7bbcbbbbb3bbbbbbbbbbbcbbbbbb88b
    bbbbeebbbb7bbbbbbbbbbcbbbbbb33bbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbccbbbb22bbbbbbbbcbbbbbbbbbbbbbbbbbcbbbbeebbbb7bbbcbbbb7bbbbbbbbbbbbcbbbbb88b
    bbbbeebbbb7bbbbbbbbbbcbbbbbb33bbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbcbbbb22bbeebbbbbcbbbbbbbbbbbbbbbbcbbbbeebbbb7bbbbcbbb7bbbbbbbbbbbbcbbbbbbbb
    bbbbeebbbbbbbbeebbbbbcbbbbbb88bbbbbb33bbbbbcbbbbbebbbbbbbbbbbbbcbbbbbbbbbbbbb3bbbbbbbbcbbb22bbeebbbbbcbbbbbbbbbbb33bbbbcbbb88bbb33bbbbbcbbbbbbbbeebbbbbcbbbbbbbb
    bbbb22bbbbbbbbeebbbbbbcbbbbb88bbbbbb33bbbbbbcbbbb5bbbbbbb33bbbbcbb33bbbbbbbbb5bbbbbbbbbcbbbbbb77bbbbbbcbbbbbbbbbb33bbbbbcbb88bbb33bbbbbcbbbbbbbbeebbbbbbccbbbbbb
    b33b22bbbbbbbb55bbbbbbcbbbbb88bbbbbb55bbbbbbcbbbb5bbbbbbb33bbbbcbb33bbbbbbbbb5bbbbbbbbbcbbbbbb77bb33bbbcbbbbbbbbb55bbbbbbcb88bbb55bbbbbbcbbbbbbb22bbbbbbbcbbbbbb
    b33b22bbbbbbbb55bbbbbbcbbbbb88bbbbbb55bbbbbbcbbbb5bbbbbbb22bbbbbcb55bbbbbbbbbbbb33bbbbbcbbbbbb77bb33bbbbccbbbbbbb55bbbbbbbccbbbb55bbbbbbcbbbbbbb22bbbbbbbbcbbbbb
    b22b22bbbbbbbb55bbbbbbcbbbbbbbbbbbbb55bbbbbbcbbbbbbbbbbbb22bbbbbcb55bbbbbbbbbbbb33bbbbbbcbbbbbbbbb55bbbbbcbbbbbbb55bbbbbbbbccbbb55bbbbbbccbbbbbb22bbbbbbbbbccbbb
    b22bbbbbbbbbbb55bbbbbbbcbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbb22bbbbbbc55bbbbbbbbbbbb77bbbbbbcbbbbbbbbb55bbbbbbcbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbccbbbbbbbbbbbbbbbbbcbbb
    b22bbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbb77bbbbbbbcbbbbbbbb55bbbbbbcbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbccbbbbbbbbbbbbbbbbcbbb
    b22bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbb77bbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbcbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555ddd1111111111111ddddddddddddddddddddddddddddddddddddddd
    dd58885555555555555555555ddddddddddddddddddddddddddddddd88888888888888888888888888888dd555775557577555555ddd11ffffffff111ddd22222222222222222ddddddddddddddddddd
    dd58885555555555555555555ddddd777777777777777777777ddddd88999988898888888999888888888dd557777577777777777ddd11f11ff11ff11ddd2ddddddddddddddd2ddddddddddddddddddd
    dd58885555555555555555555ddddd444747774447474777777ddddd88889999988888899988998888888dd555557755555555565ddd11111ff111f11ddd2ddddddddddddddd2ddddddddddddddddddd
    dd58885555555555555555555ddddd777477747444777447777ddddd88888899888889998899999999888dd555555555555555555ddd111ffffff1111ddd2ddddddddddddddd2ddddddddddddddddddd
    dd58885555555555555555555ddddd777477777447777777774ddddd88888988889889899888898888888dd555656666666555665ddd111ffffff1111ddd2ddddddddddddddd2ddddddddddddddddddd
    dd58885555555555555555555ddddd777747474444444444777ddddd88989999999999888888898988888dd556665665655655655ddd111fffff11111ddd2ddddddddddddddd2ddddddddddddddddddd
    dd58885555555555555555555ddddd777777474444744444477ddddd88889988888989999999999988888dd555565666556665555ddd1111ffff11111ddd2ddddddddddddddd2ddddddddddddddddddd
    dd58885555555555555555555ddddd777777777744777777777ddddd88988888889988888888899888888dd555555565666665555ddd11111fff11111ddd22222222222222222ddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555556665555555555ddd111111f111111ddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555566666665555ddd1111111111111ddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555555555ddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d
    11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    1111111111111111111111111111dddd111111db1111111111111111111111111111dddd11111ddb1111111111111111111111111111dddd11111d1111111111111111111d1111111111dddd11111ddb
    1111111111111111bd111111111111d1d1111111111111111111111111d11111111111d1d11111dd111111111111111111111111111111d1d111111111111111111111111dd11111111111d1d11111dd
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    `)
man1 = sprites.create(img`
    . . . . 2 2 2 2 2 e . . . . . . 
    . . . 2 2 2 2 d 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 e f f c c . . . 
    . . e e 2 2 e f f f f b c . . . 
    . e e e f e 2 b f f f d c . . . 
    e e 2 2 d f 2 1 1 1 1 b c . . . 
    e e 2 2 d f e e c c c . . . . . 
    b 1 1 d e 2 2 e e c . . . . . . 
    . f f e 2 2 2 2 e . . . . . . . 
    . . f f d d 2 2 f f d d . . . . 
    . . f f d d e e f f d d . . . . 
    . . . f f f f . . . . . . . . . 
    . . e e e f f f . . . . . . . . 
    . . e e e e f f f . . . . . . . 
    `, SpriteKind.Player)
Ready = false
man1.setPosition(46, 79)
animation.runImageAnimation(
man1,
[img`
    . . . . 2 2 2 2 2 e . . . . . . 
    . . . 2 2 2 2 d 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 e f f c c . . . 
    . . e e 2 2 e f f f f b c . . . 
    . e e e f e 2 b f f f d c . . . 
    e e 2 2 d f 2 1 1 1 1 b c . . . 
    e e 2 2 d f e e c c c . . . . . 
    b 1 1 d e 2 2 e e c . . . . . . 
    . f f e 2 2 2 2 e . . . . . . . 
    . . f f d d 2 2 f f d d . . . . 
    . . f f d d e e f f d d . . . . 
    . . . f f f f . . . . . . . . . 
    . . e e e f f f . . . . . . . . 
    . . e e e e f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 e . . . . 
    . . . . . 2 2 2 2 d 2 2 e . . . 
    . . . . e 2 2 2 2 2 2 2 e . . . 
    . . . . e 2 2 2 2 2 2 2 e . . . 
    . . . . e 2 2 2 2 2 e f f c c . 
    . . . . e e 2 2 e f f f f b c . 
    . . . e e e f e 2 b f f f d c . 
    . . e e 2 2 d f 2 1 1 1 1 b c . 
    . . e e 2 2 d f e e c c c . . . 
    . . b 1 1 d e 2 e e c . . . . . 
    . . f f f f d d f . . . . . . . 
    f f f f f f d d . . . . . . . . 
    f f f . f f f e . . . . . . . . 
    f f . . . . e e e . . . . . . . 
    . . . . . . e e e e . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 e . . . . 
    . . . . . 2 2 2 2 d 2 2 e . . . 
    . . . . e 2 2 2 2 2 2 2 e . . . 
    . . . . e 2 2 2 2 2 2 2 e . . . 
    . . . . e 2 2 2 2 2 e f f c c . 
    . . . . e e 2 2 e f f f f b c . 
    . . e e e f e 2 2 b f f f d c . 
    . e e 2 2 d f e 2 1 1 1 1 b c . 
    . e e 2 2 d f e e e c c c . . . 
    . b 1 1 e e 2 2 e e c . . . . . 
    . . f d d 2 2 2 f f f d d . . . 
    e e f d d e e e . f f d d . . . 
    e e e f f f f f . . . . . . . . 
    e e . . . . f f f . . . . . . . 
    . . . . . . f f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 2 2 e . . . 
    . . . . . . 2 2 2 2 d 2 2 e . . 
    . . . . . e 2 2 2 2 2 2 2 e . . 
    . . . . . e 2 2 2 2 2 2 2 e . . 
    . . . . . e 2 2 2 2 2 e f f c c 
    . . . . . e e 2 2 e f f f f b c 
    . . . e e e f e 2 2 b f f f d c 
    . . e e 2 2 d f e 2 1 1 1 1 b c 
    . . e e 2 2 d f e e e c c c . . 
    . . b 1 1 d e 2 2 e e c . . . . 
    . . . f f f d d 2 2 f d d . . . 
    . . . . f f d d e e f d d . . . 
    . . . . . f f f f f . . . . . . 
    . . . . e e e f f . . . . . . . 
    . . . . e e e e f f . . . . . . 
    `],
200,
true
)
man1.ay = 150
Ready = true
game.onUpdateInterval(2000, function () {
    if (true) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . d d d . . . . . . . . . . . . 
            . d d d d d d d . . . . . . . . 
            . d b . d d d d d d d d . . . . 
            . d b . . . . d d d d d d d d . 
            . d b . . . . . . . . d d d d . 
            . d b . . . . . . . . . . d d . 
            . d b . . . . . . . . . . d d . 
            d d b b . . . . . . . . . d d . 
            d d b b . . . . . . . . . d d . 
            d d d d d . . . . . . . . d d . 
            . . . . . . . . . . . . d d d b 
            . . . . . . . . . . . . d d d b 
            . . . . . . . . . . . d d d d d 
            `, -50, 0)
        projectile.setPosition(160, 100)
    }
})
