class Character {
  constructor(name, type) {
    if (typeof name !== "string" || name.length < 2 || name.length > 10) {
      throw new Error("Invalid name");
    }
    const types = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];
    if (!types.includes(type)) {
      throw new Error("Invalid type");
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    switch (type) {
      case "Bowman":
        this.attack = 25;
        this.defence = 25;
        break;
      case "Swordsman":
        this.attack = 40;
        this.defence = 10;
        break;
      case "Magician":
        this.attack = 10;
        this.defence = 40;
        break;
      case "Undead":
        this.attack = 25;
        this.defence = 25;
        break;
      case "Zombie":
        this.attack = 40;
        this.defence = 10;
        break;
      case "Daemon":
        this.attack = 10;
        this.defence = 40;
        break;
      default:
        throw new Error("Invalid type");
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error("Cannot level up a dead character");
    }
    this.level += 1;
    this.attack = Math.floor(this.attack * 1.2); // Увеличиваем атаку на 20%
    this.defence = Math.floor(this.defence * 1.2); // Увеличиваем защиту на 20%
    this.health = 100; // Сброс здоровья при повышении уровня
  }

  damage(points) {
    const damageTaken = points * (1 - this.defence / 100);
    this.health = Math.max(this.health - damageTaken, 0); // Здоровье не может опуститься ниже 0
  }
}

export default Character;

// Классы для разных типов персонажей
class Bowman extends Character {
  constructor(name) {
    super(name, "Bowman");
  }
}

class Swordsman extends Character {
  constructor(name) {
    super(name, "Swordsman");
  }
}

class Magician extends Character {
  constructor(name) {
    super(name, "Magician");
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");
  }
}

class Undead extends Character {
  constructor(name) {
    super(name, "Undead");
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name, "Zombie");
  }
}

export { Bowman, Swordsman, Magician, Daemon, Undead, Zombie };
