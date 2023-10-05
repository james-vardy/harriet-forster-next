type image = {
  id: number;
  attributes: {
    width: number;
    height: number;
    url: string;
  };
};

type collection = {
  id: number;
  attributes: {
    name: string;
    images: { data: [image] };
    cover: image;
  };
};

type collectionResponse = {
  data: collection;
};

type collections = {
  data: [collection];
};

type exhibition = {
  id: number;
  attributes: {
    name: string;
    date: string;
    venue: string;
    description: string;
    link: string;
  };
};

type projectOrResidency = {
  id: number;
  attributes: {
    name: string;
    description: string;
    date: date;
    link: string;
    createdAt: date;
    updatedAt: date;
    publishedAt: date;
  };
};

type projectsAndResidencies = {
  data: [projectOrResidency];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

type exhibitions = {
  data: [exhibition];
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
