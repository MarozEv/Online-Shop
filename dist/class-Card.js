export class Card {
    constructor(obj, parent) {
        this.parent = parent;
        this.num = obj.num,
            this.name = obj.name,
            this.count = obj.count,
            this.year = obj.year,
            this.shape = obj.shape,
            this.color = obj.color,
            this.size = obj.size,
            this.favourite = obj.favorite;
    }
    render() {
        const element = document.createElement('div');
        element.classList.add('good-item');
        element.setAttribute('data-num', `${this.num}`);
        element.innerHTML =
            `
      <h3 class="good-name">${this.name}</h3>
      <div class="good-img">
        <img src="/assets/toys/${this.num}.png" alt=${this.name}>
      </div>
      <p class="good-cout">Количество: ${this.count}</p>
      <p class="good-year">Год покупки: ${this.year}</p>
      <p class="good-shape">Форма игрушки: ${this.shape}</p>
      <p class="good-color">Цыет игрушки: ${this.color}</p>
      <p class="good-size">Размер игрушки: ${this.size}</p>
      <p class="good-favourite" ">Любимая: ${this.favourite == true ? "Да" : "Нет"}</p>
    `;
        this.parent.append(element);
    }
}
//# sourceMappingURL=class-Card.js.map