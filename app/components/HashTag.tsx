"use client";
const HashTag = () => {
  return (
    <div className="grid justify-items-center">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">タグ</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <button className="btn btn-sm">Small</button>
          <button className="btn btn-sm">Small</button>
          <button className="btn btn-sm">Small</button>
          <button className="btn btn-sm">Small</button>
          <button className="btn btn-sm">Small</button>
          <button className="btn btn-sm">Small</button>
        </div>
      </label>
    </div>
  );
};

export default HashTag;
