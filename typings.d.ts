type image = {
  id: number;
  attributes: {
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
  id: number;
  attributes: {
    name: string;
    images: { data: [image] };
  };
};
