const Category = () => {
  return (
    <div>
      <div className="grid justify justify-items-center">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            カテゴリー選択
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>勉強会</a>
            </li>
            <li>
              <a>趣味</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
