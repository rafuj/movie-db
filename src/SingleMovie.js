import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const url =
	"https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const SingleMovie = () => {
	const { id } = useParams();

	const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

	if (isLoading) {
		return <div className="loading"></div>;
	}

	if (error.show) {
		return (
			<div className="page-error">
				<h1>{error.msg}</h1>
				<Link to="/" className="btn">
					Back To Movies
				</Link>
			</div>
		);
	}

	const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
	return (
		<>
			<section className="single-movie">
				<img src={poster !== "N/A" ? poster : url} alt="" />
				<div className="single-movie-info">
					<h4>{title}</h4>
					<p>{plot}</p>
					<h4>{year}</h4>
					<Link to="/" className="btn">
						Back to Movies
					</Link>
				</div>
			</section>
		</>
	);
};

export default SingleMovie;
