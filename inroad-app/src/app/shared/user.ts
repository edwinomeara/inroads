export class User {
  constructor(
    public userName: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public position: string,
    public link: string,
    public skills: {},
    public resume: string
  ) {}
}
