class Step {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public completed: boolean,
    public needsSync: boolean,
  ) {}
  toggle() {
    return new Step(
      this.id,
      this.title,
      this.description,
      !this.completed,
      true,
    );
  }
}
