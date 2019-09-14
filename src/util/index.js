export function truncatePost(post) {
  let truncatedPost = { ...post };
  let nodes = truncatedPost.document.nodes;
  nodes = nodes.slice(0, 3);
  truncatedPost.document.nodes = nodes;
  return truncatedPost;
}

export function postIdFromTitle(postTitle) {
  return postTitle
    .replace(' ', '-')
    .trim()
    .toLowerCase();
}

export function addMetadataToPostMarkup(markup, metadata) {
  return { ...markup, ...metadata };
}
