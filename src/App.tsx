import { createSignal } from "solid-js";
import "./App.css";
import Todo from "./components/Todo";

import { MapTodo } from "./components/Interface";

function App() {
	const [clist, setClist] = createSignal<number>(0); // ini untuk kebutuhan id, bisa dirubah rubah
	const [text1, setText1] = createSignal<string>(""); // ini input, bisa berubah rubah
	const [textSend, setTextSend] = createSignal<MapTodo[]>([]); // ini yang mau dirender, sederhananya [clist() , text1()]

	// *SECTION 1 : TEXTSEND PURPOSE
	// MENAMBAH ID
	const TambahDeh = () => {
		setClist(clist() + 1);
	};

	// INPUT
	const InputDeh = (dataText: string, e: Event) => {
		setText1(dataText);
		TambahDeh();
		setTextSend([...textSend(), { id: clist(), text: text1() }]);
		setText1("");
	};

	// *SECTION 2 : DOM CRUD PURPOSE
	// CREATE
	const SubmitDeh = (e: Event) => {
		e.preventDefault();
	};

	// DELETE
	const DeleteDeh = (id: number) => {
		setTextSend(textSend().filter((tugas) => tugas.id !== id));
	};

	// UPDATE
	const UpdateDeh = (id: number, dataText: string) => {
		setTextSend((tugas) =>
			tugas.map((todo) =>
				todo.id === id ? { ...todo, text: dataText } : todo
			)
		);
	};

	return (
		<div>
			<form onSubmit={SubmitDeh}>
				<input
					type="text"
					value={text1()}
					onChange={(e) => InputDeh(e.target.value, e)}
				/>
				<button type="submit"> Submit </button>
			</form>

			<div id="render-disini">
				{textSend().map((tugas) => (
					<Todo tugas={tugas} deleto={DeleteDeh} updato={UpdateDeh} />
				))}
			</div>
		</div>
	);
}

export default App;
