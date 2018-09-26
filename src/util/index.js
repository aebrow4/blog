export function truncatePost(post) {
  let truncatedPost = { ...post };
  let nodes = [...truncatedPost.document.nodes]
  nodes = nodes.slice(0, 3);
  truncatedPost.document.nodes = nodes;
  return truncatedPost;
}

