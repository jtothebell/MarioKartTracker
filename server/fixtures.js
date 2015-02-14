if (Tracks.find().count() === 0) {
	//Mushroom cup
	Tracks.insert({
		name: 'Toad Circuit',
		cup: 'Mushroom',
		playCount: 0
	});
	Tracks.insert({
		name: 'Daisy Hills',
		cup: 'Mushroom',
		playCount: 0
	});
	Tracks.insert({
		name: 'Cheep Cheep Lagoon',
		cup: 'Mushroom',
		playCount: 0
	});
	Tracks.insert({
		name: 'Shy Guy Bazaar',
		cup: 'Mushroom',
		playCount: 0
	});
	
	//Flower Cup
	Tracks.insert({
		name: 'Wuhu Loop',
		cup: 'Flower',
		playCount: 0
	});
	Tracks.insert({
		name: 'Mario Circuit',
		cup: 'Flower',
		playCount: 0
	});
	Tracks.insert({
		name: 'Music Park',
		cup: 'Flower',
		playCount: 0
	});
	Tracks.insert({
		name: 'Rock Rock Mountain',
		cup: 'Flower',
		playCount: 0
	});
	
	//Star Cup
	Tracks.insert({
		name: 'Pirhana Plant Slide',
		cup: 'Star',
		playCount: 0
	});
	Tracks.insert({
		name: 'Wario Shipyard',
		cup: 'Star',
		playCount: 0
	});
	Tracks.insert({
		name: 'Neo Bowser City',
		cup: 'Star',
		playCount: 0
	});
	Tracks.insert({
		name: 'Maka Wuhu',
		cup: 'Star',
		playCount: 0
	});
	
	//Special Cup
	Tracks.insert({
		name: 'DK Jungle',
		cup: 'Special',
		playCount: 0
	});
	Tracks.insert({
		name: 'Rosalina\'s Ice World',
		cup: 'Special',
		playCount: 0
	});
	Tracks.insert({
		name: 'Bowser\'s Castle',
		cup: 'Special',
		playCount: 0
	});
	Tracks.insert({
		name: 'Rainbow Road',
		cup: 'Special',
		playCount: 0
	});
	
	//Shell
	Tracks.insert({
		name: 'Luigi Raceway (N64)',
		cup: 'Shell',
		playCount: 0
	});
	Tracks.insert({
		name: 'Bowser Castle 1 (GBA)',
		cup: 'Shell',
		playCount: 0
	});
	Tracks.insert({
		name: 'Mushroom Gorge (Wii)',
		cup: 'Shell',
		playCount: 0
	});
	Tracks.insert({
		name: 'Luigi\'s Mansion (DS)',
		cup: 'Shell',
		playCount: 0
	});
	
	//Banana
	Tracks.insert({
		name: 'Koopa Beach (N64)',
		cup: 'Banana',
		playCount: 0
	});
	Tracks.insert({
		name: 'Mario Circuit 2 (SNES)',
		cup: 'Banana',
		playCount: 0
	});
	Tracks.insert({
		name: 'Coconut Mall (Wii)',
		cup: 'Banana',
		playCount: 0
	});
	Tracks.insert({
		name: 'Waluigi Pinball (DS)',
		cup: 'Banana',
		playCount: 0
	});
	
	//Leaf
	Tracks.insert({
		name: 'Kalamari Desert (N64)',
		cup: 'Leaf',
		playCount: 0
	});
	Tracks.insert({
		name: 'DK Pass (DS)',
		cup: 'Leaf',
		playCount: 0
	});
	Tracks.insert({
		name: 'Daisy Cruiser (GCN)',
		cup: 'Leaf',
		playCount: 0
	});
	Tracks.insert({
		name: 'Maple Treeway (Wii)',
		cup: 'Leaf',
		playCount: 0
	});
	
	//Lightning
	Tracks.insert({
		name: 'Koopa Cape (Wii)',
		cup: 'Lightning',
		playCount: 0
	});
	Tracks.insert({
		name: 'Dino Dino Jungle (GCN)',
		cup: 'Lightning',
		playCount: 0
	});
	Tracks.insert({
		name: 'Airship Fortress (DS)',
		cup: 'Lightning',
		playCount: 0
	});
	Tracks.insert({
		name: 'Rainbow Road (SNES)',
		cup: 'Lightning',
		playCount: 0
	});
}

if (Users.find().count() === 0) {
	Users.insert({
		name: 'Jon',
		displayName: 'Jon',
	});
	Users.insert({
		name: 'Adam C',
		displayName: 'Ansen',
	});
	Users.insert({
		name: 'Corey',
		displayName: 'dchw',
	});
	Users.insert({
		name: 'Dewey',
		displayName: 'dewey',
	});
	Users.insert({
		name: 'Todd',
		displayName: 'toots',
	});
	Users.insert({
		name: 'Max',
		displayName: 'Reginald',
	});
	
}