import agent from "../../../agent";

export async function getItemAndComments(id) {
  const item = await agent.Items.get(id);
  const comments = await agent.Comments.forItem(id);

  console.log("no change");
  return [item, comments];
}
