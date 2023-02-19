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
  };
};

type collections = {
  data: [collection];
};

type collectionPopulated = {
  data: {
    id: number;
    attributes: {
      name: string;
      images: { data: [image] };
    };
  };
};
