import {Attack} from "./attack";

interface IPokemonProps {
    name: string;
    speed: number;
    health: number;
    attacks: Attack[];
}

export class Pokemon implements IPokemonProps {
    name: string;
    speed: number;
    health: number;
    attacks: Attack[];

    constructor(properties: IPokemonProps) {
        this.name = properties.name;
        this.speed = properties.speed;
        this.attacks = properties.attacks;
        this.health = properties.health;
    }

    static whoStart(p1: Pokemon, p2: Pokemon): number {
        if (p1.speed !== p2.speed) {
            return p1.speed > p2.speed ? 1 : 2;
        }
        return 1;
    }

    private randomAttack(): Attack {
        return this.attacks[Math.round(Math.random() * (this.attacks.length - 1))];
    }

    attack(adversary: Pokemon): Attack{
        const attack = this.randomAttack();

        adversary.health -= attack.damage;
        if (adversary.health < 0) {
            adversary.health = 0;
        }

        return attack;
    }

}

