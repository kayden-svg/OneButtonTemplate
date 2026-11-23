controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Ready) {
        man1.vy = -175
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let myEnemy: Sprite = null
let man1: Sprite = null
let Ready = false
Ready = false
game.showLongText("Make a One Button Game", DialogLayout.Full)
game.showLongText("You are only allowed the A Button", DialogLayout.Full)
game.showLongText("Make it fun, make it creative!", DialogLayout.Full)
tiles.setCurrentTilemap(tilemap`level3`)
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
man1.ay = 430
Ready = true
scene.cameraFollowSprite(man1)
info.setLife(3)
game.onUpdateInterval(2000, function () {
    if (true) {
        myEnemy = sprites.create(img`
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
            `, SpriteKind.Enemy)
        myEnemy.setVelocity(-50, 0)
        myEnemy.setPosition(160, 91)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy, effects.none, 5000)
    }
})
