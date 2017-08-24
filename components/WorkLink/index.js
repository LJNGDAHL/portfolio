import Link from 'next/link';

const WorkLink = props => (
  <Link as={`/work/${props.id}`} href={`/single?id=${props.id}`}>
    <a>{props.title}</a>
  </Link>
);

export default WorkLink;
