namespace SpriteKind {
    export const coin = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jellyfish.vy == 0) {
        jellyfish.vy = -175
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile1`, function (sprite, location) {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    count += 1
    game.over(true, effects.starField)
})
function startlevel () {
    let level = 0
    scene.setBackgroundColor(12)
    count = 0
    for (let index = 0; index <= 10 + level; index++) {
        foood = 0
    }
    jellyfish.say("level" + level, 1000)
}
let foood = 0
let jellyfish: Sprite = null
let count = 0
scene.setBackgroundColor(7)
effects.confetti.startScreenEffect()
if (count == 0) {
    tiles.setTilemap(tilemap`level3`)
} else {
    tiles.setTilemap(tilemap`level4`)
}
jellyfish = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 . 3 . . 3 . 3 . . . . 
    . . . 3 . . . 3 . . 3 . . . . . 
    . . . . 3 . 3 . . 3 . 3 . . . . 
    . . . 3 . . . 3 . . 3 . . . . . 
    . . . . 3 . 3 . . 3 . 3 . . . . 
    . . . 3 . . . 3 . . 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(jellyfish, 100, 0)
jellyfish.ay = 350
scene.cameraFollowSprite(jellyfish)
for (let value of tiles.getTilesByType(assets.tile`tile3`)) {
    foood = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coin)
    tiles.placeOnTile(foood, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
