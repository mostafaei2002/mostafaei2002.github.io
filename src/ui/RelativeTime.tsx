import { formatDistance } from 'date-fns';
function RelativeTime({ created_at }) {
  const relativeDateTime = formatDistance(created_at, new Date(), {
    addSuffix: true,
  });
  return (
    <div className='text-sm py-2 capitalize ps-1 text-neutral-600'>
      {relativeDateTime}
    </div>
  );
}

export default RelativeTime;
