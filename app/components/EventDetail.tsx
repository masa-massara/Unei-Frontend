import OptionButton from "./OptionButton";

const EventDetail = () => {
  const tags = [
    {
      name: "tag1",
      color: "red-700",
      likeCount: 10,
    },
    {
      name: "tag2",
      color: "yellow-500",
      likeCount: 20,
    },
  ];

  return (
    <div className="border bottom-10 border-b-black">
      <div className="card-body">
        <div className="flex flex-wrap space-x-2">
          {tags.map((t) => (
            <div key={t.name} className={`badge badge-outline bg-${t.color}`}>
              {t.toString()}
            </div>
          ))}
        </div>
        <h1 className="card-title text-black">aaaaa</h1>
        <p>
          詳細です詳細です詳細です詳細です詳細です詳細です詳細です詳細です詳細です詳細です詳細です詳細です詳細です詳細です詳細です
        </p>

        <OptionButton />
      </div>
    </div>
  );
};

export default EventDetail;
