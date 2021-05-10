import React, { useState } from 'react';
import AddBtn from './AddBtn';
import MovieService from '../../services/MovieService';

const MovieForm = (props) => {
    const allMovies = MovieService.getMovies()

    const [movies] = useState({ allMovies })
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating] = useState(0);
    const [ratingsCounter] = useState(0);

    const addMovi = (movie) => {
        try {
            MovieService.addMovie(movie)
        } catch (error) {
            alert("Couldnt add movie!")
        }
    }





    const onChangePicUrl = (e) => setImageUrl(e.target.value);
    const onChangeName = (e) => setTitle(e.target.value);
    const onChangeMovieSubCaption = (e) => setSubtitle(e.target.value);
    const onChangeDescription = (e) => setDescription(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        if (imageUrl === '' || title === '' || subtitle === '' || description === '') {
            return alert("Please enter value in all fields.")
        }

        props.onSubmit({
            imageUrl,
            title,
            subtitle,
            description,
            rating,
            ratingsCounter
        });


    };



    return (
        <div id='add-movie-modal'>
            <form onSubmit={onSubmit} id='movieForm'>
                <h2 className='text-primary'>
                    Add movie
            </h2>
                <input
                    type='text'
                    placeholder='Picture url'
                    name='imageUrl'
                    value={imageUrl}
                    onChange={onChangePicUrl}
                    required
                />
                <input
                    type='text'
                    placeholder='Movie name'
                    name='name'
                    value={title}
                    onChange={onChangeName}
                    required
                />
                <input
                    type='text'
                    placeholder='Sub caption'
                    name='movie_subCaption'
                    value={subtitle}
                    onChange={onChangeMovieSubCaption}
                    required
                />
                <input
                    type='text'
                    placeholder='Description'
                    name='decription'
                    value={description}
                    onChange={onChangeDescription}
                    required
                />
                <a onClick={onSubmit}
                    href='#add-movie-modal'
                    className='modal-trigger'
                >Add Movie</a>
                <br />

            </form>
        </div>
    );
};

export default MovieForm;
