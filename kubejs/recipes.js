
ServerEvents.recipes(event => {
    event.replaceInput(
        { id: 'minecraft:spyglass' },
        'minecraft:amethyst_shard',
        'cobblemon:moon_stone'
    )
    event.remove({ id: 'pasturecollector:pasture_collector' })
    event.shaped(
        "pasturecollector:pasture_collector", // arg 1: output
        [
            'AAA',
            'A A', // arg 2: the shape (array of strings)
            'ABA'
        ],
        {
            A: 'immersiveengineering:ingot_steel',
            B: 'immersiveengineering:storage_steel',  //arg 3: the mapping object
        }
    )
    event.remove({ id: 'immersiveengineering:blastfurnace/steel' })
    event.remove({ id: 'immersiveengineering:blastfurnace/steel_block' })
    event.custom({
        type: 'immersiveengineering:blast_furnace',
        input: { item: "kubejs:protosteel_ingot" },
        result: { tag: "forge:ingots/steel" },
        slag: { tag: "forge:slag" },
        time: 1200
    })
    event.custom({

        type: "immersiveengineering:arc_furnace",
        additives: [
        {
            tag: "forge:dusts/coal_coke"
        }
        ],
        energy: 204800,
        input: { item: "kubejs:protosteel_ingot" },
        results: [
        {
            tag: "forge:ingots/steel"
        }
        ],
        slag: {
        tag: "forge:slag"
        },
        time: 400
    })
    event.remove({ id: 'immersiveengineering:arcfurnace/steel' })
    function for_nonwhite_color(lambda) {
        lambda("light_gray")
        lambda("gray")
        lambda("black")
        lambda("brown")
        lambda("red")
        lambda("orange")
        lambda("yellow")
        lambda("lime")
        lambda("green")
        lambda("cyan")
        lambda("light_blue")
        lambda("blue")
        lambda("purple")
        lambda("magenta")
        lambda("pink")
    }
    function redye(output, input) {
        for_nonwhite_color((color) => {
            event.shapeless("minecraft:" + color + "_" + output,
                [
                    input,
                    "minecraft:" + color + "_dye"
                ]
            )
        })
    }
    redye("glazed_terracotta", "minecraft:white_glazed_terracotta")
    redye("banner", "minecraft:white_banner")
    redye("concrete", "minecraft:white_concrete")
    redye("concrete_powder", "minecraft:white_concrete_powder")
    for_nonwhite_color((color) => {
        event.shapeless("minecraft:white_glazed_terracotta",
            [
                "minecraft:" + color + "_glazed_terracotta",
                "supplementaries:soap"
            ]
        )
    })
})
