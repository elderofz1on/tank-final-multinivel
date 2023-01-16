namespace SpriteKind {
    export const PC_projectile = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.startEffect(effects.ashes, 500)
    tiles.placeOnRandomTile(sprite, assets.tile`transparency16`)
    enemy_direction(sprite)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction != -100) {
        mySprite2.setImage(img`
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . 5 5 . . 5 5 . . 5 5 . . . 
            . . . f 5 5 5 5 5 5 5 5 f . . . 
            . . . 5 5 5 f 5 5 f 5 5 5 . . . 
            . . . f 5 f f 5 5 f f 5 f . . . 
            . . . 5 5 f 5 5 5 5 f 5 5 . . . 
            . . . f 5 f 5 5 5 5 f 5 f . . . 
            . . . 5 5 f f 5 5 f f 5 5 . . . 
            . . . f 5 5 f f f f 5 5 f . . . 
            . . . 5 5 5 5 f f 5 5 5 5 . . . 
            . . . f 5 . 5 5 5 5 . 5 f . . . 
            . . . 5 5 . . . . . . 5 5 . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    direction = -100
})
function setMap () {
    if (currentLevel == 0) {
        tiles.setCurrentTilemap(tilemap`L1`)
    } else if (currentLevel == 1) {
        tiles.setCurrentTilemap(tilemap`L2`)
    } else if (currentLevel == 2) {
        tiles.setCurrentTilemap(tilemap`L3`)
    } else if (currentLevel == 3) {
        tiles.setCurrentTilemap(tilemap`L4`)
    } else if (currentLevel == 4) {
        tiles.setCurrentTilemap(tilemap`L5`)
    } else if (currentLevel == 5) {
        tiles.setCurrentTilemap(tilemap`L6`)
    } else if (currentLevel == 7) {
        tiles.setCurrentTilemap(tilemap`L7`)
    } else if (currentLevel == 8) {
        tiles.setCurrentTilemap(tilemap`L8`)
    } else if (currentLevel == 9) {
        tiles.setCurrentTilemap(tilemap`L9`)
    } else if (currentLevel == 10) {
        tiles.setCurrentTilemap(tilemap`L10`)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.pewPew.play()
    if (Math.abs(direction) < 200) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 3 . . . . . . . 
            . . . . . . . 3 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite2, 0, direction)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 3 . . . . . . . 
            . . . . . . . 3 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite2, direction, 0)
    }
})
function enemy_direction (mySprite: Sprite) {
    if (Math.percentChance(50)) {
        if (Math.percentChance(50)) {
            mySprite.setImage(img`
                . . . . . . 2 2 2 2 . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . 1 1 . . 1 1 . . 1 1 . . . 
                . . . f 1 2 1 1 1 1 2 1 f . . . 
                . . . 1 1 1 2 1 1 2 1 1 1 . . . 
                . . . f 1 1 f 2 2 f 1 1 f . . . 
                . . . 1 1 f 2 f f 2 f 1 1 . . . 
                . . . f 1 f 2 f f 2 f 1 f . . . 
                . . . 1 1 1 f 2 2 f 1 1 1 . . . 
                . . . f 1 1 2 1 1 2 1 1 f . . . 
                . . . 1 1 2 1 1 1 1 2 1 1 . . . 
                . . . f 1 . 1 1 1 1 . 1 f . . . 
                . . . 1 1 . . . . . . 1 1 . . . 
                . . . . . . . . . . . . . . . . 
                `)
            mySprite.setVelocity(0, randint(10, 30))
            mySprite.image.flipY()
            enemy_directions_list[enemy_sprite_list.indexOf(mySprite)] = 100
        } else {
            mySprite.setImage(img`
                . . . . . . 2 2 2 2 . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . 1 1 . . 1 1 . . 1 1 . . . 
                . . . f 1 2 1 1 1 1 2 1 f . . . 
                . . . 1 1 1 2 1 1 2 1 1 1 . . . 
                . . . f 1 1 f 2 2 f 1 1 f . . . 
                . . . 1 1 f 2 f f 2 f 1 1 . . . 
                . . . f 1 f 2 f f 2 f 1 f . . . 
                . . . 1 1 1 f 2 2 f 1 1 1 . . . 
                . . . f 1 1 2 1 1 2 1 1 f . . . 
                . . . 1 1 2 1 1 1 1 2 1 1 . . . 
                . . . f 1 . 1 1 1 1 . 1 f . . . 
                . . . 1 1 . . . . . . 1 1 . . . 
                . . . . . . . . . . . . . . . . 
                `)
            mySprite.setVelocity(0, randint(-30, -10))
            enemy_directions_list[enemy_sprite_list.indexOf(mySprite)] = -100
        }
    } else if (Math.percentChance(50)) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 1 f 1 f 1 f 1 f 1 f 1 . . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
            . . . 2 1 1 f f 1 1 2 . . . . . 
            . . 1 1 2 f 2 2 f 2 1 . . 1 1 2 
            . . 1 1 1 2 f f 2 1 1 1 1 1 1 2 
            . . 1 1 1 2 f f 2 1 1 1 1 1 1 2 
            . . 1 1 2 f 2 2 f 2 1 . . 1 1 2 
            . . . 2 1 1 f f 1 1 2 . . . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
            . 1 f 1 f 1 f 1 f 1 f 1 . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite.setVelocity(randint(10, 30), 0)
        enemy_directions_list[enemy_sprite_list.indexOf(mySprite)] = 200
    } else {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 1 f 1 f 1 f 1 f 1 f 1 . . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
            . . . 2 1 1 f f 1 1 2 . . . . . 
            . . 1 1 2 f 2 2 f 2 1 . . 1 1 2 
            . . 1 1 1 2 f f 2 1 1 1 1 1 1 2 
            . . 1 1 1 2 f f 2 1 1 1 1 1 1 2 
            . . 1 1 2 f 2 2 f 2 1 . . 1 1 2 
            . . . 2 1 1 f f 1 1 2 . . . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
            . 1 f 1 f 1 f 1 f 1 f 1 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite.image.flipX()
        mySprite.setVelocity(randint(-30, -10), 0)
        enemy_directions_list[enemy_sprite_list.indexOf(mySprite)] = -200
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction != -200) {
        mySprite2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 5 f 5 f 5 f 5 f 5 f 5 . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 f f f f 5 5 . . . . . 
            . . 5 5 f f 5 5 f f 5 . . . 5 5 
            . . 5 f f 5 5 5 5 5 5 5 5 5 5 5 
            . . 5 f f 5 5 5 5 5 5 5 5 5 5 5 
            . . 5 5 f f 5 5 f f 5 . . . 5 5 
            . . . 5 5 f f f f 5 5 . . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
            . 5 f 5 f 5 f 5 f 5 f 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite2.image.flipX()
    }
    direction = -200
})
scene.onHitWall(SpriteKind.Enemy, function (sprite3, location) {
    enemy_direction(sprite3)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction != 200) {
        mySprite2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 5 f 5 f 5 f 5 f 5 f 5 . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 f f f f 5 5 . . . . . 
            . . 5 5 f f 5 5 f f 5 . . . 5 5 
            . . 5 f f 5 5 5 5 5 5 5 5 5 5 5 
            . . 5 f f 5 5 5 5 5 5 5 5 5 5 5 
            . . 5 5 f f 5 5 f f 5 . . . 5 5 
            . . . 5 5 f f f f 5 5 . . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
            . 5 f 5 f 5 f 5 f 5 f 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    direction = 200
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite4, otherSprite2) {
    if (projectile.overlapsWith(otherSprite2)) {
        otherSprite2.destroy()
        console.log(convertToText(enemy_sprite_list.removeAt(enemy_sprite_list.indexOf(otherSprite2))))
        info.changeScoreBy(1)
        music.zapped.play()
    }
})
function nextLevel () {
    enemy_directions_list = []
    direction = -100
    spawn_time += -500
    enemy_count += 2
    currentLevel += 1
    info.setLife(10)
    setMap()
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction != 100) {
        mySprite2.setImage(img`
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . 5 5 . . 5 5 . . 5 5 . . . 
            . . . f 5 5 5 5 5 5 5 5 f . . . 
            . . . 5 5 5 f 5 5 f 5 5 5 . . . 
            . . . f 5 f f 5 5 f f 5 f . . . 
            . . . 5 5 f 5 5 5 5 f 5 5 . . . 
            . . . f 5 f 5 5 5 5 f 5 f . . . 
            . . . 5 5 f f 5 5 f f 5 5 . . . 
            . . . f 5 5 f f f f 5 5 f . . . 
            . . . 5 5 5 5 f f 5 5 5 5 . . . 
            . . . f 5 . 5 5 5 5 . 5 f . . . 
            . . . 5 5 . . . . . . 5 5 . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite2.image.flipY()
    }
    direction = 100
})
info.onLifeZero(function () {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite2, otherSprite) {
    if (enemy_projectile.overlapsWith(otherSprite)) {
        info.changeLifeBy(-1)
    }
})
let enemy_projectile: Sprite = null
let projectile: Sprite = null
let mySprite2: Sprite = null
let direction = 0
let enemy_directions_list: number[] = []
let enemy_sprite_list: Sprite[] = []
let currentLevel = 0
music.jumpUp.play()
info.setScore(0)
info.setLife(10)
currentLevel = 1
let level = 0
enemy_sprite_list = sprites.allOfKind(SpriteKind.Enemy)
enemy_directions_list = []
let spawn_time = 5500
let enemy_count = 3
direction = -100
let levelMax = 10
mySprite2 = sprites.create(img`
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . 5 5 . . 5 5 . . 5 5 . . . 
    . . . f 5 5 5 5 5 5 5 5 f . . . 
    . . . 5 5 5 f 5 5 f 5 5 5 . . . 
    . . . f 5 f f 5 5 f f 5 f . . . 
    . . . 5 5 f 5 5 5 5 f 5 5 . . . 
    . . . f 5 f 5 5 5 5 f 5 f . . . 
    . . . 5 5 f f 5 5 f f 5 5 . . . 
    . . . f 5 5 f f f f 5 5 f . . . 
    . . . 5 5 5 5 f f 5 5 5 5 . . . 
    . . . f 5 . 5 5 5 5 . 5 f . . . 
    . . . 5 5 . . . . . . 5 5 . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite2)
projectile = sprites.createProjectileFromSide(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 50, 100)
enemy_projectile = sprites.createProjectileFromSide(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 50, 100)
setMap()
game.onUpdateInterval(spawn_time, function () {
    if (enemy_sprite_list.length <= enemy_count) {
        enemy_directions_list.push(200)
        enemy_sprite_list.push(sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 1 f 1 f 1 f 1 f 1 f 1 . . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
            . . . 2 1 1 f f 1 1 2 . . . . . 
            . . 1 1 2 f 2 2 f 2 1 . . 1 1 2 
            . . 1 1 1 2 f f 2 1 1 1 1 1 1 2 
            . . 1 1 1 2 f f 2 1 1 1 1 1 1 2 
            . . 1 1 2 f 2 2 f 2 1 . . 1 1 2 
            . . . 2 1 1 f f 1 1 2 . . . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
            . 1 f 1 f 1 f 1 f 1 f 1 . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy))
    }
})
forever(function () {
    if (info.score() >= 100) {
        game.over(true, effects.confetti)
    }
    level = Math.trunc(info.score() / 10)
    if (level >= currentLevel) {
        nextLevel()
    }
})
game.onUpdateInterval(500, function () {
    for (let value of enemy_sprite_list) {
        if (Math.percentChance(30)) {
            if (Math.abs(enemy_directions_list[enemy_sprite_list.indexOf(value)]) < 200) {
                enemy_projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . a a . . . . . . . 
                    . . . . . . . 5 a . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, value, 0, enemy_directions_list[enemy_sprite_list.indexOf(value)])
            } else {
                enemy_projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . a a . . . . . . . 
                    . . . . . . . 5 a . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, value, enemy_directions_list[enemy_sprite_list.indexOf(value)], 0)
            }
        }
    }
})
