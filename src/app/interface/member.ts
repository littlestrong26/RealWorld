export interface Member {
  id: number;
  name: string;
  email: string;
  password: string;
  info: string;
  img: string;
}

export class MemberModel implements Member {
  id: number;
  name: string;
  email: string;
  password: string;
  info: string;
  img: string;
}
