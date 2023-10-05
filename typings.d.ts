type image = {
  id: number;
  attributes: {
    width: number;
    height: number;
    url: string;
  };
};

type post = {
  id: number;
  attributes: {
    name: string;
    description: string;
    images: { data: [image] };
    date: date;
  };
};

type postResponse = {
  data: {
    id: number;
    attributes: {
      title: string;
      description: string;
      images: { data: [image] };
      date: date;
    };
  };
};

type posts = {
  data: [post];
};

type coverVideo = {
  data: {
    id: number;
    attributes: {
      createdAt: Date;
      updatedAt: Date;
      publishedAt: Date;
      video: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: null;
            caption: null;
            width: null;
            height: null;
            formats: null;
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: null;
            provider: string;
            provider_metadata: null;
            createdAt: Date;
            updatedAt: Date;
          };
        };
      };
    };
  };
  meta: {};
};

type bio = {
  data: {
    id: number;
    attributes: {
      text: string;
      createdAt: Date;
      updatedAt: Date;
      publishedAt: Date;
    };
  };
  meta: {};
};

type email = {
  data: {
    id: number;
    attributes: {
      email: string;
    };
  };
  meta: {};
};

type instagram = {
  data: {
    id: number;
    attributes: {
      link: string;
    };
  };
  meta: {};
};

type headshot = {
  data: {
    id: number;
    attributes: {
      image: {
        data: {
          id: number;
          attributes: {
            url: string;
          };
        };
      };
    };
  };
  meta: {};
};
