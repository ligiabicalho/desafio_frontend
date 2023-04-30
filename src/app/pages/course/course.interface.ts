export interface Documents {
  data: Document[];
}

export interface Document {
  id: string;
  // pages aparece no retorno do usuário Dev no Postman, mas não para o meu usuário.
  pages?: Array<object>;
  title: string;
  thumbs: {
    hight: string;
    low: string;
    medium: string;
    raw: string;
  };
  cover: {
    hight: string;
    low: string;
    medium: string;
    raw: string;
  };
  updated_at: string;
}

export interface gridTheme {
  title: string;
  description: string;
  type: string;
  videos?: string;
  docs?: Document[];
  viewMore: {
    text: string;
    url: string;
    icon?: string;
  };
}
