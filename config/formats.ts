// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: import('../sim/dex-formats').FormatList = [
	{
		section: "National Dex",
	},
	{
		name: "[Gen 9] National Dex",
		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Terastal Clause'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	// National Dex Other Tiers
	///////////////////////////////////////////////////////////////////

	{
		section: "National Dex Other Tiers",
	},
	{
		name: "[Gen 9] National Dex 35 Pokes",
		desc: `Only 35 Pok&eacute;mon are legal.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: [
			'Standard NatDex',
			'!Species Clause', 'Forme Clause', 'Terastal Clause', 'DryPass Clause', 'Mega Rayquaza Clause',
		],
		banlist: [
			'ND Uber', 'ND AG', 'ND OU', 'ND UUBL', 'ND UU', 'ND RUBL', 'ND RU', 'ND NFE', 'ND LC',
			'Battle Bond', 'Moody', 'Power Construct', 'Shadow Tag', 'Tangled Feet', 'Berserk Gene', 'Booster Energy', 'King\'s Rock', 'Quick Claw',
			'Razor Fang', 'Last Respects', 'Shed Tail', 'Baton Pass + Contrary', 'Baton Pass + Rapid Spin', 'Baton Pass + Well-Baked Body',
		],
		unbanlist: [
			'Articuno-Galar', 'Aurorus', 'Bellossom', 'Bewear', 'Blastoise-Base', 'Dodrio', 'Entei', 'Falinks-Base', 'Flygon', 'Furret', 'Goodra-Hisui',
			'Gumshoos-Base', 'Heliolisk', 'Hydrapple', 'Indeedee-F', 'Iron Thorns', 'Leavanny', 'Lickilicky', 'Ludicolo', 'Maractus', 'Meganium-Base',
			'Polteageist', 'Probopass', 'Regieleki', 'Rhyperior', 'Seismitoad', 'Shiinotic', 'Slaking', 'Spidops', 'Spiritomb', 'Unfezant', 'Vanilluxe',
			'Victreebel-Base', 'Weezing-Galar', 'Wyrdeer', 'Ultranecrozium Z', 'Solganium Z', 'Lunalium Z', 'Mewnium Z', 'Marshadium Z',
		],
		// Stupid hardcode
		onValidateSet(set, format, setHas, teamHas) {
			if (set.item) {
				const item = this.dex.items.get(set.item);
				if (item.megaStone && !(this.ruleTable.has(`+item:${item.id}`) || this.ruleTable.has(`+pokemontag:mega`))) {
					return [`Mega Evolution is banned.`];
				}
				if (item.zMove && !(this.ruleTable.has(`+item:${item.id}`))) {
					return [`${item.name} is banned.`];
				}
			}
			const species = this.dex.species.get(set.species);
			if (set.moves.map(x => this.toID(this.dex.moves.get(x).realMove) || x).includes('hiddenpower') &&
				species.baseSpecies !== 'Unown' && !this.ruleTable.has(`+move:hiddenpower`)) {
				return [`Hidden Power is banned.`];
			}
		},
	},
	{
		name: "[Gen 9] National Dex Ubers",
		mod: 'gen9',
		ruleset: ['Standard NatDex', '!Evasion Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Mega Rayquaza Clause'],
		banlist: ['ND AG', 'Shedinja', 'Assist', 'Baton Pass'],
	},
	{
		name: "[Gen 9] National Dex UU",
		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex'],
		banlist: ['ND OU', 'ND UUBL', 'Drizzle', 'Drought', 'Light Clay'],
	},
	{
		name: "[Gen 9] National Dex RU",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] National Dex UU'],
		banlist: ['ND UU', 'ND RUBL', 'Slowbronite'],
	},
	{
		name: "[Gen 9] National Dex LC",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard NatDex', 'Little Cup'],
		banlist: [
			'Aipom', 'Basculin-White-Striped', 'Clamperl', 'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Dunsparce', 'Duraludon', 'Flittle', 'Girafarig',
			'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon', 'Qwilfish-Hisui', 'Rufflet', 'Scraggy', 'Scyther', 'Sneasel', 'Sneasel-Hisui',
			'Stantler', 'Swirlix', 'Tangela', 'Voltorb-Hisui', 'Woobat', 'Yanma', 'Zigzagoon-Base', 'Chlorophyll', 'Moody', 'Eevium Z', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Assist', 'Aurora Veil', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Sticky Web',
		],
	},
	{
		name: "[Gen 9] National Dex Monotype",
		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Same Type Clause', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Blastoise-Mega', 'Blaziken', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Darkrai',
			'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Dracovish', 'Dragapult', 'Espathra', 'Eternatus', 'Flutter Mane', 'Genesect', 'Gengar-Mega', 'Giratina',
			'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Iron Bundle', 'Kangaskhan-Mega', 'Kartana', 'Kingambit', 'Koraidon', 'Kyogre',
			'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo',
			'Miraidon', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Palafin', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram',
			'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Ursaluna-Bloodmoon', 'Urshifu-Single-Strike', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned',
			'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-50%', 'Zygarde-Complete', 'Moody', 'Shadow Tag', 'Power Construct', 'Booster Energy', 'Damp Rock',
			'Focus Band', 'Icy Rock', 'King\'s Rock', 'Leppa Berry', 'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
			'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] National Dex Doubles",
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'NatDex Mod', 'Evasion Abilities Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Espathra', 'Eternatus', 'Genesect', 'Gengar-Mega',
			'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Koraidon', 'Kyogre', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Melmetal', 'Metagross-Mega',
			'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shedinja',
			'Solgaleo', 'Stakataka', 'Terapagos', 'Urshifu', 'Urshifu-Rapid-Strike', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned',
			'Zekrom', 'Zygarde-50%', 'Zygarde-Complete', 'Commander', 'Power Construct', 'Shadow Tag', 'Eevium Z', 'Assist', 'Coaching', 'Dark Void', 'Swagger',
		],
	},
	{
		name: "[Gen 9] National Dex Doubles Ubers",
		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles', 'NatDex Mod', '!Gravity Sleep Clause'],
		banlist: ['Shedinja', 'Assist'],
	},
	{
		name: "[Gen 9] National Dex 1v1",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard AG', 'NatDex Mod', 'Nickname Clause', 'Evasion Moves Clause', 'OHKO Clause', 'Species Clause', 'Sleep Moves Clause', 'Terastal Clause', 'Accuracy Moves Clause', 'Picked Team Size = 1', 'Max Team Size = 3'],
		banlist: [
			'Arceus', 'Archaludon', 'Blastoise-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Deoxys-Normal', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Dialga-Origin', 'Dragonite',
			'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Jirachi', 'Kangaskhan-Mega', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White',
			'Lugia', 'Lunala', 'Marshadow', 'Melmetal', 'Metagross-Mega', 'Mew', 'Mewtwo', 'Mimikyu', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Cornerstone', 'Palkia',
			'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Snorlax', 'Solgaleo', 'Terapagos', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta',
			'Zamazenta-Crowned', 'Zekrom', 'Moody', 'Focus Band', 'Focus Sash', 'Fightinium Z + Detect', 'Perish Song',
		],
	},
	{
		name: "[Gen 9] National Dex AG",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard AG', 'NatDex Mod'],
	},
	{
		name: "[Gen 9] National Dex AAA",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard NatDex', '!Obtainable Abilities', 'Ability Clause = 2', '!Sleep Clause Mod', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Alakazam-Mega', 'Annihilape', 'Arceus', 'Archeops', 'Baxcalibur', 'Blacephalon', 'Blastoise-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Ceruledge', 'Chien-Pao', 'Darkrai', 'Deoxys-Attack',
			'Deoxys-Normal', 'Dialga', 'Dialga-Origin', 'Dracovish', 'Dragapult', 'Enamorus-Incarnate', 'Eternatus', 'Flutter Mane', 'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh',
			'Hoopa-Unbound', 'Iron Boulder', 'Iron Bundle', 'Iron Valiant', 'Kangaskhan-Mega', 'Kartana', 'Keldeo', 'Kingambit', 'Koraidon', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia',
			'Lunala', 'Magearna', 'Marshadow', 'Melmetal', 'Mewtwo', 'Miraidon', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Noivern', 'Palkia', 'Palkia-Origin', 'Pheromosa', 'Raging Bolt', 'Rayquaza',
			'Regigigas', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Shedinja', 'Slaking', 'Sneasler', 'Solgaleo', 'Spectrier', 'Urshifu', 'Urshifu-Rapid-Strike', 'Weavile', 'Xerneas', 'Xurkitree', 'Yveltal', 'Zacian',
			'Zacian-Crowned', 'Zekrom', 'Zeraora', 'Zygarde-50%', 'Arena Trap', 'Comatose', 'Contrary', 'Fur Coat', 'Good as Gold', 'Gorilla Tactics', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out',
			'Intrepid Sword', 'Magic Bounce', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Orichalcum Pulse', 'Parental Bond', 'Poison Heal', 'Pure Power', 'Shadow Tag', 'Simple', 'Speed Boost', 'Stakeout', 'Triage',
			'Unburden', 'Water Bubble', 'Wonder Guard', 'King\'s Rock', 'Light Clay', 'Assist', 'Baton Pass', 'Electrify', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] National Dex BH",
		desc: `Balanced Hackmons with National Dex elements mixed in.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: [
			'Standard AG', 'NatDex Mod', '!Obtainable',
			'Forme Clause', 'Sleep Moves Clause', 'Ability Clause = 2', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'CFZ Clause', 'Terastal Clause',
		],
		banlist: [
			'Cramorant-Gorging', 'Calyrex-Shadow', 'Darmanitan-Galar-Zen', 'Eternatus-Eternamax', 'Greninja-Ash', 'Groudon-Primal', 'Rayquaza-Mega', 'Shedinja', 'Terapagos-Stellar', 'Arena Trap',
			'Contrary', 'Gorilla Tactics', 'Hadron Engine', 'Huge Power', 'Illusion', 'Innards Out', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Orichalcum Pulse', 'Parental Bond', 'Pure Power',
			'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard', 'Gengarite', 'Berserk Gene', 'Belly Drum', 'Bolt Beak', 'Ceaseless Edge', 'Chatter', 'Double Iron Bash', 'Electrify', 'Imprison',
			'Last Respects', 'Octolock', 'Rage Fist', 'Revival Blessing', 'Shed Tail', 'Shell Smash', 'Sleep Talk',
		],
		restricted: ['Arceus'],
		onValidateTeam(team, format) {
			// baseSpecies:count
			const restrictedPokemonCount = new this.dex.Multiset<string>();
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (!this.ruleTable.isRestrictedSpecies(species)) continue;
				restrictedPokemonCount.add(species.baseSpecies);
			}
			for (const [baseSpecies, count] of restrictedPokemonCount) {
				if (count > 1) {
					return [
						`You are limited to one ${baseSpecies} forme.`,
						`(You have ${count} ${baseSpecies} forme${count === 1 ? '' : 's'}.)`,
					];
				}
			}
		},
	},
	{
		name: "[Gen 9] National Dex Godly Gift",
		desc: `Each Pok&eacute;mon receives one base stat from a God (Restricted Pok&eacute;mon) depending on its position in the team. If there is no restricted Pok&eacute;mon, it uses the Pok&eacute;mon in the first slot.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard NatDex', 'Terastal Clause', '!Sleep Clause Mod', 'Sleep Moves Clause', 'Godly Gift Mod', 'Mega Rayquaza Clause'],
		banlist: [
			'Blissey', 'Calyrex-Shadow', 'Chansey', 'Deoxys-Attack', 'Groudon-Primal', 'Koraidon', 'Miraidon', 'Shuckle', 'Xerneas',
			'Arena Trap', 'Huge Power', 'Moody', 'Pure Power', 'Shadow Tag', 'Swift Swim', 'King\'s Rock', 'Quick Claw', 'Assist',
			'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		restricted: [
			'Arceus', 'Blastoise-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Chi-Yu', 'Chien-Pao', 'Darmanitan-Galar', 'Deoxys-Normal', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Dialga-Origin', 'Dracovish',
			'Dragapult', 'Espathra', 'Eternatus', 'Flutter Mane', 'Genesect', 'Gengar Mega', 'Giratina', 'Giratina-Origin', 'Groudon', 'Hawlucha', 'Ho-Oh', 'Iron Bundle', 'Kangaskhan-Mega', 'Kingambit',
			'Kyogre', 'Kyogre-Primal', 'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marowak-Alola', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Melmetal', 'Metagross-Mega',
			'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Pheromosa', 'Pikachu', 'Rayquaza', 'Reshiram', 'Sableye-Mega',
			'Salamence-Mega', 'Serperior', 'Shaymin-Sky', 'Smeargle', 'Solgaleo', 'Spectrier', 'Swellow', 'Toxapex', 'Ursaluna', 'Ursaluna-Bloodmoon', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned',
			'Zekrom', 'Power Construct',
		],
	},
	{
		name: "[Gen 9] National Dex STABmons",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard NatDex', 'STABmons Move Legality', '!Sleep Clause Mod', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Araquanid', 'Arceus', 'Azumarill', 'Baxcalibur', 'Blastoise-Mega', 'Blaziken-Mega', 'Basculegion', 'Basculegion-F', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao',
			'Cloyster', 'Darkrai', 'Darmanitan-Galar', 'Deoxys-Attack', 'Deoxys-Normal', 'Dialga', 'Dialga-Origin', 'Dracovish', 'Dragapult', 'Dragonite', 'Enamorus-Incarnate', 'Espathra',
			'Eternatus', 'Flutter Mane', 'Garchomp', 'Gengar-Mega', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Gouging Fire', 'Ho-Oh', 'Iron Bundle', 'Kangaskhan-Mega',
			'Kartana', 'Koraidon', 'Komala', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lilligant-Hisui', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna',
			'Manaphy', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Miraidon', 'Naganadel', 'Necrozma-Dusk-Mane', 'Necrozma-Dawn-Wings', 'Ogerpon-Hearthflame', 'Ogerpon-Wellspring', 'Palkia',
			'Palkia-Origin', 'Porygon-Z', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Silvally', 'Solgaleo', 'Spectrier', 'Tapu Koko', 'Tapu Lele', 'Terapagos',
			'Ursaluna-Bloodmoon', 'Urshifu-Single-Strike', 'Walking Wake', 'Xerneas', 'Xurkitree', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Zoroark-Hisui',
			'Zygarde-50%', 'Arena Trap', 'Moody', 'Shadow Tag', 'Power Construct', 'Damp Rock', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects',
			'Shed Tail', 'Wicked Blow', 'Wicked Torque',
		],
		restricted: [
			'Astral Barrage', 'Belly Drum', 'Bolt Beak', 'Chatter', 'Clangorous Soul', 'Dire Claw', 'Double Iron Bash', 'Dragon Energy', 'Electrify', 'Extreme Speed',
			'Fillet Away', 'Final Gambit', 'Fishious Rend', 'Geomancy', 'Gigaton Hammer', 'No Retreat', 'Rage Fist', 'Revival Blessing', 'Shell Smash', 'Shift Gear', 'Thousand Arrows',
			'Trick-or-Treat', 'Triple Arrows', 'V-create', 'Victory Dance',
		],
	},

	// Pet Mods
	///////////////////////////////////////////////////////////////////

	{
		section: "Pet Mods",
	},
	{
		name: "[Gen 9] Six by Six", // Roomtours
		desc: `A Gen 9 micrometa featuring only 6 Pokemon with 6 forms each.`,
		mod: 'sixbysix',
		searchShow: false,
		ruleset: ['Standard', 'Sleep Moves Clause', '!Sleep Clause Mod', 'Terastal Clause', 'Data Preview', 'Sprite Viewer'],
		banlist: [
			'All Pokemon', 'Last Respects', 'Shed Tail',
			'King\'s Rock', 'Razor Fang', 'Baton Pass',
		],
		unbanlist: [
			'Kingdra-Classic', 'Kingdra-Brinepool', 'Kingdra-Druid', 'Kingdra-Bard', 'Kingdra-Gourmet', 'Kingdra-Ancient',
			'Nidoqueen-Classic', 'Nidoqueen-Erudite', 'Nidoqueen-Volcanic',
			'Nidoqueen-Rosegold', 'Nidoqueen-Shaman', 'Nidoqueen-Jasper',
			'Bisharp-Centurion', 'Bisharp-Savage', 'Bisharp-Ronin', 'Bisharp-Mantis', 'Bisharp-Revenant', 'Bisharp-Assassin',
			'Corviknight-Thunderbird', 'Corviknight-Genie', 'Corviknight-Yeti',
			'Corviknight-Analytical', 'Corviknight-Martian', 'Corviknight-Falcon',
			'Krookodile-Infernal', 'Krookodile-Abyssal', 'Krookodile-Wetlander',
			'Krookodile-Cave Dweller', 'Krookodile-Cliffside', 'Krookodile-Quantum',
			'Ogerpon-Muerta', 'Ogerpon-Easter', 'Ogerpon-Ankh', 'Ogerpon-Eid', 'Ogerpon-Vessel', 'Ogerpon-Kitsune',
		],
		onBegin() {
			this.add('-message', `Welcome to Six by Six!`);
			this.add('-message', `This is a micrometa featuring just 6 Pokemon, each with 6 forms each!`);
			this.add('-message', `You can find our thread and metagame resources here:`);
			this.add('-message', `https://www.smogon.com/forums/threads/3769141/`);
		},
		onSwitchInPriority: 100,
		onSwitchIn(pokemon) {
			if ((pokemon.illusion || pokemon).getTypes(true, true).join('/') !==
				this.dex.forGen(9).species.get((pokemon.illusion || pokemon).species.name).types.join('/') &&
				!pokemon.terastallized) {
				this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
			}
		},
	},
	{
		name: "[Gen 9] Legends Z-A OU",
		desc: `Speculative turn-based metagame using Pok&eacute;mon obtainable in Legends: Z-A, but with National Dex learnsets.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3772808/">Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/10749086">List of Changes</a>`,
		],
		mod: 'gen9legendsou',
		ruleset: ['Standard', 'Sleep Moves Clause', '!Sleep Clause Mod', 'Min Source Gen = 3', 'Terastal Clause'],
		banlist: ['Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Light Clay', 'Quick Claw', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail'],
	},

	// Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		section: "Randomized Metas",
		column: 3,
	},
	{
		name: "[Gen 9] Random Roulette",
		desc: `Random Battles in a random generation! [Gen 1] Random Battle - [Gen 9] Random Battle.`,
		mod: 'randomroulette',
		team: 'random',
		bestOfDefault: true,
	},
	{
		name: "[Gen 9] Super Staff Bros Ultimate",
		desc: "The fifth iteration of Super Staff Bros is here! Battle with a random team of pokemon created by the sim staff.",
		mod: 'gen9ssb',
		debug: true,
		team: 'randomStaffBros',
		bestOfDefault: true,
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
		onBegin() {
			// TODO look into making an event to put this right after turn|1
			// https://discordapp.com/channels/630837856075513856/630845310033330206/716126469528485909
			// Requires client change
			this.add(`raw|<div class='broadcast-green'><b>Wondering what all these custom moves, abilities, and items do?<br />Check out the <a href="https://www.smogon.com/articles/super-staff-bros-ultimate" target="_blank">Super Staff Bros: Ultimate Guide</a> or use /ssb to find out!</b></div>`);
			if (this.ruleTable.has('dynamaxclause')) {
				// Old joke format we're bringing back
				this.add('message', 'Fox only');
				this.add('message', 'No items');
				this.add('message', 'Final Destination');
				return;
			} else if (this.ruleTable.has('zmoveclause')) {
				// Old joke format we're bringing back
				this.add('message', 'April Fool\'s Day');
				return;
			}

			this.add('message', 'EVERYONE IS HERE!');
			this.add('message', 'FIGHT!');
		},
		onSwitchInPriority: 100,
		onSwitchIn(pokemon) {
			let name: string = this.toID(pokemon.illusion ? pokemon.illusion.name : pokemon.name);
			if (this.dex.species.get(name).exists || this.dex.moves.get(name).exists ||
				this.dex.abilities.get(name).exists || name === 'blitz') {
				// Certain pokemon have volatiles named after their id
				// To prevent overwriting those, and to prevent accidentally leaking
				// that a pokemon is on a team through the onStart even triggering
				// at the start of a match, users with pokemon names will need their
				// statuses to end in "user".
				name = `${name}user`;
			}
			// Add the mon's status effect to it as a volatile.
			const status = this.dex.conditions.get(name);
			if (status?.exists) {
				pokemon.addVolatile(name, pokemon);
			}
			if ((pokemon.illusion || pokemon).getTypes(true, true).join('/') !==
				this.dex.forGen(9).species.get((pokemon.illusion || pokemon).species.name).types.join('/') &&
				!pokemon.terastallized) {
				this.add('-start', pokemon, 'typechange', (pokemon.illusion || pokemon).getTypes(true).join('/'), '[silent]');
			}
		},
	},
	{
		name: "[Gen 9] Monotype Random Battle",
		mod: 'gen9',
		team: 'random',
		bestOfDefault: true,
		ruleset: ['Obtainable', 'Same Type Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] Random Battle (Shared Power, B12P6)",
		desc: `[Gen 9] Random Battle with Team Preview, Bring 12 Pick 6, and Shared Power.`,
		mod: 'sharedpower',
		team: 'random',
		bestOfDefault: true,
		ruleset: ['[Gen 9] Random Battle', 'Team Preview', 'Max Team Size = 12', 'Picked Team Size = 6'],
		onValidateRule() {
			if (this.format.gameType !== 'singles') {
				throw new Error(`Shared Power currently does not support ${this.format.gameType} battles.`);
			}
		},
		onBeforeSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + this.toID(ability);
				pokemon.volatiles[effect] = this.initEffectState({ id: effect, target: pokemon });
				if (!pokemon.m.abils) pokemon.m.abils = [];
				if (!pokemon.m.abils.includes(effect)) pokemon.m.abils.push(effect);
			}
		},
	},
	{
		name: "[Gen 9] Random Battle Mayhem",
		desc: `[Gen 9] Random Battle with Team Preview and elements of Camomons, Inverse, Scalemons, and Shared Power.`,
		mod: 'sharedpower',
		team: 'random',
		bestOfDefault: true,
		ruleset: ['[Gen 9] Random Battle', 'Team Preview', 'Camomons Mod', 'Inverse Mod', 'Scalemons Mod'],
		onValidateRule() {
			if (this.format.gameType !== 'singles') {
				throw new Error(`Shared Power currently does not support ${this.format.gameType} battles.`);
			}
		},
		onBeforeSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + this.toID(ability);
				pokemon.volatiles[effect] = this.initEffectState({ id: effect, target: pokemon });
				if (!pokemon.m.abils) pokemon.m.abils = [];
				if (!pokemon.m.abils.includes(effect)) pokemon.m.abils.push(effect);
			}
		},
	},
	{
		name: "[Gen 9] Battle Factory",
		desc: `Randomized teams of Pok&eacute;mon for a generated Smogon tier with sets that are competitively viable.`,
		mod: 'gen9',
		team: 'randomFactory',
		bestOfDefault: true,
		ruleset: ['Standard'],
		onBegin() {
			this.add(`raw|<div class="broadcast-blue"><b>Battle Factory Tier: ${this.teamGenerator.factoryTier}</b></div>`);
		},
	},
	{
		name: "[Gen 9] 1v1 Factory",
		desc: `Randomized teams of Pok&eacute;mon for a generated Smogon tier with sets that are competitively viable.`,
		threads: [`&bullet; <a href="https://www.smogon.com/forums/threads/3775744/">1v1 Factory Set Discussion</a>`],
		mod: 'gen9',
		team: 'random1v1Factory',
		bestOfDefault: true,
		ruleset: ['[Gen 9] 1v1'],
	},
	{
		name: "[Gen 9] BSS Factory",
		desc: `Randomized 3v3 Singles featuring Pok&eacute;mon and movesets popular in Battle Stadium Singles.`,
		mod: 'gen9',
		searchShow: false,
		team: 'randomBSSFactory',
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'VGC Timer'],
	},
	{
		name: "[Gen 9] Draft Factory",
		desc: `Randomized matchups sourced from various 6v6 singles draft leagues.`,
		mod: 'gen9',
		searchShow: false,
		team: 'randomDraftFactory',
		bestOfDefault: true,
		ruleset: ['Standard Draft', '!Team Preview'],
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (!(pokemon.set as any).teraCaptain) pokemon.canTerastallize = null;
			}
			this.add('rule', 'Tera Captain Clause: Only Tera Captains can Terastallize');
		},
		onTeamPreview() {
			this.add('clearpoke');
			for (const pokemon of this.getAllPokemon()) {
				const details = pokemon.details.replace(', shiny', '')
					.replace(/(Greninja|Gourgeist|Pumpkaboo|Xerneas|Zacian|Zamazenta|Dudunsparce)(-[a-zA-Z?-]+)?/g, '$1-*');
				this.add('poke', pokemon.side.id, details, '');
			}
			this.makeRequest('teampreview');
			for (const side of this.sides) {
				let buf = ``;
				for (const pokemon of side.pokemon) {
					if (!(pokemon.set as any).teraCaptain) continue;
					buf += buf ? ` / ` : `raw|${side.name}'s Tera Captains:<br />`;
					buf += `<psicon pokemon="${pokemon.species.id}" /><psicon type="${pokemon.teraType}" />`;
				}
				this.add(`${buf}`);
			}
		},
	},
	{
		name: "[Gen 9] Baby Random Battle",
		mod: 'gen9',
		team: 'randomBaby',
		bestOfDefault: true,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item.`,
		mod: 'gen9',
		team: 'randomHC',
		bestOfDefault: true,
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
		banlist: ['CAP', 'Custom', 'Future', 'LGPE', 'MissingNo.', 'Pikachu-Cosplay', 'Pichu-Spiky-eared', 'Xerneas-Neutral'],
	},
	{
		name: "[Gen 9] Doubles Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item. Now with TWICE the Pok&eacute;mon per side!`,
		mod: 'gen9',
		team: 'randomHC',
		searchShow: false,
		bestOfDefault: true,
		gameType: 'doubles',
		ruleset: ['[Gen 9] Hackmons Cup'],
	},
	{
		name: "[Gen 9] Broken Cup",
		desc: `[Gen 9] Hackmons Cup but with only the most powerful Pok&eacute;mon, moves, abilities, and items.`,

		team: 'randomHC',
		bestOfDefault: true,
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
		banlist: ['All Pokemon', 'All Abilities', 'All Items', 'All Moves'],
		unbanlist: [
			'10,000,000 Volt Thunderbolt', 'Abomasnow-Mega', 'Absol-Mega', 'Accelerock', 'Acid Spray', 'Adaptability', 'Aeroblast',
			'Aerodactyl-Mega', 'Aftermath', 'Aggron', 'Aggron-Mega', 'Aguav Berry', 'Air Balloon', 'Air Slash', 'Alakazam-Mega',
			'Alluring Voice', 'Altaria-Mega', 'Ampharos-Mega', 'Analytic', 'Anchor Shot', 'Anger Shell', 'Annihilape', 'Anticipation',
			'Apple Acid', 'Aqua Step', 'Arcanine', 'Arcanine-Hisui', 'Archaludon', 'Archeops', 'Arena Trap', 'Armarouge', 'Armor Cannon',
			'Aromatherapy', 'Articuno', 'Articuno-Galar', 'As One (Glastrier)', 'As One (Spectrier)', 'Assault Vest', 'Astral Barrage',
			'Attack Order', 'Audino-Mega', 'Aura Sphere', 'Axe Kick', 'Azelf', 'Baddy Bad', 'Baneful Bunker', 'Banette-Mega',
			'Barb Barrage', 'Basculegion', 'Basculegion-F', 'Baton Pass', 'Baxcalibur', 'Beads of Ruin', 'Beak Blast', 'Beast Boost',
			'Behemoth Bash', 'Behemoth Blade', 'Belly Drum', 'Berserk', 'Bitter Blade', 'Bitter Malice', 'Blacephalon', 'Blastoise',
			'Blastoise-Mega', 'Blaziken', 'Blaziken-Mega', 'Blazing Torque', 'Bleakwind Storm', 'Blissey', 'Blizzard', 'Blood Moon',
			'Blue Flare', 'Blunder Policy', 'Body Press', 'Body Slam', 'Bolt Beak', 'Bolt Strike', 'Boomburst', 'Bouncy Bubble',
			'Brave Bird', 'Bright Powder', 'Brute Bonnet', 'Bug Buzz', 'Bullet Punch', 'Burning Bulwark', 'Buzzwole', 'Buzzy Buzz',
			'Calm Mind', 'Calyrex-Ice', 'Calyrex-Shadow', 'Camerupt-Mega', 'Catastropika', 'Ceaseless Edge', 'Celebi', 'Celesteela',
			'Centiskorch', 'Ceruledge', 'Charizard', 'Charizard-Mega-X', 'Charizard-Mega-Y', 'Chatter', 'Chesnaught', 'Chesto Berry',
			'Chi-Yu', 'Chien-Pao', 'Chilan Berry', 'Chilling Neigh', 'Chilly Reception', 'Choice Band', 'Choice Scarf', 'Choice Specs',
			'Cinderace', 'Circle Throw', 'Clanging Scales', 'Clangorous Soul', 'Clangorous Soulblaze', 'Clear Amulet', 'Clear Body',
			'Clear Smog', 'Close Combat', 'Cloyster', 'Cobalion', 'Coil', 'Collision Course', 'Comatose', 'Combat Torque', 'Competitive',
			'Compound Eyes', 'Contrary', 'Core Enforcer', 'Cosmic Power', 'Cotton Guard', 'Court Change', 'Covert Cloak', 'Crabhammer',
			'Cresselia', 'Crobat', 'Cross Chop', 'Curse', 'Custap Berry', 'Dark Pulse', 'Darkest Lariat', 'Darkrai',
			'Darmanitan-Galar-Zen', 'Darmanitan-Zen', 'Decidueye', 'Decidueye-Hisui', 'Defend Order', 'Defiant', 'Defog', 'Delphox',
			'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Desolate Land', 'Dialga', 'Dialga-Origin', 'Diamond Storm',
			'Diancie', 'Diancie-Mega', 'Dire Claw', 'Disable', 'Discharge', 'Dondozo', 'Doom Desire', 'Double Iron Bash', 'Download',
			'Draco Meteor', 'Draco Plate', 'Dragapult', 'Dragon Ascent', 'Dragon Dance', 'Dragon Darts', 'Dragon Energy', 'Dragon Hammer',
			'Dragon Pulse', 'Dragon Tail', 'Dragonite', 'Drain Punch', 'Dread Plate', 'Drill Peck', 'Drizzle', 'Drought', 'Drum Beating',
			'Dry Skin', 'Duraludon', 'Dusknoir', 'Dynamax Cannon', 'Earth Eater', 'Earth Plate', 'Earth Power', 'Earthquake',
			'Eerie Spell', 'Effect Spore', 'Eject Pack', 'Electivire', 'Electric Surge', 'Electro Drift', 'Emboar', 'Empoleon',
			'Enamorus', 'Enamorus-Therian', 'Encore', 'Energy Ball', 'Entei', 'Eruption', 'Espeon', 'Esper Wing', 'Eternatus',
			'Eternatus-Eternamax', 'Exeggutor', 'Exeggutor-Alola', 'Expanding Force', 'Expert Belt', 'Explosion', 'Extreme Evoboost',
			'Extreme Speed', 'Fake Out', 'Feraligatr', 'Fezandipiti', 'Fickle Beam', 'Fiery Wrath', 'Figy Berry', 'Filter',
			'Fire Blast', 'Fire Lash', 'First Impression', 'Fishious Rend', 'Fist Plate', 'Flame Body', 'Flame Charge', 'Flame Plate',
			'Flamethrower', 'Flare Blitz', 'Flareon', 'Flash Cannon', 'Fleur Cannon', 'Flip Turn', 'Floaty Fall', 'Florges',
			'Flower Trick', 'Fluffy', 'Flutter Mane', 'Focus Blast', 'Focus Sash', 'Forewarn', 'Foul Play', 'Freeze-Dry', 'Freezing Glare',
			'Freezy Frost', 'Frost Breath', 'Full Metal Body', 'Fur Coat', 'Fusion Bolt', 'Fusion Flare', 'Future Sight', 'G-Max Befuddle',
			'G-Max Cannonade', 'G-Max Centiferno', 'G-Max Resonance', 'G-Max Steelsurge', 'G-Max Stonesurge', 'G-Max Sweetness',
			'G-Max Vine Lash', 'G-Max Volcalith', 'G-Max Wildfire', 'G-Max Wind Rage', 'Gallade-Mega', 'Garchomp', 'Garchomp-Mega',
			'Gardevoir-Mega', 'Gear Grind', 'Genesect', 'Genesis Supernova', 'Gengar-Mega', 'Gholdengo', 'Giga Drain', 'Gigaton Hammer',
			'Giratina', 'Giratina-Origin', 'Glaceon', 'Glacial Lance', 'Glaive Rush', 'Glalie-Mega', 'Glare', 'Glastrier', 'Glimmora',
			'Glitzy Glow', 'Gogoat', 'Golisopod', 'Good as Gold', 'Goodra', 'Goodra-Hisui', 'Gooey', 'Gorilla Tactics', 'Gouging Fire',
			'Grassy Surge', 'Grav Apple', 'Great Tusk', 'Greninja', 'Greninja-Ash', 'Grim Neigh', 'Groudon', 'Groudon-Primal',
			'Guardian of Alola', 'Gunk Shot', 'Guzzlord', 'Gyarados', 'Gyarados-Mega', 'Hadron Engine', 'Hammer Arm', 'Haxorus',
			'Haze', 'Head Charge', 'Head Smash', 'Headlong Rush', 'Heal Bell', 'Heal Order', 'Healing Wish', 'Heart Swap', 'Heat Crash',
			'Heat Wave', 'Heatran', 'Heavy-Duty Boots', 'Heracross-Mega', 'High Horsepower', 'High Jump Kick', 'Hippowdon', 'Ho-Oh',
			'Hone Claws', 'Hoopa', 'Hoopa-Unbound', 'Horn Leech', 'Houndoom-Mega', 'Huge Power', 'Hurricane', 'Hustle', 'Hydreigon',
			'Hydrapple', 'Hydro Pump', 'Hydro Steam', 'Hyper Drill', 'Iapapa Berry', 'Ice Beam', 'Ice Hammer', 'Ice Scales', 'Ice Shard',
			'Ice Spinner', 'Icicle Plate', 'Illusion', 'Imposter', 'Incineroar', 'Infernape', 'Innards Out', 'Insect Plate', 'Inteleon',
			'Intimidate', 'Intrepid Sword', 'Iron Barbs', 'Iron Boulder', 'Iron Bundle', 'Iron Crown', 'Iron Hands', 'Iron Head',
			'Iron Jugulis', 'Iron Leaves', 'Iron Moth', 'Iron Plate', 'Iron Tail', 'Iron Thorns', 'Iron Treads', 'Iron Valiant',
			'Ivy Cudgel', 'Jet Punch', 'Jirachi', 'Jolteon', 'Judgment', 'Jungle Healing', 'Kangaskhan-Mega', 'Kartana', 'Keldeo',
			'Keldeo-Resolute', 'King\'s Rock', 'King\'s Shield', 'Kingambit', 'Kingdra', 'Knock Off', 'Kommo-o', 'Koraidon', 'Kyogre',
			'Kyogre-Primal', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus', 'Landorus-Therian', 'Lapras', 'Last Respects', 'Latias',
			'Latias-Mega', 'Latios', 'Latios-Mega', 'Lava Plume', 'Leaf Blade', 'Leaf Storm', 'Leafeon', 'Leech Life', 'Leech Seed',
			'Leftovers', 'Leppa Berry', 'Let\'s Snuggle Forever', 'Levitate', 'Libero', 'Liechi Berry', 'Life Orb', 'Light Screen',
			'Light That Burns the Sky', 'Light of Ruin', 'Lightning Rod', 'Liquidation', 'Lopunny-Mega', 'Lovely Kiss', 'Low Kick',
			'Lucario', 'Lucario-Mega', 'Lugia', 'Lum Berry', 'Lumina Crash', 'Lunala', 'Lunar Blessing', 'Lunar Dance', 'Lunge',
			'Luster Purge', 'Mach Punch', 'Magearna', 'Magic Bounce', 'Magic Guard', 'Magical Torque', 'Magma Storm', 'Magmortar',
			'Magnezone', 'Mago Berry', 'Make It Rain', 'Malicious Moonsault', 'Malignant Chain', 'Mamoswine', 'Manaphy', 'Manectric-Mega',
			'Marshadow', 'Marvel Scale', 'Matcha Gotcha', 'Max Guard', 'Meadow Plate', 'Megahorn', 'Meganium', 'Melmetal', 'Meloetta',
			'Meloetta-Pirouette', 'Memento', 'Menacing Moonraze Maelstrom', 'Mental Herb', 'Meowscarada', 'Mesprit', 'Metagross',
			'Metagross-Mega', 'Meteor Mash', 'item: Metronome', 'Mew', 'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Mighty Cleave',
			'Milk Drink', 'Milotic', 'Mind Plate', 'Mind\'s Eye', 'Minimize', 'Miraidon', 'Mirror Herb', 'Mist Ball', 'Misty Surge',
			'Mold Breaker', 'Moltres', 'Moltres-Galar', 'Moody', 'Moonblast', 'Moongeist Beam', 'Moonlight', 'Morning Sun', 'Mortal Spin',
			'Mountain Gale', 'Moxie', 'Multiscale', 'Munkidori', 'Muscle Band', 'Mystical Fire', 'Mystical Power', 'Naganadel',
			'Nasty Plot', 'Natural Cure', 'Nature\'s Madness', 'Necrozma', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra',
			'Neuroforce', 'Neutralizing Gas', 'Night Daze', 'Night Shade', 'Nihilego', 'No Retreat', 'Noivern', 'Noxious Torque',
			'Nuzzle', 'Oblivion Wing', 'Obstruct', 'Oceanic Operetta', 'Octolock', 'Ogerpon', 'Ogerpon-Cornerstone', 'Ogerpon-Hearthflame',
			'Ogerpon-Wellspring', 'Okidogi', 'Opportunist', 'Orichalcum Pulse', 'Origin Pulse', 'Outrage', 'Overdrive', 'Overheat',
			'Pain Split', 'Palafin-Hero', 'Palkia', 'Palkia-Origin', 'Parental Bond', 'Parting Shot', 'Pecharunt', 'Perish Body',
			'Perish Song', 'Petaya Berry', 'Pheromosa', 'Photon Geyser', 'Pidgeot-Mega', 'Pinsir-Mega', 'Pixie Plate', 'Plasma Fists',
			'Play Rough', 'Poison Heal', 'Poison Point', 'Poison Touch', 'Pollen Puff', 'Poltergeist', 'Population Bomb', 'Porygon-Z',
			'Power Gem', 'Power Trip', 'Power Whip', 'Prankster', 'Precipice Blades', 'Primarina', 'Primordial Sea', 'Prism Armor',
			'Probopass', 'Protean', 'Protect', 'Psyblade', 'Psychic Fangs', 'Psychic Surge', 'Psychic', 'Psycho Boost', 'Psyshield Bash',
			'Psystrike', 'Pulverizing Pancake', 'Pure Power', 'Purifying Salt', 'Pursuit', 'Pyro Ball', 'Quaquaval', 'Quick Claw',
			'Quiver Dance', 'Rage Fist', 'Raging Bolt', 'Raging Bull', 'Raging Fury', 'Raikou', 'Rapid Spin', 'Rayquaza', 'Rayquaza-Mega',
			'Razor Claw', 'Recover', 'Red Card', 'Reflect', 'Regenerator', 'Regice', 'Regidrago', 'Regieleki', 'Regigigas', 'Regirock',
			'Registeel', 'Reshiram', 'Rest', 'Revelation Dance', 'Revival Blessing', 'Rhyperior', 'Rillaboom', 'Roar', 'Roaring Moon',
			'Rocky Helmet', 'Roost', 'Rough Skin', 'Ruination', 'Sacred Fire', 'Sacred Sword', 'Salac Berry', 'Salamence', 'Salamence-Mega',
			'Salt Cure', 'Samurott', 'Samurott-Hisui', 'Sandsear Storm', 'Sandy Shocks', 'Sap Sipper', 'Sappy Seed', 'Scald', 'Sceptile',
			'Sceptile-Mega', 'Scizor-Mega', 'Scope Lens', 'Scream Tail', 'Searing Shot', 'Searing Sunraze Smash', 'Secret Sword',
			'Seed Flare', 'Seismic Toss', 'Serene Grace', 'Serperior', 'Shadow Ball', 'Shadow Bone', 'Shadow Shield', 'Shadow Sneak',
			'Shadow Tag', 'Sharpedo-Mega', 'Shaymin', 'Shaymin-Sky', 'Shed Skin', 'Shed Tail', 'Sheer Force', 'Shell Side Arm',
			'Shell Smash', 'Shield Dust', 'Shift Gear', 'Silk Scarf', 'Silk Trap', 'Silvally', 'Simple', 'Sinister Arrow Raid',
			'Sitrus Berry', 'Sizzly Slide', 'Skeledirge', 'Sky Plate', 'Slack Off', 'Slaking', 'Sleep Powder', 'Slither Wing',
			'Slowbro-Mega', 'Sludge Bomb', 'Sludge Wave', 'Snarl', 'Snipe Shot', 'Snorlax', 'Soft-Boiled', 'Solgaleo', 'Solid Rock',
			'Soul-Heart', 'Soul-Stealing 7-Star Strike', 'Spacial Rend', 'Sparkly Swirl', 'Spectral Thief', 'Spectrier', 'Speed Boost',
			'Spikes', 'Spiky Shield', 'Spin Out', 'Spirit Break', 'Spirit Shackle', 'Splash Plate', 'Splintered Stormshards',
			'Splishy Splash', 'Spooky Plate', 'Spore', 'Springtide Storm', 'Stakataka', 'Stakeout', 'Stamina', 'Static', 'Stealth Rock',
			'Steam Eruption', 'Steelix-Mega', 'Sticky Web', 'Stoked Sparksurfer', 'Stone Axe', 'Stone Edge', 'Stone Plate', 'Stored Power',
			'Storm Drain', 'Storm Throw', 'Strange Steam', 'Strength Sap', 'Sturdy', 'Sucker Punch', 'Suicune', 'Sunsteel Strike',
			'Super Fang', 'Supercell Slam', 'Superpower', 'Supreme Overlord', 'Surf', 'Surging Strikes', 'Swampert', 'Swampert-Mega',
			'Sword of Ruin', 'Swords Dance', 'Sylveon', 'Synthesis', 'Tablets of Ruin', 'Tachyon Cutter', 'Tail Glow', 'Tangling Hair',
			'Tangrowth', 'Tapu Bulu', 'Tapu Fini', 'Tapu Koko', 'Tapu Lele', 'Taunt', 'Techno Blast', 'Teleport', 'Tera Blast',
			'Tera Starstorm', 'Terapagos-Stellar', 'Terapagos-Terastal', 'Teravolt', 'Terrakion', 'Thermal Exchange', 'Thick Fat',
			'Thousand Arrows', 'Thousand Waves', 'Throat Spray', 'Thunder Cage', 'Thunder Wave', 'Thunder', 'Thunderbolt', 'Thunderclap',
			'Thunderous Kick', 'Thundurus', 'Thundurus-Therian', 'Tidy Up', 'Ting-Lu', 'Tinted Lens', 'Togekiss', 'Topsy-Turvy',
			'Torch Song', 'Tornadus', 'Tornadus-Therian', 'Torterra', 'Tough Claws', 'Toxic Chain', 'Toxic Debris', 'Toxic Plate',
			'Toxic Spikes', 'Toxic', 'Tri Attack', 'Triage', 'Triple Arrows', 'Triple Axel', 'Turboblaze', 'Type: Null', 'Typhlosion',
			'Typhlosion-Hisui', 'Tyranitar', 'Tyranitar-Mega', 'U-turn', 'Umbreon', 'Unaware', 'Unburden', 'Ursaluna', 'Ursaluna-Bloodmoon',
			'Urshifu', 'Urshifu-Rapid-Strike', 'Uxie', 'V-create', 'Vanilluxe', 'Vaporeon', 'Venusaur', 'Venusaur-Mega', 'Vessel of Ruin',
			'Victini', 'Victory Dance', 'Virizion', 'Volcanion', 'Volcarona', 'Volt Absorb', 'Volt Switch', 'Volt Tackle', 'Walking Wake',
			'Walrein', 'Water Absorb', 'Water Bubble', 'Water Shuriken', 'Water Spout', 'Waterfall', 'Wave Crash', 'Weakness Policy',
			'Well-Baked Body', 'Whirlwind', 'White Herb', 'Wicked Blow', 'Wicked Torque', 'Wide Lens', 'Wiki Berry', 'Wild Charge',
			'Wildbolt Storm', 'Will-O-Wisp', 'Wise Glasses', 'Wish', 'Wishiwashi-School', 'Wo-Chien', 'Wonder Guard', 'Wood Hammer',
			'Wyrdeer', 'Xerneas', 'Xurkitree', 'Yawn', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zap Plate',
			'Zapdos', 'Zapdos-Galar', 'Zarude', 'Zekrom', 'Zeraora', 'Zing Zap', 'Zippy Zap', 'Zygarde', 'Zygarde-Complete',
		],
	},
	{
		name: "[Gen 9] Challenge Cup 1v1",
		desc: `Get a randomized team of level-balanced Pok&eacute;mon with absolutely any legal ability, moves, and item, and choose one to battle.`,
		mod: 'gen9',
		team: 'randomCC',
		bestOfDefault: true,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Terastal Clause', 'Picked Team Size = 1'],
	},
	{
		name: "[Gen 9] Challenge Cup 2v2",
		desc: `Get a randomized team of level-balanced Pok&eacute;mon with absolutely any legal ability, moves, and item, and choose two to battle in a doubles format.`,
		mod: 'gen9',
		team: 'randomCC',
		gameType: 'doubles',
		bestOfDefault: true,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Picked Team Size = 2'],
	},
	{
		name: "[Gen 9] Challenge Cup 6v6",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any legal ability, moves, and item.`,
		mod: 'gen9',
		team: 'randomCC',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 9] Metronome Battle",
		mod: 'gen9',
		gameType: 'doubles',
		bestOfDefault: true,
		ruleset: ['Max Team Size = 2', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: [
			'Pokestar Spirit', 'Pecharunt', 'Terapagos', 'Shedinja + Sturdy', 'Cheek Pouch', 'Commander', 'Cursed Body', 'Dry Skin', 'Earth Eater', 'Fur Coat',
			'Gorilla Tactics', 'Grassy Surge', 'Huge Power', 'Ice Body', 'Iron Barbs', 'Moody', 'Neutralizing Gas', 'Opportunist', 'Parental Bond', 'Perish Body',
			'Poison Heal', 'Power Construct', 'Pressure', 'Pure Power', 'Rain Dish', 'Rough Skin', 'Sand Spit', 'Sand Stream', 'Seed Sower', 'Stamina', 'Toxic Chain',
			'Volt Absorb', 'Water Absorb', 'Wonder Guard', 'Harvest + Jaboca Berry', 'Harvest + Rowap Berry', 'Aguav Berry', 'Assault Vest', 'Berry', 'Berry Juice',
			'Berserk Gene', 'Black Sludge', 'Enigma Berry', 'Figy Berry', 'Gold Berry', 'Iapapa Berry', 'Kangaskhanite', 'Leftovers', 'Mago Berry', 'Medichamite',
			'Steel Memory', 'Oran Berry', 'Rocky Helmet', 'Shell Bell', 'Sitrus Berry', 'Tatsugirinite', 'Wiki Berry',
		],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			if (species.types.includes('Steel')) {
				return [`${species.name} is a Steel-type, which is banned from Metronome Battle.`];
			}
			if (set.teraType === 'Steel') {
				return [`${species.name} has Steel as its Tera type, which is banned from Metronome Battle.`];
			}
			if (species.bst > 625) {
				return [`${species.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`];
			}
			const item = this.dex.items.get(set.item);
			if (set.item && item.megaStone) {
				const megaSpecies = this.dex.species.get(item.megaStone[species.baseSpecies]);
				if (megaSpecies.bst > 625) {
					return [
						`${set.name || set.species}'s item ${item.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`,
					];
				}
			}
			if (set.moves.length !== 1 || this.dex.moves.get(set.moves[0]).id !== 'metronome') {
				return [`${set.name || set.species} has illegal moves.`, `(Pok\u00e9mon can only have one Metronome in their moveset)`];
			}
		},
	},
];
