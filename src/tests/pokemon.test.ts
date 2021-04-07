import {Pokemon} from "../pokemon";
import {Attack} from "../attack";

describe('Pokemon', () => {
    let pokemon1: Pokemon;
    let pokemon2: Pokemon
    beforeEach(() => {
        pokemon1 = new Pokemon({
            name: "Pikachu",
            speed: 90,
            health: 100,
            attacks: [
                new Attack({
                    title: "Queue de fer",
                    damage: 12
                }),
                new Attack({
                    title: "Rafale",
                    damage: 6
                })
            ]
        });
        pokemon2 = new Pokemon({
            name: "Salamèche",
            speed: 65,
            health: 95,
            attacks: [
                new Attack({
                    title: "Queue enflammée",
                    damage: 10
                }),
                new Attack({
                    title: "Morsure",
                    damage: 8
                })
            ]
        });
    });

    describe("whoStart", () => {

        test('should Pokemon 1 start (index 1)', () => {
            expect(Pokemon.whoStart(pokemon1, pokemon2)).toBe(1);
        });

        test('should Pokemon 1 start (index 2)', () => {
            expect(Pokemon.whoStart(pokemon2, pokemon1)).toBe(2);
        });

    });

    describe("attack", () => {

        test('should Pokemon 1 attack Pokemon 2', () => {
            const startHealth = pokemon2.health;
            const attack = pokemon1.attack(pokemon2);
            expect(attack instanceof Attack).toBe(true);
            expect(pokemon2.health < startHealth).toBe(true);
        });

        test('should Pokemon 2 attack Pokemon 1', () => {
            const startHealth = pokemon1.health;
            const attack = pokemon2.attack(pokemon1);
            expect(attack instanceof Attack).toBe(true);
            expect(pokemon1.health < startHealth).toBe(true);
        });
    });
});
