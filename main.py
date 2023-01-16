@namespace
class SpriteKind:
    PC_projectile = SpriteKind.create()

def on_on_created(sprite):
    sprite.start_effect(effects.ashes, 500)
    tiles.place_on_random_tile(sprite, assets.tile("""
        transparency16
    """))
    enemy_direction(sprite)
sprites.on_created(SpriteKind.enemy, on_on_created)

def on_up_pressed():
    global direction
    if direction != -100:
        mySprite2.set_image(img("""
            . . . . . . . . . . . . . . . . 
                        . . . . . . . 2 2 2 . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . 4 4 . 5 5 5 . 4 4 . . . 
                        . . . . d e b 5 5 5 3 e d . . . 
                        . . . . 4 e b b b b 3 e 4 . . . 
                        . . . . d e b b b 4 3 e d . . . 
                        . . . . 4 e b b 4 4 3 e 4 . . . 
                        . . . . d e b 4 4 4 3 e d . . . 
                        . . . . 4 e 3 3 3 3 3 e 4 . . . 
                        . . . . d e 2 2 2 2 2 e d . . . 
                        . . . . 4 e . . . . . e 4 . . . 
                        . . . . d d . . . . . d d . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . .
        """))
    direction = -100
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_a_pressed():
    global projectile
    if abs(direction) < 200:
        projectile = sprites.create_projectile_from_sprite(img("""
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
            """),
            mySprite2,
            0,
            direction)
    else:
        projectile = sprites.create_projectile_from_sprite(img("""
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
            """),
            mySprite2,
            direction,
            0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def enemy_direction(mySprite: Sprite):
    if Math.percent_chance(50):
        if Math.percent_chance(50):
            mySprite.set_image(img("""
                . . . . . . . . . . . . . . . . 
                                . . . . . . 2 2 2 . . . . . . . 
                                . . . . . . 3 a 3 . . . . . . . 
                                . . . . . . 3 a 3 . . . . . . . 
                                . . . 8 8 . 3 a 3 . 8 8 . . . . 
                                . . . b b a a a a a b b . . . . 
                                . . . 8 8 c a a a c 8 8 . . . . 
                                . . . b b c 3 3 3 c b b . . . . 
                                . . . 8 8 c 3 3 3 c 8 8 . . . . 
                                . . . b b c 3 3 3 c b b . . . . 
                                . . . 8 8 c 3 3 3 c 8 8 . . . . 
                                . . . b b c c c c c b b . . . . 
                                . . . 8 8 . . . . . 8 8 . . . . 
                                . . . b b . . . . . b b . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . .
            """))
            mySprite.set_velocity(0, randint(10, 30))
            mySprite.image.flip_y()
            enemy_directions_list[enemy_sprite_list.index(mySprite)] = 100
        else:
            mySprite.set_image(img("""
                . . . . . . . . . . . . . . . . 
                                . . . . . . 2 2 2 . . . . . . . 
                                . . . . . . 3 a 3 . . . . . . . 
                                . . . . . . 3 a 3 . . . . . . . 
                                . . . 8 8 . 3 a 3 . 8 8 . . . . 
                                . . . b b a a a a a b b . . . . 
                                . . . 8 8 c a a a c 8 8 . . . . 
                                . . . b b c 3 3 3 c b b . . . . 
                                . . . 8 8 c 3 3 3 c 8 8 . . . . 
                                . . . b b c 3 3 3 c b b . . . . 
                                . . . 8 8 c 3 3 3 c 8 8 . . . . 
                                . . . b b c c c c c b b . . . . 
                                . . . 8 8 . . . . . 8 8 . . . . 
                                . . . b b . . . . . b b . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . .
            """))
            mySprite.set_velocity(0, randint(-30, -10))
            enemy_directions_list[enemy_sprite_list.index(mySprite)] = -100
    elif Math.percent_chance(50):
        mySprite.set_image(img("""
            . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . b 8 b 8 b 8 b 8 b 8 . . . . 
                        . . b 8 b 8 b 8 b 8 b 8 . . . . 
                        . . . . c c c c c c a . . . . . 
                        . . . . c 3 3 3 3 a a 3 3 3 2 . 
                        . . . . c 3 3 3 3 a a a a a 2 . 
                        . . . . c 3 3 3 3 a a 3 3 3 2 . 
                        . . . . c c c c c c a . . . . . 
                        . . b 8 b 8 b 8 b 8 b 8 . . . . 
                        . . b 8 b 8 b 8 b 8 b 8 . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . .
        """))
        mySprite.set_velocity(randint(10, 30), 0)
        enemy_directions_list[enemy_sprite_list.index(mySprite)] = 200
    else:
        mySprite.set_image(img("""
            . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . b 8 b 8 b 8 b 8 b 8 . . . . 
                        . . b 8 b 8 b 8 b 8 b 8 . . . . 
                        . . . . c c c c c c a . . . . . 
                        . . . . c 3 3 3 3 a a 3 3 3 2 . 
                        . . . . c 3 3 3 3 a a a a a 2 . 
                        . . . . c 3 3 3 3 a a 3 3 3 2 . 
                        . . . . c c c c c c a . . . . . 
                        . . b 8 b 8 b 8 b 8 b 8 . . . . 
                        . . b 8 b 8 b 8 b 8 b 8 . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . .
        """))
        mySprite.image.flip_x()
        mySprite.set_velocity(randint(-30, -10), 0)
        enemy_directions_list[enemy_sprite_list.index(mySprite)] = -200

def on_left_pressed():
    global direction
    if direction != -200:
        mySprite2.set_image(img("""
            . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . d 4 d 4 d 4 d 4 d 4 . . . . 
                        . . d e e e e e e e e 4 . . . . 
                        . . . . 2 3 b b b b b . . . . . 
                        . . . . 2 3 4 b b b 5 5 5 5 2 . 
                        . . . . 2 3 4 4 b b 5 5 5 5 2 . 
                        . . . . 2 3 4 4 4 b 5 5 5 5 2 . 
                        . . . . 2 3 3 3 3 3 3 . . . . . 
                        . . d e e e e e e e e 4 . . . . 
                        . . d 4 d 4 d 4 d 4 d 4 . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . .
        """))
        mySprite2.image.flip_x()
    direction = -200
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_hit_wall(sprite3, location):
    enemy_direction(sprite3)
scene.on_hit_wall(SpriteKind.enemy, on_hit_wall)

def on_right_pressed():
    global direction
    if direction != 200:
        mySprite2.set_image(img("""
            . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . d 4 d 4 d 4 d 4 d 4 . . . . 
                        . . d e e e e e e e e 4 . . . . 
                        . . . . 2 3 b b b b b . . . . . 
                        . . . . 2 3 4 b b b 5 5 5 5 2 . 
                        . . . . 2 3 4 4 b b 5 5 5 5 2 . 
                        . . . . 2 3 4 4 4 b 5 5 5 5 2 . 
                        . . . . 2 3 3 3 3 3 3 . . . . . 
                        . . d e e e e e e e e 4 . . . . 
                        . . d 4 d 4 d 4 d 4 d 4 . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . .
        """))
    direction = 200
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_overlap(sprite4, otherSprite2):
    if projectile.overlaps_with(otherSprite2):
        otherSprite2.destroy()
        print(convert_to_text(enemy_sprite_list.remove_at(enemy_sprite_list.index(otherSprite2))))
        info.change_score_by(1)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap)

def on_down_pressed():
    global direction
    if direction != 100:
        mySprite2.set_image(img("""
            . . . . . . . . . . . . . . . . 
                        . . . . . . . 2 2 2 . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . 4 4 . 5 5 5 . 4 4 . . . 
                        . . . . d e b 5 5 5 3 e d . . . 
                        . . . . 4 e b b b b 3 e 4 . . . 
                        . . . . d e b b b 4 3 e d . . . 
                        . . . . 4 e b b 4 4 3 e 4 . . . 
                        . . . . d e b 4 4 4 3 e d . . . 
                        . . . . 4 e 3 3 3 3 3 e 4 . . . 
                        . . . . d e 2 2 2 2 2 e d . . . 
                        . . . . 4 e . . . . . e 4 . . . 
                        . . . . d d . . . . . d d . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . .
        """))
        mySprite2.image.flip_y()
    direction = 100
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_life_zero():
    game.over(False, effects.melt)
info.on_life_zero(on_life_zero)

def on_on_overlap2(sprite2, otherSprite):
    if enemy_projectile.overlaps_with(otherSprite):
        info.change_life_by(-1)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.player, on_on_overlap2)

enemy_projectile: Sprite = None
projectile: Sprite = None
mySprite2: Sprite = None
direction = 0
enemy_directions_list: List[number] = []
enemy_sprite_list: List[Sprite] = []
tiles.set_current_tilemap(tilemap("""
    level0
"""))
info.set_life(3)
info.set_score(0)
enemy_sprite_list = sprites.all_of_kind(SpriteKind.enemy)
enemy_directions_list = []
spawn_time = 5500
enemy_count = 3
direction = -100
mySprite2 = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . 4 4 . 5 5 5 . 4 4 . . . 
            . . . . d e b 5 5 5 3 e d . . . 
            . . . . 4 e b b b b 3 e 4 . . . 
            . . . . d e b b b 4 3 e d . . . 
            . . . . 4 e b b 4 4 3 e 4 . . . 
            . . . . d e b 4 4 4 3 e d . . . 
            . . . . 4 e 3 3 3 3 3 e 4 . . . 
            . . . . d e 2 2 2 2 2 e d . . . 
            . . . . 4 e . . . . . e 4 . . . 
            . . . . d d . . . . . d d . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.player)
controller.move_sprite(mySprite2)
projectile = sprites.create_projectile_from_side(img("""
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
    """),
    50,
    100)
enemy_projectile = sprites.create_projectile_from_side(img("""
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
    """),
    50,
    100)

def on_update_interval():
    if len(enemy_sprite_list) <= enemy_count:
        enemy_directions_list.append(200)
        enemy_sprite_list.append(sprites.create(img("""
                    . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . b 8 b 8 b 8 b 8 b 8 . . . . 
                                . . b 8 b 8 b 8 b 8 b 8 . . . . 
                                . . . . c c c c c c a . . . . . 
                                . . . . c 3 3 3 3 a a 3 3 3 2 . 
                                . . . . c 3 3 3 3 a a a a a 2 . 
                                . . . . c 3 3 3 3 a a 3 3 3 2 . 
                                . . . . c c c c c c a . . . . . 
                                . . b 8 b 8 b 8 b 8 b 8 . . . . 
                                . . b 8 b 8 b 8 b 8 b 8 . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . .
                """),
                SpriteKind.enemy))
game.on_update_interval(spawn_time, on_update_interval)

def on_forever():
    if info.score() >= 10:
        game.over(True, effects.confetti)
forever(on_forever)

def on_update_interval2():
    global enemy_projectile
    for value in enemy_sprite_list:
        if Math.percent_chance(30):
            if abs(enemy_directions_list[enemy_sprite_list.index(value)]) < 200:
                enemy_projectile = sprites.create_projectile_from_sprite(img("""
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
                    """),
                    value,
                    0,
                    enemy_directions_list[enemy_sprite_list.index(value)])
            else:
                enemy_projectile = sprites.create_projectile_from_sprite(img("""
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
                    """),
                    value,
                    enemy_directions_list[enemy_sprite_list.index(value)],
                    0)
game.on_update_interval(500, on_update_interval2)
