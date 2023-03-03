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
    date: Date;
    location: string;
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
