import pathManager from 'path-kanri';

/* Twoot Endpoints*/
const getTwoot = 'twoots';
const postTwoot = 'twoot';

// Paths of pages
const { getPath: getApiEndpoint, getFullPath: getApiEndpointFull } =
  pathManager({
    getTwoot,
    postTwoot,
  });

export { getApiEndpoint, getApiEndpointFull };
