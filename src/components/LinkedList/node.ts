export default class Node {
  value: Number;
  next: Node | null;
  isSelected: Boolean = false;
  constructor(value: Number) {
    this.value = value;
    this.next = null;
  }
}
