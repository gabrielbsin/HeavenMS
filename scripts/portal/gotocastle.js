function enter(pi) {
	if (pi.isQuestActive(2324)) {
            var player = pi.getPlayer();
            player.gainExp(3300 * player.getExpRate());
            
	    pi.forceCompleteQuest(2324);
	    pi.removeAll(2430015);
	    pi.playerMessage(5, "Quest complete.");
	}
	pi.playPortalSound(); pi.warp(106020501,0);
	return true;
}