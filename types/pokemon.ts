export interface Pokemon {
	name: string;
	abilities: Ability[];
	sprites: {
		front_default: string;
	};
	stats: Stat[];
}

export interface Stat {
	base_stat: number;
	stat: {
		name: string;
	};
}

export interface Ability {
	ability: {
		name: string;
	};
}
