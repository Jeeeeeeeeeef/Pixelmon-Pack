package io.github.Jeeeeeeeeeef.pixelretweaked.integration.ftbquests;

import io.github.Jeeeeeeeeeef.pixelretweaked.integration.ftbquests.tasks.PokeDollarsTask;
import dev.ftb.mods.ftbquests.client.ClientQuestFile;
import dev.ftb.mods.ftbquests.quest.TeamData;
import net.minecraft.client.Minecraft;

import java.math.BigDecimal;

public class TaskUtils {

    public static void updateClientPokedollars(BigDecimal amount) {
        Minecraft m = Minecraft.getInstance();
        TeamData data = ClientQuestFile.INSTANCE.getOrCreateTeamData(m.player);
        m.close();
        ClientQuestFile.INSTANCE.collect(PokeDollarsTask.class).forEach(task -> {
            data.setProgress(task, amount.intValue());
        });

    }
}
