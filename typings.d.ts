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

type collections = {
  data: [collection];
};

type collectionResponse = {
  data: collection;
};
