import { MapTodo } from "./Interface";
import { createSignal } from "solid-js";

export default function Todo(props: {
	tugas: MapTodo;
	deleto: (id: number) => void;
	updato: (id: number, dataText: string) => void;
}) {
	const [showModal, setShowModal] = createSignal(false);

	function openModal() {
		setShowModal(!showModal());
	}

	const UpdateCoy = (dataText: string, e: Event) => {
		props.updato(props.tugas.id, dataText);
	};

	const SubmitDeh = (e: Event) => {
		e.preventDefault();
	};

	const idTugas = "job".concat(props.tugas.id.toString());
	const textTugas = props.tugas.text;
	return (
		<div>
			<div id={idTugas} class="todo">
				<div class="flex justify-end">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 deleteHover"
						cursor="pointer"
						onclick={() => props.deleto(props.tugas.id)}
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
						/>
					</svg>

					{/* SECTION MODAL */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 updateHover"
						cursor="pointer"
						onclick={() => openModal()}
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
						/>
					</svg>
					{showModal() && (
						<div
							id="toast-default"
							class="fixed top-56 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
							role="alert"
						>
							<form onSubmit={SubmitDeh}>
								<input
									type="text"
									onChange={(e) =>
										UpdateCoy(e.target.value, e)
									}
								/>
								<button type="submit"> change </button>
							</form>

							<button
								type="button"
								class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
								data-dismiss-target="#toast-default"
								aria-label="Close"
								onclick={() => openModal()}
							>
								<span class="sr-only">Close</span>
								<svg
									class="w-3 h-3"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 14"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
									/>
								</svg>
							</button>
						</div>
					)}
					{/* SECTION MODAL */}
				</div>
				{textTugas}
			</div>
		</div>
	);
}
