const trinketStages = new Map();
trinketStages.set("artifacts:running_shoes","runningShoes");
trinketStages.set("artifacts:night_vision_goggles","thunderBadge");
ForgeEvents.onEvent("top.theillusivec4.curios.api.event.CurioEquipEvent", event => {
    global.curiosprevent(event);
});
/**
 * 
 * @param {Internal.CurioEquipEvent} event 
 */
global.curiosprevent = event => {
    const { stack, entity } = event
    try{
        if (trinketStages.has(String(stack.id)) && !entity.stages.has(trinketStages.get(String(stack.id)))){
            event.setResult("deny");
        }
    } catch (error) {
        console.log(error)
    }
}
