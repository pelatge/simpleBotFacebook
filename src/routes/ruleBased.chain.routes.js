module.exports = async function RuleBased(context, props) {
  if (context.event.text === 'hi') {
    // discontinue and return the `SayHi` action
    return SayHi;
  }
  // continue to the `next` action
  return props.next;
}
