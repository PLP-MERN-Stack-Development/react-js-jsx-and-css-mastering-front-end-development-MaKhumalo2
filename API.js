export default function Card({ student, onEdit, onDelete }) {
  const [edit, setEdit] = useState(false);
  const [draft, setDraft] = useState({
    name: student.name,
    email: student.email,
    age: student.age,
  });
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "C:UserskhumaOneDrive - Mangosuthu University of TechnologyDesktopMastering Front-end Development\react-js-jsx-and-css-mastering-front-end-development-MaKhumalo2srccomponents"
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      {edit ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onEdit(student.id, draft);
            setEdit(false);
          }}
        >
          <input
            className="border rounded-lg px-3 py-1 w-full mb-2"
            value={draft.name}
            onChange={(e) => setDraft({ ...draft, name: e.target.value })}
            placeholder="Name"
          />
          <input
            className="border rounded-lg px-3 py-1 w-full mb-2"
            value={draft.email}
            onChange={(e) => setDraft({ ...draft, email: e.target.value })}
            placeholder="Email"
          />
          <input
            className="border rounded-lg px-3 py-1 w-full mb-2"
            value={draft.age}
            onChange={(e) => setDraft({ ...draft, age: e.target.value })}
            placeholder="Age"
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setEdit(false)}
              className="bg-gray-400 text-white px-3 py-1 rounded-lg text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">{student.name}</h3>
            <p className="text-slate-600 text-sm">{student.email}</p>
            <p className="text-slate-600 text-sm">Age: {student.age}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setEdit(true)}
              className="border px-3 py-1 rounded-lg text-sm"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(student.id)}
              className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
