function Filter({ filter, setFilter }) {
  return (
    <div>
      <button onClick={() => setFilter("all")} className={filter==="all"?"active":""}>
        All
      </button>
      <button onClick={() => setFilter("pending")} className={filter==="pending"?"active":""}>
        Pending
      </button>
      <button onClick={() => setFilter("completed")} className={filter==="completed"?"active":""}>
        Completed (24h)
      </button>
    </div>
  );
}

export default Filter;