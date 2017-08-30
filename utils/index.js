/**
 * Gets viewport height
 * @return {Number}
 */
export const vh = () => (
  Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
);

/**
 * Checks if an image is cached, else loads the image.
 * @param {string} src  The image source.
 */
export const isCached = (src) => {
  const image = new Image();
  image.src = src;

  return image.complete;
};

/**
 * Checks if element is in or above viewport
 * @param {string} element The element to be evaluated
 * @return {Boolean}
 */
export const inOrAboveView = (element) => {
  if ((window.scrollY + vh()) > element.offsetTop) {
    return true;
  }
  return false;
};

/* eslint-disable */
// TODO: Remove, only to be used during testing.
export const githubResponse = [{
  "id": "6492780516",
  "type": "PushEvent",
  "actor": {
    "id": 18701520,
    "login": "LJNGDAHL",
    "display_login": "LJNGDAHL",
    "gravatar_id": "",
    "url": "https://api.github.com/users/LJNGDAHL",
    "avatar_url": "https://avatars.githubusercontent.com/u/18701520?"
  },
  "repo": {
    "id": 100013943,
    "name": "LJNGDAHL/portfolio",
    "url": "https://api.github.com/repos/LJNGDAHL/portfolio"
  },
  "payload": {
    "push_id": 1934379565,
    "size": 1,
    "distinct_size": 1,
    "ref": "refs/heads/develop",
    "head": "6bb82af412e6760fde254e915f0b1f077f966bfb",
    "before": "76b722e5f389ed5dd3264d880ebf3267f66e85e1",
    "commits": [{
      "sha": "6bb82af412e6760fde254e915f0b1f077f966bfb",
      "author": {
        "email": "katarina@folkungagatan54.se",
        "name": "Katarina Ljungdahl"
      },
      "message": "Kept working on implementing Redux. This is a major work in progress.",
      "distinct": true,
      "url": "https://api.github.com/repos/LJNGDAHL/portfolio/commits/6bb82af412e6760fde254e915f0b1f077f966bfb"
    }]
  },
  "public": true,
  "created_at": "2017-08-21T14:38:21Z"
}];
