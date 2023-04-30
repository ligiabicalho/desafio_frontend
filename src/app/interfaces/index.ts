export interface UserLogin {
  email: string;
  password: string;
}
export interface DataResponse {
  access_token?: string;
}
export interface ModulesEdu {
  name: string;
  bar: string;
  rota: string;
  image: string;
}

export interface bannerInputs {
  src: {
    background: string;
    person: string;
    name: string;
    arrow: string;
  };
  alt: {
    background?: string;
    person: string;
    name: string;
    arrow: string;
  };
}
