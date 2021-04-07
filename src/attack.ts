interface IAttackProps {
    title: string;
    damage: number;
}

export class Attack implements IAttackProps{
    title: string;
    damage: number;

    constructor(properties: IAttackProps) {
        this.title = properties.title;
        this.damage = properties.damage;
    }
}
