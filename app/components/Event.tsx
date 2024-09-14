const Event = () => {
  return (
    <div>
      <div className="flex flex-wrap space-x-2">
        {tags.map((t) => (
          <div key={t.name} className={`badge badge-outline ${tagColor}`}>
            {t.toString()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
