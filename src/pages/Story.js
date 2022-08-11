import React, { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import useFetch from "../hooks/useFetch";

function Story(props) {
	const [title, setTitle] = useState();
	const [body, setBody] = useState();
	const [description, setDescription] = useState();
	const [creativity, setCreativity] = useState();
	const [loading, uploads] = useFetch("http://localhost:1337/api/upload/files");

	const onTitleChange = (e) => setTitle(e.target.value);
	const onBodyChange = (e) => setBody(e.target.value);
	const onDescriptionChange = (e) => setDescription(e.target.value);
	const onCreativityChange = (e) => setCreativity(parseInt(e.target.value));

	const handleSubmit = (e) => {
		e.preventDefault();
		const datas = { title, body, description, creativity };

		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				data: {
					title: datas.title,
					body: datas.body,
					description: datas.description,
					tag: datas.creativity,
					thumbnail: uploads.length + 1,
					author: 1,
				},
			}),
		};
		if (!loading) {
			fetch("http://localhost:1337/api/articles", requestOptions)
				.then((response) => response.json())
				.then((res) => console.log(res));
		}
	};

	const handleSubmitFile = (e) => {
		e.preventDefault();
		const data = new FormData();
		data.append("files", e.target.files[0]);

		const requestOptions = {
			method: "POST",
			body: data,
		};
		fetch("http://localhost:1337/api/upload/", requestOptions)
			.then((response) => response.json())
			.then((res) => console.log(res));
	};

	return (
		<div>
			<Navbar />

			<form>
				<input
					placeholder='Title'
					onChange={onTitleChange}
					value={title}
					required
				/>
				<input
					placeholder='Body'
					onChange={onBodyChange}
					value={body}
					required
				/>
				<input
					placeholder='Description'
					onChange={onDescriptionChange}
					value={description}
					required
				/>
				<input type='checkbox' onChange={onCreativityChange} value='3' />{" "}
				<span> Creativity </span>
				<button type='submit' onClick={handleSubmit}>
					Create Post
				</button>
			</form>

			<form>
				<input
					type='file'
					onChange={handleSubmitFile}
					id='file'
					name='file'></input>
			</form>
		</div>
	);
}

export default Story;
